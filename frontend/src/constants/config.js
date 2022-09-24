import { QueryClient } from "react-query";
const queryClient = new QueryClient();

const AXIOS_URL = 
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:5000/api/"
export { AXIOS_URL, queryClient };