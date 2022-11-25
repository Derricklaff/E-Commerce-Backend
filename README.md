# E-Commerce-Backend


## Description
This node application is a sample backend API for an e-commerce database. The database models include categories, products within those categories, and tags that each product has. Each Product tag is associated with tags, developing an indirect relationship between tags and products.

## Technology
MySQL2, Sequelize, and Express. Naturally, SQL was used as the database, interacted with using sequelize node package as previously mentioned. Express was used for the server instance, which handles routes and controls sequelize operations.

## Demo
https://drive.google.com/file/d/1rJM5DR62g6FR8t7SYlgiyz-OEKaBDcE5/view

## ScreenShot
![Insomnia Screen Shot](/E-Commerce-Backend/assets/Insomnia%20snippet.JPG)

## Install
Installation instructions: npm i
On MySQL CLI: run SOURCE db/schema.sql
On CLI: run npm run seed
Create an .env file in the root directory with three variables with your respective credentials: DB_NAME='database name' DB_USER='user name' DB_PASSWORD='SQL password'

## Usage
In Windows Command Processor/Terminal, run node server.js
