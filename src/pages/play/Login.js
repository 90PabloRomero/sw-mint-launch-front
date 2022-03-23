import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../assets/css/templates/mmlogin.scss";
import api from "../../util/api.js";
import PlHeader from "components/organisms/login/PlHeader";
import { toast } from "react-toastify";

const PlayLoginPage = () => {
    const { handleSubmit, register, formState: { errors },} = useForm();
    const onSubmit = (values) => console.log(values);
    const [email, setEmail] = useState("");
    const [mailcode, setMailcode] = useState("");
    const navigate = useNavigate();

    const createMailcode = async () => {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email !== "" && emailPattern.test(email)) {
            // await api
            // .post("/createmailcode", {
            //     params: { email: email, address: props.address },
            // })
            // .then(function (response) {
            //     if (response.data.Success === "verified") {
            //     toast.warn(
            //         "¡Usted ya está registrado! Haga clic en el botón Crear cuenta",
            //         {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         }
            //     );
            //     }

            //     if (response.data.Success === "unverified") {
            //     toast.warn(
            //         "Inserte el codigo que se envio a su buzón. Si no ve nuestro correo electrónico, verifique la sección SPAM",
            //         {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         }
            //     );
            //     }

            //     if (response.data.Success === "emailerror") {
            //     toast.warn(
            //         "Por favor, compruebe su verificación de correo electrónico.",
            //         {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         }
            //     );
            //     }

            //     if (response.data.Success === "emailsent") {
            //     toast.warn("Por favor, revise su correo", {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            //     }
            //     if (response.data.error === "walletexist") {
            //     toast.error("Wallet ya registrada.", {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            //     }
            //     if (response.data.error === "emailexist") {
            //     toast.error("Tu wallet no esta asociada a este correo.", {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            //     }
            //     if (response.data.Success === "confirmsent") {
            //     toast.success("Código de confirmación enviado. Revisa tu correo.", {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     });
            //     }
            // })
            // .catch(function (error) {
            //     console.log("stories error response :: ", error);
            // });
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
                // if (props.flag === 0) {
                //     toast.success("Bienvenido de nuevo", {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     });
                // } else if (props.flag === 1) {
                //     toast.success("Bienvenido a bordo, cuenta creada", {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     });
                // }
                // }
                // if (response.data.Success === "nomatchemail") {
                // toast.warn("Ningún correo electrónico coincide", {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
                // }
                // if (response.data.Success === "unverified") {
                // toast.warn("Por favor ingrese un código de correo válido", {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
                }
            })
            .catch(function (error) {
                console.log("stories error response :: ", error);
            });
        }
    };
    return (
        <main className="market">
            <div className="hero">
                <PlHeader />
                <div className="play-login">
                    <h1>Iniciar Sesión</h1>
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
                            Iniciar Sesión
                        </button>
                        <div className="form-terms mt-1">
                            Al continuar, acepta los términos de servicio y confirma que ha leído la
                            política de privacidad
                        </div>
                    </form>
                </div>
            </div>
        </main>
        
    );
}
export default PlayLoginPage;