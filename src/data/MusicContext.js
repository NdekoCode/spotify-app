import { createContext } from "react";

const MusicContext = createContext({
  user: {},
  data: {},
  updateData: (value) => {},
  addData: () => {},
  setData: () => {},
});
export default MusicContext;
