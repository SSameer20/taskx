const User = require('../model/userModel');
const bodyParser = require('body-parser');
// const express = require('express');


const createUser = async (req, res) => {
    try {
     
      const { email, password } = req.query;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      
      const newUser = new User({
        email,
        password
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send({ message: 'Error creating user' }); 
    }
  };

module.exports = {
    createUser
};
