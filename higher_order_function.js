/**********
 * Higher  order function 
 * A function that takes another function as a parameter or returns another function is called a higher-order function.
 * 
 * 
 */

//  EXample: one
// movies list released before year 20002000
const movieList = [
    {
        title: "Batman",
        year:1989,
        director:'Tim Burton',
        imbRating:7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
      },
      {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
      },
      {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
      },
      {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
      },
      {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
      },
      {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
      }
];

function movieList200(movieList){
    return  movieList.filter( movie => (
        movie.year <2000
    ))
}

const movieslistFilter = movieList200(movieList);

const movieTitle = movieslistFilter.map(movie =>(
  movie.title
))

console.log(movieTitle);



//Example two
//find squre of any number

function base(b){
  
  return function(n){
    var result = 1;
    for(let i = 0; i < b; i++){
     result *= n;
    }
    return result;
  }
}

const base3 = base(10);
const reuslt = base3(2);
console.log(reuslt);