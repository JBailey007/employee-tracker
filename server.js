const express = require('express');
const mysql = require ('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Dx12ry',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

//Create a new department

//Get all departments

//Create a new Role

//Get all Roles

//Create a new Employee

//Get all Employees

//Update Employee Role
