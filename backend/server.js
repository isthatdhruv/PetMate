const Port = process.env.PORT || 3000;
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');



express.application.use = function (req, res, next) { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}