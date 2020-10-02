import React from "react";
import SideNav from "../SideNav";
import Footer from "../Footer";

function FavoriteRender(props) {


    return (

        <div>
            <SideNav />
            <div className="container">
                <div className="row">
                    <div className="col m1"></div>
                    <div className="card favoritesCard">
                        <div className="card-image">
                            {props.userFavorite.collection.map((image) => {
                                return (
                                    <img src={image.favImageURL} alt={image._id} key={image._id} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default FavoriteRender;