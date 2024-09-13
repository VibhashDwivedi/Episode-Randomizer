import React from "react";
import { Link } from "react-router-dom";
import cardData from "../data";

const Home = () => {
  return (
    <div className="bg-home pb-4">
      <div className="d-flex justify-content-center container">
        <div>
          <h1 className="text-center mt-1" style={{ fontFamily: "Montserrat" }}>
            Random Episode Generator
          </h1>
          <h2
            className="fs-5 mt-3 text-light-emphasis"
            style={{ textAlign: "center", fontFamily: "Montserrat" }}
          >
            Not sure what to watch? We've got you covered! Dive into your
            favorite series with a twist – discover random episodes with Episode
            Randomizer
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-sm-12 col-md-3 px-5 px-md-2 mt-3">
              <div className="card">
                <div className="card-body">
                  <Link to={card.link}>
                    <img
                      className="card-img-top"
                      height={320}
                      src={card.imageUrl}
                      alt={card.altText}
                    />
                  </Link>
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

