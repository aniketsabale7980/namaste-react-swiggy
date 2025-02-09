import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Aniket",
    email: "aniket@gmail.com",
  },
});

export default UserContext;
