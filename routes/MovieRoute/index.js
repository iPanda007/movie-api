const express = require('express');
const MovieController = require('../../controller/MovieController/MovieController');
const router = express.Router();

router.get('/',MovieController.getAllMovieList);

router.get('/list/:id',MovieController.getMovieListById)

router.post('/create',MovieController.createService);

router.put('/update/:id',MovieController.updateMovie);

router.get('/search/:title',MovieController.findMovieBytitle)

module.exports = router;