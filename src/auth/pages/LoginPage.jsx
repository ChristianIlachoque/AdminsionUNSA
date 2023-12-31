import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

// STYLES
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// IMAGES
import fondo from "../../assets/fondo.png";
import icono from "../../assets/icono.png";
import unsa from "../../assets/unsa.png";
import { baseBack } from "../../api/baseBack";

const address = `${baseBack}/`;
export const LoginPage = () => {
  const { login, setUser, setAccessToken } = useContext(AppContext);

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
        setAccessToken(res.data.access_token);
        console.log("accesToken", res.data.access_token);
        localStorage.setItem(
          "token",
          JSON.stringify(`Bearer ${res.data.access_token}`)
        );
        console.log(res.data);
      };
      getTokenUser().catch((error) => {
        window.alert("Usuario no registrado en esta web");
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
        localStorage.setItem("user", JSON.stringify(res.data));
        login();
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
      <div className="center">
        <Container fluid>
          <Row>
            <Col sm={4} style={{ backgroundColor: "rgb(27 68 143)" }}>
              <Row style={{ textAlign: "center", position: "relative" }}>
                <Col sm={4}>
                  <Image
                    src={icono}
                    style={{
                      transform: "translate(-20%, +10%)",
                      height: "80%",
                    }}
                  />
                </Col>
                <Col sm={8}>
                  <Image
                    src={unsa}
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-35%, -50%)",
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={8}
              style={{
                textAlign: "center",
                backgroundColor: "rgb(217,217,217)",
              }}
            >
              <br></br>
              <h1>SISTEMA DE SELECCIÓN PARA EL PROCESO DE ADMISION</h1>
            </Col>
          </Row>
          <Row
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: "cover",
              textAlign: "center",
              textAnchor: "center",
              position: "relative",

              height: "80vh",
            }}
          >
            <Col
              md={{ span: 3, offset: 3 }}
              style={{
                position: "absolute",
                backgroundColor: "rgb(217,217,217)",
                top: "50%",
                left: "50%",
                width: "500px",
                transform: "translate(-115%, -50%)",
                borderRadius: "25px",
              }}
            >
              <br></br>
              <Row style={{ textAlign: "center", position: "relative" }}>
                <Col>
                  <Image
                    src={icono}
                    style={{
                      transform: "translate(-20%, +10%)",
                      height: "80%",
                    }}
                  />
                </Col>
                <Col>
                  <Image
                    src={unsa}
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-35%, -50%)",
                    }}
                  />
                </Col>
              </Row>
              <br></br>
              <button
                style={{
                  backgroundColor: "rgb(27 68 143)",

                  width: "400px",
                  borderRadius: "10px",
                }}
                onClick={() => loginGoogle()}
              >
                <h4 style={{ color: "white" }}>Ingresa con su correo UNSA</h4>
              </button>

              <br></br>
              <p>
                Problemas con correos:{" "}
                <a href="www.google.com">soportecorreo@unsa.edu.pe</a>
              </p>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
