const express = require('express');
const reviewController = require('../../controller/ReviewController/ReviewController');

const router = express.Router();

router.get('/',reviewController.getAllReview);

router.post('/create',reviewController.reviewCreate);

router.get('/movieId/:movieId',reviewController.getReviewByMovieId);

router.put('/update/:movieId',reviewController.reviewUpdate);


module.exports = router;
