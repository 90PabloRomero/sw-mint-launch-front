import "../assets/css/templates/mmlogin.scss";
import Button from "../components/atoms/Button";
import metaLogo from "./../assets/img/zorro.png";
import SocialMedia from "../components/molecules/SocialMedia";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import api from "../util/api.js";
import "assets/css/templates/components/modal.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import MmHeader from "components/organisms/login/MmHeader";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const MmLoginPage = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [buttonname, setButtonName] = useState("");
  const [flag, setFlag] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("almost-there");
  // const [ip, setIP] = useState("");
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    // setModalOpen(true);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          // once connected,check existing wallet in db and open modal with create account form
          api
            .post("/checkifwalletexist", {
              params: { walletaddress: accounts[0] },
            })
            .then(function (res) {
              if (res.data.success === "existed") {
                localStorage.setItem("uuid", res.data.uuid);
                localStorage.setItem("token", res.data.token);
                setModalOpen(false);
                navigate("/compra-egg");
              } else if (res.data.success === "unexisted") {
                setModalOpen(true); // modified by tuktuk
              }
            });
        } else {
          setWallet("");
          setModalOpen(false);
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };
  // const vincularExist = () => {
  //   setCurrentModal("show-connect-with-existing-form");
  //   setButtonName("conectar");
  //   setFlag(0);
  // };
  const crearCuenta = () => {
    setCurrentModal("show-create-acc-form");
    setButtonName("Crear Cuenta");
    setFlag(1);
  };
  const checkWallet = async () => {
    await api
      .post("/checkifwalletexist", { params: { walletaddress: walletAddress } })
      .then(function (res) {
        if (res.data.success === "existed") {
          localStorage.setItem("uuid", res.data.uuid);
          localStorage.setItem("token", res.data.token);
          setModalOpen(false);
          navigate("/compra-egg");
        } else if (res.data.success === "unexisted") {
          setModalOpen(true); // modified by tuktuk
        }
      });
  };
  // the Modal
  const ShowCreateAccountModal = () => {
    // // the ip getter note this needs some cors header sent from backend
    // const getData = async () => {
    //   // const res = await axios.get("https://geolocation-db.com/json/");
    //   // console.log(res.data);
    //   // setIP(res.data.IPv4);
    //   // setIP("fake.ip.address.development");
    // };

    // useEffect(() => {
    //   getData();
    // }, []);

    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            <div className="create-account-modal">
              <button
                className="close-modal-button"
                onClick={() => {
                  setModalOpen(false);
                  setCurrentModal("almost-there");
                }}
              >
                X
              </button>
              {/*  */}
              {/* form starts */}
              {currentModal === "almost-there" ? (
                <>
                  <h1>Ya casi has llegado</h1>
                  <p className="my-1">
                    Conecta tu cuenta de juego para continuar
                  </p>
                  <div>
                    <button
                      className="button create-btn"
                      onClick={() => crearCuenta()}
                    >
                      Crear una nueva cuenta
                    </button>
                  </div>
                </>
              ) : currentModal === "show-create-acc-form" ? (
                <>
                  <h1>Crear Cuenta</h1>
                  <p className="my-1">Añade un perfil para el juego</p>
                  <CreateAccountForm
                    address={walletAddress}
                    buttonname={buttonname}
                    flag={flag}
                  />
                </>
              ) : currentModal === "show-connect-with-existing-form" ? (
                <>
                  <h1>Vincular Cuenta</h1>
                  <p className="my-1">
                    Vincula tu cuenta de juego para continuar en el mercado
                  </p>
                  <CreateAccountForm
                    address={walletAddress}
                    buttonname={buttonname}
                    flag={flag}
                  />
                </>
              ) : (
                ""
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowCreateAccountModal /> : ""}
      <main className="market">
        <div className="hero">
          <MmHeader />
          <div className="game-wrapper grid place-center p-1">
            <h4 className="mmtitle">Conectar Cartera</h4>
            <p className="mt-2">
              Conéctese con su billetera disponible o cree una nueva billetera
              para unirse a nuestro mercado
            </p>
            <div className="mr-auto" style={{ margin: "1rem 0" }}>
              <Button
                className="flex-wrapper mm-button"
                onClick={() => {
                  if (walletAddress === "") {
                    // setModalOpen(false);
                    connectWalletPressed();
                  } else {
                    checkWallet();
                  }
                }}
              >
                {/* <div id="metamask-logo"></div> */}
                <img
                  src={metaLogo}
                  alt="Ingresar con MetaMask"
                  className="metamask-logo"
                  width={60}
                />
                <span
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    minWidth: "230px",
                    display: "inline",
                  }}
                >
                  {walletAddress === ""
                    ? "Iniciar Sesión con MetaMask"
                    : "Continuar"}
                </span>
              </Button>
            </div>

            <p className="">
              No somos propietarios de sus claves privadas y no podemos acceder
              a sus fondos sin su confirmación. Ver término de uso
            </p>
            <div className="mediadiv">
              <SocialMedia />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const CreateAccountForm = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  const [email, setEmail] = useState("");
  const [mailcode, setMailcode] = useState("");
  const navigate = useNavigate();

  const createMailcode = async () => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email !== "" && emailPattern.test(email)) {
      await api
        .post("/createmailcode", {
          params: { email: email, address: props.address },
        })
        .then(function (response) {
          if (response.data.Success === "verified") {
            toast.warn(
              "¡Usted ya está registrado! Haga clic en el botón Crear cuenta",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }

          if (response.data.Success === "unverified") {
            toast.warn(
              "Inserte el codigo que se envio a su buzón. Si no ve nuestro correo electrónico, verifique la sección SPAM",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }

          if (response.data.Success === "emailerror") {
            toast.warn(
              "Por favor, compruebe su verificación de correo electrónico.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }

          if (response.data.Success === "emailsent") {
            toast.warn("Por favor, revise su correo", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (response.data.error === "walletexist") {
            toast.error("Wallet ya registrada.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (response.data.error === "emailexist") {
            toast.error("Tu wallet no esta asociada a este correo.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (response.data.Success === "confirmsent") {
            toast.success("Código de confirmación enviado. Revisa tu correo.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch(function (error) {
          console.log("stories error response :: ", error);
        });
    } else {
      console.log("add valid email");
    }
  };
  const registerEmail = async () => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email !== "" && emailPattern.test(email)) {
      await api
        .post("/register", { params: { email: email, mailcode: mailcode } })
        .then(function (response) {
          if (response.data.Success === "verified") {
            localStorage.setItem("uuid", response.data.uuid);
            localStorage.setItem("token", response.data.token);
            navigate("/compra-egg");
            if (props.flag === 0) {
              toast.success("Bienvenido de nuevo", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else if (props.flag === 1) {
              toast.success("Bienvenido a bordo, cuenta creada", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }
          if (response.data.Success === "nomatchemail") {
            toast.warn("Ningún correo electrónico coincide", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (response.data.Success === "unverified") {
            toast.warn("Por favor ingrese un código de correo válido", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch(function (error) {
          console.log("stories error response :: ", error);
        });
    }
  };

  return (
    <form
      className="create-account-form mt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Email"
        onInput={(event) => setEmail(event.target.value)}
        {...register("email", {
          required: "INGRESE SU CORREO ELECTRONICO",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Correo invalido",
          },
        })}
      />
      {errors.email && errors.email.message}
      <div className="flex-wrapper my-1">
        <div className="mw-50">
          <input
            type="text"
            placeholder="Ingresa el código"
            onInput={(event) => setMailcode(event.target.value)}
            {...register("mailcode", {
              required: "Inserte el codigo recibido en la casilla de correo",
            })}
          />
        </div>
        <div className="ml-2">
          <button className="button sendcode" onClick={createMailcode}>
            Enviar código vía email
          </button>
        </div>
      </div>
      <button className="button create-acc-button " onClick={registerEmail}>
        {props.buttonname}
      </button>
      <div className="form-terms mt-1">
        Al continuar, acepta los términos de servicio y confirma que ha leído la
        política de privacidad
      </div>
    </form>
  );
};

export default MmLoginPage;
