import Axios from "axios";
export const authenticatedAxios = (state) => {
  return Axios.create({
      headers: {
          "Authorization": `Bearer<${state.jwt}>`
      }
  });
}



