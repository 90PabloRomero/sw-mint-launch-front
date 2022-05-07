// import MmHeader from '../../components/organisms/login/MmHeader';
import Button from '../../components/atoms/Button';
import SocialMedia from '../../components/molecules/SocialMedia';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../util/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Logo from '../../components/atoms/Logo';
import { TerminosYCondicionesPage } from './TerminosYCondiciones';

export const GameLoginPage = () => {
  // TODO
  // al iniciar esta pantalla (useEffect) debe checkear si tenes un token (JWT), si encuentra el token
  // debe checkear /showttos val, true: route a InventarioGusanos, false: accountLogged true
  const history = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [flag, setFlag] = useState(0);
  const [currentModal, setCurrentModal] = useState('show-create-acc-form');
  const [accountLogged, setAccountLogged] = useState(false);
  const [doesAccountHasShowTOSCheck, setAccountTOSCheck] = useState(false);

  const [isReadyForRedirection, setReadyForRedirection] = useState(false);
  // console.log(storedTOS);

  //el modal
  const ShowCreateAccountModal = () => {
    return (
      <>
        <Helmet>
          <title>Valida tu correo</title>
        </Helmet>
        <div className="modal-wrapper">
          <div className="grid place-center">
            <div className="create-account-modal" style={{ marginTop: '70px' }}>
              <button
                className="close-modal-button"
                onClick={() => {
                  setModalOpen(false);
                }}>
                X
              </button>
              {/*  */}
              {/* form starts */}
              {currentModal === 'show-create-acc-form' ? (
                <>
                  <h1>Conectar Cuenta</h1>
                  <p className="my-1">
                    Verifica tu identidad durante 24 horas en tu dispositivo validándote con tu
                    correo electrónico.
                  </p>
                  <CreateAccountForm flag={flag} />
                </>
              ) : (
                ''
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </>
    );
  };
  const CreateAccountForm = () => {
    const {
      handleSubmit,
      register,
      formState: { errors }
    } = useForm();
    const onSubmit = (values) => console.log(values);
    const [email, setEmail] = useState('');
    const [mailcode, setMailcode] = useState('');
    const [isMailCodeSent, setMailCodeSent] = useState(false);
    // const navigate = useNavigate();
    const [timeLeftToEnableAgain, setTimeLeftToEnableAgain] = useState(0);
    useEffect(() => {
      timeLeftToEnableAgain > 0 &&
        setTimeout(() => setTimeLeftToEnableAgain(timeLeftToEnableAgain - 1), 1000);
    }, [timeLeftToEnableAgain]);
    const createMailCodeGame = async () => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (email !== '' && emailPattern.test(email)) {
        await api
          .post('/api/createmailcodegame', { params: { email: email } })
          .then(function (response) {
            if (response.data.error === 'emailnotexist') {
              toast.warn('Este email no esta asociado a ningún NFT..');
            }
            if (response.data.error === 'walletnotexist') {
              toast.info('Tu email no esta asociada con ningún wallet del juego.');
            }
            if (response.data.Success === 'emailerror') {
              toast.info('Error al enviar el correo. Refresca la página y vuelve a intentarlo.');
            }
            if (response.data.Success === 'emailsent') {
              toast.info(
                'Código de confirmación enviada por correo. Por favor verifica tu inbox e introduce el código que enviamos.'
              );
              setMailCodeSent(true);
              setTimeLeftToEnableAgain(60);
              setTimeout(() => {
                setMailCodeSent(false);
              }, 60000);
            }
          })

          .catch(function (error) {
            console.log('stories error response :: ', error);
          });
      } else {
        toast('Ingrese un mail válido');
      }
    };
    const VerifyMailCodeGame = async () => {
      await api
        .post('/api/verifymailcodegame', { params: { email: email, mailcode: mailcode } })
        .then(function (response) {
          if (response.data.info === 'no email') {
            toast.info('Dirección mail inválida.');
          }
          if (response.data.Success === 'nomatchemail') {
            toast.info('Dirección mail inválida.');
          }
          if (response.data.Success === 'verified') {
            toast.success('Conexión exitosa.');

            // recibe uuid: data.uu_id
            const userUuid = response.data.uuid;
            // recibe token: token
            const userJWT = response.data.token;
            // TODO esto tiene que quedar guardado para la siguiente pantalla (guardarlo en LOCALSTORAGE)
            setAccountLogged(true);
            setModalOpen(false);
            localStorage.setItem('token', userJWT);
            localStorage.setItem('uuid', userUuid);
            localStorage.setItem('tos', false);
            // funcion del tos
            // ShowSetTOS();
          }
          if (response.data.Success === 'unverified') {
            toast.info('Codigo erroneo.');
          }
        });
    };
    // const ShowSetTOS = async () => {
    //   await api
    //     .post('/api/showtos', { params: { checktos: doesAccountHasShowTOSCheck } })
    //     .then(function (response) {
    //       if (response.data.Success === 'nomatchemailuser') {
    //         console.log('error que te deberia devolver al paso 1');
    //       }
    //       if (response.data.Success === true) {
    //         console.log('el usuario tiene el TOS desactivado');
    //       }
    //       if (response.data.Success === false) {
    //         console.log('mostraras el TOS porque el check no esta marcado');
    //       }
    //     });
    // };
    return (
      <form className="create-account-form mt-1" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          onInput={(event) => setEmail(event.target.value)}
          {...register('email', {
            required: 'INGRESE SU CORREO ELECTRONICO',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo invalido'
            }
          })}
        />
        {errors.email && errors.email.message}
        <div className="flex-wrapper my-1">
          <div className="mw-50">
            <input
              type="text"
              placeholder="Ingresa el código"
              onInput={(event) => setMailcode(event.target.value)}
              {...register('mailcode', {
                required: 'Inserte el código recibido en la casilla de correo'
              })}
            />
          </div>
          <div className="ml-2">
            <button
              className="button sendcode"
              disabled={isMailCodeSent}
              onClick={createMailCodeGame}>
              {isMailCodeSent
                ? 'Enviar otro código(0:' + timeLeftToEnableAgain + ')'
                : 'Enviar código vía email'}
            </button>
          </div>
        </div>
        <div>
          <button
            className={'button'}
            type={'submit'}
            disabled={!isMailCodeSent}
            onClick={VerifyMailCodeGame}>
            Verificar Código
          </button>
        </div>
        <div className="form-terms mt-1">
          Al continuar, acepta los términos de servicio y confirma que ha leído la política de
          privacidad
        </div>
      </form>
    );
  };

  useEffect(() => {
    //processing jwt
    const storedJwt = localStorage.getItem('token');
    //processing terms of service
    const storedTOS = localStorage.getItem('tos');

    storedJwt === null ? setAccountLogged(false) : setAccountLogged(true);
    //momento monkeycode del dia... no me puedo traer un booleano de localstorage, aprendi chocando la cara contra la pantalla y no de otra manera
    storedTOS === 'false' || storedTOS === null
      ? setAccountTOSCheck(false)
      : setAccountTOSCheck(true);

    console.log(storedJwt);
    console.log(accountLogged);
    accountLogged === true && doesAccountHasShowTOSCheck
      ? setReadyForRedirection(true)
      : setReadyForRedirection(false);
  }, [accountLogged, doesAccountHasShowTOSCheck, isReadyForRedirection]);

  return (
    <>
      {isReadyForRedirection ? (
        <>{history('/jugar')}</>
      ) : accountLogged ? (
        <TerminosYCondicionesPage />
      ) : (
        <>
          {modalOpen && <ShowCreateAccountModal />}
          <header className=" absolute-inset">
            <div className="header flex-wrapper">
              <div className="header-left">
                <Link to="/">
                  <Logo
                    alt="Space Worms"
                    className="img-logo"
                    style={{ width: '50%', minWidth: '70px' }}
                  />
                </Link>
              </div>
            </div>
          </header>
          <main className="market">
            <div className="hero">
              <div className="game-wrapper grid place-center p-1">
                <h4 className="mmtitle">Ingreso al juego</h4>
                <p className="mt-2">
                  Conéctate con el correo con el que has comprado tu NFT para ser parte de la
                  batalla espacial.
                </p>
                <div className="mr-auto" style={{ margin: '1rem 0' }}>
                  <Button className="flex-wrapper mm-button" onClick={() => setModalOpen(true)}>
                    <span
                      style={{
                        marginLeft: '15px',
                        fontSize: '20px',
                        minWidth: '230px',
                        display: 'inline'
                      }}>
                      Ingresa con tu correo
                    </span>
                  </Button>
                </div>

                <p className="">
                  No somos propietarios de sus claves privadas y no podemos acceder a sus fondos sin
                  su confirmación. Ver términos de uso
                </p>
                <div className="mediadiv">
                  <SocialMedia />
                </div>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Problemas, dudas, consultas?{' '}
                  <a
                    href="mailto:contacto@spaceworms.app"
                    style={{ fontSize: '22px', fontWeight: '900' }}>
                    contacto@spaceworms.app
                  </a>
                </p>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
