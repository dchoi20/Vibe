import Axios from "axios";

export default {
  getImages: function () {
    return Axios.get("/images");
  },
  searchImages: function (query) {
    return Axios.get(`/searchimages/${query}`);
  },
};
