import { createContext } from "react";

const musicContext = createContext({
  user: {},
  data: {},
  updateData: (value) => {},
  addData: () => {},
});
export default musicContext;
