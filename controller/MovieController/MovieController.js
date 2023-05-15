const MovieServie = require("../../services/MovieService/Movie");

async function createService(req, res, next) {
   const MovieCreate = await MovieServie.SaveMovie(req.body);
    if(!MovieCreate){
       res.status(400).json({message:"Cannot Create Movie"});
    }else{
      res.status(201).json(MovieCreate);
    }
}

async function getAllMovieList(req, res, next) {
  try {
    const MovieList = await MovieServie.getAllMovieList();
     console.log(MovieList)
    if (!MovieList) throw Error("Cannot find List");
    res.status(201).json(MovieList);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function findMovieBytitle(req,res,next){
    try{
        const MovieList = await MovieServie.findMovieByTitle(req.params['title'])
        if(!MovieList)throw Error('Cannot find Title');
        res.status(201).json(MovieList);
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

async function getMovieListById(req,res,next){
   try{
      const MovieListId = req.params['id'];
      const MovieList =  MovieServie.getMovieListById(MovieListId);
      if(!MovieList)throw Error('Cannot Find Movie List')
      res.status(201).json(MovieList)
   }catch(error){
    console.log(error.message)
    res.status(400).json({message:error.message})
   }
}

async function updateMovie(req,res,next){

  try{
     const MovieId = req.params['id'];
     const MovieUpdate = await MovieServie.updateMovie(MovieId,req.body);
     if(!MovieUpdate)throw Error('Cannot update Movie');
     res.status(201).json(MovieUpdate);
  }catch(err){
     res.status(400).json({message:err.message});
  }

}

module.exports = {
  createService,
  getAllMovieList,
  getMovieListById,
  updateMovie,
 findMovieBytitle,
};
