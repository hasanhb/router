export const moviesData = [
  {
    Id: Math.random().toString(),
    Name: "The Godfather",
    Rating: 4,
    Description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Year: 1972,
    Genre: "Crime, Drama",
    Trailer:"https://www.youtube.com/embed/CWoQlDlyQj4",
Poster:
      "https://i.pinimg.com/736x/80/13/6e/80136e67c516686e2a63060f6d60b90f.jpg",
      Director: "Francis Ford Coppola",
      Writers: "Mario Puzo, Francis Ford Coppola",
      Stars: "Marlon Brando, Al Pacino, James Caan",
  },
  {
    Id: Math.random().toString(),
    Name: "Predestination",
    Rating: 4,
    Description:
      "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
    Year: 2014,
    Genre: "Action, Drama, Sci-Fi",
    Trailer:"https://www.youtube.com/embed/-FcK_UiVV40",
Poster:
      "https://media.senscritique.com/media/000008076485/source_big/Predestination.jpg",
      Director: "Michael Spierig, Peter Spierig",
      Writers: "Michael Spierig, Peter Spierig",
      Stars: "Ethan Hawke, Sarah Snook, Noah Taylor",
      
  },
  {
    Id: Math.random().toString(),
    Name: "Interstellar",
    Rating: 4,
    Description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Year: 2014,
    Genre: "Adventure, Drama, Sci-Fi",
    Trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
Poster:
      "data:image/jpeg;base64,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",
      Director: "Christopher Nolan",
      Writers: "Jonathan Nolan, Christopher Nolan",
      Stars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    },
  {
    Id: Math.random().toString(),
    Name: "The Dictator",
    Rating: 3,
    Description:
      "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
    Year: 2012,
    Genre: "Comedy",
    Trailer:"https://www.youtube.com/embed/cYplvwBvGA4",
Poster:
      "https://www.joblo.com/assets/images/oldsite/posters/images/full/dictator-intl-poster-99_thumb.jpg",
      Director: "Larry Charles",
      Writers: "Sacha Baron Cohen, Alec Berg",
      Stars: "Sacha Baron Cohen, Anna Faris, John C. Reilly",
  },
  {
    Id: Math.random().toString(),
    Name: "Ali G Indahouse",
    Rating: 3,
    Description:
      "Ali G unwittingly becomes a pawn in the Chancellor's plot to overthrow the Prime Minister of Great Britain. However, Ali is embraced by the nation as a voice of the youth, making the PM and his government more popular than ever.",
    Year: 2002,
    Genre: "Comedy",
    Trailer:"https://www.youtube.com/embed/7HXNtE_kaQY",
Poster:
      "https://images-na.ssl-images-amazon.com/images/I/51CkguejiHL._AC_SY445_.jpg",
      Director: "Mark Mylod",
      Writers: "Sacha Baron Cohen, Dan Mazer",
      Stars: "Sacha Baron Cohen, Emilio Rivera, Gina La Piana",
  },
  {
    Id: Math.random().toString(),
    Name: "Gladiator",
    Rating: 4,
    Description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    Year: 2000,
    Genre: "Action, Adventure, Drama",
    Trailer:"https://www.youtube.com/embed/owK1qxDselE",
Poster:
      "https://i.pinimg.com/originals/02/87/61/02876144fce74bd2a5f434c60f031989.jpg",
      Director: "Ridley Scott",
      Writers: "David Franzoni, David Franzoni",
      Stars: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
  },
  {
    Id: Math.random().toString(),
    Name: "300",
    Rating: 3,
    Description:
      "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    Year: 2006,
    Genre: "Action, Drama",
    Trailer:"https://www.youtube.com/embed/UrIbxk7idYA",
Poster:
      "https://images-na.ssl-images-amazon.com/images/I/51MtJBws9ZL._AC_.jpg",
      Director: "Zack Snyder",
      Writers: "Zack Snyder, Kurt Johnstad",
      Stars: "Gerard Butler, Lena Headey, David Wenham",
  },
];