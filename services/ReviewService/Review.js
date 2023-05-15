const ReviewMovie = require('../../models/MovieCrudSchema/Review');
const mongoose = require('mongoose');

async function getAllReview(){
   
    return  ReviewMovie.find();

}

async function getReviewByMovieId(movieId){
    return ReviewMovie.find({movie:movieId}).populate("movie");
}


async function reviewCreate(data){
     let newReview = new ReviewMovie({
        movie: new mongoose.Types.ObjectId(data.movie),
        rating :data.rating,
        review:data.review
     })
     await newReview.save();
     return newReview.populate('movie');
}

async function reviewUpdate(reviewId,reviewData){

    console.log(reviewData.movie)

    const updateReview = await ReviewMovie.findByIdAndUpdate(reviewId,{
        movie:new mongoose.Types.ObjectId(reviewData.movie),
        rating : reviewData.rating,
        review: reviewData.review,

    },{new:true})

    return updateReview;

}

module.exports = {
    getAllReview,
    getReviewByMovieId,
    reviewCreate,
    reviewUpdate
}
