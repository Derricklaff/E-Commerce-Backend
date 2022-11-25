const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    let data = Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(data);
  }
  catch (err) {
    res.json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    let data = Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    });

    if (!data) {
      return res.status(404).json("Invalid Field");
    }

    res.status(200).json(data);
  }
  catch (err) {
    res.json(err)
  }
});

//Create a new category
router.put('/:id', async (req, res) => {
  try {
    let data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!data) {
      return res.status(404).json("Invalid Field");
    }

    res.status(200).json("Category updated");
  }
  catch (err) {
    res.json(err)
  }
});



router.delete('/:id', async (req, res) => {
  try {
    let data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })

    if (!data) {
      return res.status(404).json("Invalid Field");
    }

    res.status(200).json("Category deleted")
  }
  catch (err) {
    res.json(err)
  }
});

module.exports = router;
