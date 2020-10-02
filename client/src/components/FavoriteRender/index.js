import React from "react";
import SideNav from "../SideNav";
import Footer from "../Footer";
import "./style.css";

function FavoriteRender(props) {
  return (
    <div>
      <SideNav />
      <div className="container">
        <h2 className="center-align">Image Collection</h2>
        <div className="row">
          <div className="col m2"></div>

          <div className="col m8">
            {props.userFavorite.collection.map((image) => {
              return (
                <div className="card favoritesCard">
                  <div className="card-image">
                    <img
                      src={image.favImageURL}
                      alt={image._id}
                      key={image._id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col m2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteRender;
