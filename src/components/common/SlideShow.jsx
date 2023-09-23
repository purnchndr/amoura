import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const Slideshow = ({ items }) => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "100vw 30vh",
    height: "30vh",
  };
  return (
    <div className="slide-container">
      <Slide
        duration={1200}
        prevArrow={<span> &#x2190; </span>}
        nextArrow={<span> &#x2192; </span>}
      >
        {items.map((item, index) => (
          <Link to={item.link} key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${item.image})` }}
            ></div>
          </Link>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
