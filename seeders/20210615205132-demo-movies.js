'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        title: "Iron Man",
        image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2008",
        director: "Jon Favreau",
        rating: "PG-13",
        rottenTomatoesScore: "94%",
        userId: 1
      },
      {
        title: "The Incredible Hulk",
        image: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "June 2008",
        director: "Louis Leterrier",
        rating: "PG-13",
        rottenTomatoesScore: "67%",
        userId: 2
      },
      {
        title: "Iron Man 2",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2010",
        director: "Jon Favreau",
        rating: "PG-13",
        rottenTomatoesScore: "72%",
        userId: 3
      },
      {
        title: "Thor",
        image: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2011",
        director: "Kenneth Branagh",
        rating: "PG-13",
        rottenTomatoesScore: "77%",
        userId: 4
      },
      {
        title: "Captain America: The First Avenger",
        image: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "July 2011",
        director: "Joe Johnston",
        rating: "PG-13",
        rottenTomatoesScore: "80%",
        userId: 5
      },
      {
        title: "Marvel's The Avengers",
        image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2012",
        director: "Joss Whedon",
        rating: "PG-13",
        rottenTomatoesScore: "91%",
        userId: 6
      },
      {
        title: "Iron Man 3",
        image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
        releaseDate: "May 2013",
        director: "Shane Black",
        rating: "PG-13",
        rottenTomatoesScore: "79%",
        userId: 7
      },
      {
        title: "Thor: The Dark World",
        image: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
        releaseDate: "November 2013",
        director: "Alan Taylor",
        rating: "PG-13",
        rottenTomatoesScore: "66%",
        userId: 8
      },
      {
        title: "Captain America: The Winter Soldier",
        image: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY268_CR1,0,182,268_AL_.jpg",
        releaseDate: "April 2014",
        director: "Anthony and Joe Russo",
        rating: "PG-13",
        rottenTomatoesScore: "90%",
        userId: 9
      },
      {
        title: "Guardians of the Galaxy",
        image: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "August 2014",
        director: "James Gunn",
        rating: "PG-13",
        rottenTomatoesScore: "92%",
        userId: 10
      },
      {
        title: "Avengers: Age of Ultron",
        image: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2015",
        director: "Joss Whedon",
        rating: "PG-13",
        rottenTomatoesScore: "76%",
        userId: 11
      },
      {
        title: "Ant-Man",
        image: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "July 2015",
        director: "Peyton Reed",
        rating: "PG-13",
        rottenTomatoesScore: "83%",
        userId: 12
      },
      {
        title: "Deadpool",
        image: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "February 2016",
        director: "Tim Miller",
        rating: "R",
        rottenTomatoesScore: "85%",
        userId: 13
      },
      {
        title: "Captain America: Civil War",
        image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2016",
        director: "Anthony and Joe Russo",
        rating: "PG-13",
        rottenTomatoesScore: "90%",
        userId: 14
      },
      {
        title: "Doctor Strange",
        image: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "November 2016",
        director: "Scott Derrickson",
        rating: "PG-13",
        rottenTomatoesScore: "89%",
        userId: 15
      },
      {
        title: "Guardians of the Galaxy Vol. 2",
        image: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "May 2017",
        director: "James Gunn",
        rating: "PG-13",
        rottenTomatoesScore: "85%",
        userId: 16
      },
      {
        title: "Spider-Man: Homecoming",
        image: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "July 2017",
        director: "Jon Watts",
        rating: "PG-13",
        rottenTomatoesScore: "92%",
        userId: 17
      },
      {
        title: "Thor: Ragnarok",
        image: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "November 2017",
        director: "Taika Waititi",
        rating: "PG-13",
        rottenTomatoesScore: "93%",
        userId: 18
      },
      {
        title: "Black Panther",
        image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "February 2018",
        director: "Ryan Coogler",
        rating: "PG-13",
        rottenTomatoesScore: "96%",
        userId: 19
      },
      {
        title: "Avengers: Infinity War",
        image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "April 2018",
        director: "Anthony and Joe Russo",
        rating: "PG-13",
        rottenTomatoesScore: "85%",
        userId: 20
      },
      {
        title: "Deadpool 2",
        image: "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY268_CR43,0,182,268_AL_.jpg",
        releaseDate: "May 2018",
        director: "David Leitch",
        rating: "R",
        rottenTomatoesScore: "84%",
        userId: 21
      },
      {
        title: "Ant-Man and the Wasp",
        image: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "July 2018",
        director: "Peyton Reed",
        rating: "PG-13",
        rottenTomatoesScore: "87%",
        userId: 22
      },
      {
        title: "Captain Marvel",
        image: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "March 2019",
        director: "Anna Boden and Ryan Fleck",
        rating: "PG-13",
        rottenTomatoesScore: "79%",
        userId: 23
      },
      {
        title: "Avengers: Endgame",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "April 2019",
        director: "Anthony and Joe Russo",
        rating: "PG-13",
        rottenTomatoesScore: "94%",
        userId: 24
      },
      {
        title: "Spider-Man: Far From Home",
        image: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "July 2019",
        director: "Jon Watts",
        rating: "PG-13",
        rottenTomatoesScore: "90%",
        userId: 25
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
