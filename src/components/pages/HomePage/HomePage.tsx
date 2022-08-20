import Card from "../../UI/molecules/MovieCard/Card";
import List from "../../UI/molecules/MovieList/List";
import "./HomePage.css";

const HomePage = () => {
  const movies = [
    {
      id: "cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec",
      title: "The Terminator",
      genre: "ACTION",
      year: 1984,
      runtime: 107,
      imageUrl:
        "https://goombastomp.com/wp-content/uploads/2019/11/The-Terminator-Film-Review.jpeg",
      country: "United States",
      description:
        "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
      comments: [
        {
          id: "b2f910ee-f162-4169-b050-19db76d0d594",
          email: "m.gillings@maildrop.cc",
          movieId: "cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec",
          content: "This movie is great! :)",
          approved: true,
        },
        {
          id: "b6538887-2310-4c97-9422-5fe37e0e5e5a",
          email: "joana.cripps@maildrop.cc",
          movieId: "cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec",
          content: "Too much action! :(",
          approved: false,
        },
      ],
      ratings: [
        {
          id: "e4da3888-6903-4fda-811f-0007fb3a4f00",
          email: "joana.cripps@maildrop.cc",
          movieId: "cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec",
          grade: 3,
        },
      ],
      movieTrailer: "https://www.youtube.com/watch?v=k64P4l2Wmeg",
    },
  ];

  return (
    <div className="home__page">
      <List items={movies} />
    </div>
  );
};

export default HomePage;
