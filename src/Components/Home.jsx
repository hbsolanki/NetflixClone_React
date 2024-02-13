import React, { useEffect, useState } from "react";
import "../Styles/Home.scss";
import Row from "./Row.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const apiKey = process.env.API_KEY;
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data1 = await axios.get(
        `${url}/movie/${upcoming}?api_key=${apiKey}&page=2`
      );
      setUpcomingMovies(data1.data.results);

      let data2 = await axios.get(
        `${url}/movie/${nowPlaying}?api_key=${apiKey}`
      );
      setNowPlayingMovies(data2.dataresults);

      let data3 = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(data3.data.results);

      let data4 = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(data4.data.results);

      let data5 = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(data5.data.genres);
    };

    fetchData();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${imgUrl}/${popularMovies[0].poster_path})`
            : "rgb(16,16,16)",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p> {popularMovies[0].overview}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item, index) => (
          <Link key={index} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
