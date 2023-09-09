import Axios from "axios";

const http = Axios.create({
  responseType: "json",
});

export { http };
