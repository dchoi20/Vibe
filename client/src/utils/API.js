import Axios from "axios";

export default {
  getImages: function () {
    return Axios.get("/images");
  },
};
