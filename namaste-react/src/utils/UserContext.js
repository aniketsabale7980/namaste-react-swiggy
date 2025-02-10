import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Aniket",
    email: "aniket@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
