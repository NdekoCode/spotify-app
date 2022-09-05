import { createContext } from "react";

const MusicContext = createContext({
  searchValue: "",
  user: {},
  data: {},
  updateData: (value) => {},
  addData: () => {},
  setData: () => {},
});
export default MusicContext;
