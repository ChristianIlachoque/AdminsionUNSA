import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const address = "http://35.222.147.54:8000/";
export const LoginPage = () => {
  const { login, setUser } = useContext(AppContext);

  const [resGoogle, setResGoogle] = useState(null);
  const [resBack, setResBack] = useState(null);

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setResGoogle(codeResponse);
      console.log("login google: ", codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  const logOutGoogle = () => {
    googleLogout();
    //setProfile(null);
  };

  useEffect(() => {
    if (resGoogle) {
      const getTokenUser = async () => {
        const res = await axios.post(
          `${address}api/auth/transformGoogleToken/`,
          { access_token: resGoogle.access_token }
        );
        setResBack(res.data);
      };
      getTokenUser().catch((error) => {
        console.log("user no regitrado en app: ", error);
      });
    }
  }, [resGoogle]);

  useEffect(() => {
    if (resBack) {
      const getUserBack = async () => {
        const res = await axios.get(`${address}api/user/${resBack.id}`, {
          headers: {
            Authorization: `Bearer ${resBack.access_token}`,
          },
        });
        setUser(res.data);
        console.log("data", res.data);
        // if (res.data) {
        //   login(res.data);
        // }
        //login(res.data);
        localStorage.setItem("user", JSON.stringify(res.data))
        login()
      };
      getUserBack();
      // if(user){
      //   localStorage.setItem("user", JSON.stringify(user));
      //   login(user)
      // }
    }
  }, [resBack]);

  return (
    <>
      <h1>Login Page</h1>
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <button onClick={() => loginGoogle()}>Sign in with Google 🚀 </button>
      </div>
      {/* <button onClick={login}>Login</button> */}
    </>
  );
};
