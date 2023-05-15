const ReviewService = require('../../services/ReviewService/Review');

async function getAllReview(req,res){
        try{
            const reviewList = await ReviewService.getAllReview();
            if(!reviewList) throw Error("Cannot Find List");
            res.status(201).json(reviewList);
        }catch(err){
            res.status(400).json({message:err.message})
        }
}

async function getReviewByMovieId(req,res){
    try {
        console.log("allllll")
        const reviewListByMovieId = await ReviewService.getReviewByMovieId(req.params['movieId'])
        if(!reviewListByMovieId) throw Error("Cannot find by movie Id");
        res.status(201).json(reviewListByMovieId);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

async function reviewCreate(req,res){
    try {

        const reviewCreate = await ReviewService.reviewCreate(req.body);
         if(!reviewCreate) throw Error("Cannot create review");
         res.status(201).json(reviewCreate)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

}

async function reviewUpdate(req,res){
        try{
              console.log(req.body,"hello")
                const review = await ReviewService.reviewUpdate(req.params['movieId'],req.body);
                if(!review) throw Error('Cannot update Review');
                res.status(201).json(review);
        }catch(error){
            console.log(error.message,"allllll")
            res.status(400).json({message:error.message});
        }
}

module.exports = {
    reviewCreate,
    getAllReview,
    getReviewByMovieId,
    reviewUpdate
}