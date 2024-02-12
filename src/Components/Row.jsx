import Card from "./Card";
import "../Styles/Row.scss";

const Row = ({ title, arr = [] }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default Row;
