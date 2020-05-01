const express = require('express');
const router = express.Router();

const BookController = require('./controllers/BookController');

router.post('/', BookController.create); 
router.get('/:bookId', BookController.show); 
router.put('/:bookId', BookController.update); 
router.delete('/:bookId', BookController.delete); 

module.exports = router;