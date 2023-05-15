const Movie = require('../../models/MovieCrudSchema/Movie');


async function getAllMovieList(){
    
    return Movie.find().sort({_id:-1});
}

async function getMovieListById(MovieId){
   const MovieListId = Movie.findById(MovieId);
   return MovieListId
}

async function SaveMovie(body){
      let movieCreate = new Movie(body);
     return movieCreate.save();
}

async function updateMovie(MovieId,MovieBody){
    let movieUpdate = Movie.findByIdAndUpdate(MovieId,MovieBody,{new:true})
    return movieUpdate
}

async function findMovieByTitle(titleName){
    return Movie.find({
        title:titleName
    })
}

module.exports = {
    getAllMovieList,
    SaveMovie,
    getMovieListById,
    updateMovie,
    findMovieByTitle,
}