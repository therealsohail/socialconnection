import { auth } from "../components/Firebase/firebase";
let authState = {
  email: "shails",
  fullname: "",
  username: "",
  password: "",
};

export let authReducer = (state = authState, action) => {
  switch (action.type) {
    case "signup":
      return auth
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((res) => {
          console.log("User created!");
          console.log(res);
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    default:
      return state;
  }
};
