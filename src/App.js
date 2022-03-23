/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-image-lightbox/style.css';
import './assets/css/App.scss';
import { Helmet } from "react-helmet";

// pages
<<<<<<< Updated upstream
import HomePage from './pages/Home';
import MmLoginPage from './pages/MmLogin';
import WalletPage from 'pages/Wallet';
import WalletLayout from 'layouts/WalletLayout';
import { useEffect, useState } from 'react';
import { getCurrentWalletConnected } from './util/interact';
import { ToastContainer } from 'react-toastify';
import { GameHomePage } from 'pages/juego';
import { WaitingRoomPage } from 'pages/juego/WaitingRoom';
import { GameLayout } from 'layouts/GameLayout';
import CompraEggPage from 'pages/CompraEgg';
import InventarioPage from 'pages/Inventario';
import { TerminosYCondicionesPage } from './pages/juego/TerminosYCondiciones';
import { ProfilePage } from './pages/juego/Profile';
import { OptionsPage } from './pages/juego/Options';
import { GlobalRankingPage } from './pages/juego/GlobalRanking';
import { BonificacionesDeArenaPage } from './pages/juego/BonificacionesDeArena';
import { MisionesDiariasPage } from 'pages/juego/MisionesDiarias';
import { EndGamePage } from 'pages/juego/EndGame';
import { JuegoTerminadoPage } from 'pages/juego/JuegoTerminado';
import { InventarioGusanosPage } from 'pages/juego/InventarioGusanos';
import { MejorasGusanoPage } from 'pages/juego/MejoraDelGusano';
import { SkinsPage } from 'pages/juego/Skins';
=======
import HomePage from "./pages/Home";
import MmLoginPage from "./pages/MmLogin";
import WalletPage from "pages/Wallet";
import WalletLayout from "layouts/WalletLayout";
import { useEffect, useState } from "react";
import { getCurrentWalletConnected } from "./util/interact";
import { ToastContainer } from "react-toastify";
import { GameHomePage } from "pages/juego";
import { WaitingRoomPage } from "pages/juego/WaitingRoom";
import { GameLayout } from "layouts/GameLayout";
import CompraEggPage from "pages/CompraEgg";
import InventarioPage from "pages/Inventario";
import { TerminosYCondicionesPage } from "./pages/juego/TerminosYCondiciones";
import { ProfilePage } from "./pages/juego/Profile";
import { OptionsPage } from "./pages/juego/Options";
import { GlobalRankingPage } from "./pages/juego/GlobalRanking";
import { BonificacionesDeArenaPage } from "./pages/juego/BonificacionesDeArena";
import { MisionesDiariasPage } from "pages/juego/MisionesDiarias";
import { EndGamePage } from "pages/juego/EndGame";
import { JuegoTerminadoPage } from "pages/juego/JuegoTerminado";
import { InventarioGusanosPage } from "pages/juego/InventarioGusanos";
import { MejorasGusanoPage } from "pages/juego/MejoraDelGusano";
import { SkinsPage } from "pages/juego/Skins";
import PlayLoginPage from "pages/play/Login";
>>>>>>> Stashed changes

export default function App() {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    // setModalOpen(true);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          // once connected, open modal with create account form
        } else {
          setWallet('');
        }
      });
    } else {
      setStatus("You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  }

  return (
    <>
      <Helmet
          titleTemplate={"%s – SPACE WORMS"}
          defaultTitle={"SPACE WORMS"}
      >
        <meta name={"description"} content={"¡Conviértete en el gusano numero uno y obtén grandes recompensas!"} />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<MmLoginPage />}/>
          <Route path="/compra-egg" element={<CompraEggPage />}/>
          <Route path="/wallet" element={
              <WalletLayout>
                <WalletPage />
              </WalletLayout>
            }/>
=======
          <Route path="/" 
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
            exact
          />
          <Route
            path="/login"
            element={
              <Layout>
                <MmLoginPage />
              </Layout>
            }
          />
          {/*  */}
          {/* <Route path="/advertencia" element={<AdvertenciaPage />} /> */}
          {/*  */}
          <Route
            path="/compra-egg"
            element={
              // walletAddress.length < 0 ? (
              //   <Navigate to="/login" />
              // ) : (
              <Layout>
                <CompraEggPage />
              </Layout>
              // )
            }
          />
          {/* <Route
            path="/marketplace"
            element={
              // walletAddress.length < 0 ? (
              //   <Navigate to="/login" />
              // ) : (
              <Layout>
                <MarketplacePage />
              </Layout>
              // )
            }
          /> */}
          {/*  */}

          <Route
            path="/wallet"
            element={
              <WalletLayout>
                <WalletPage />
              </WalletLayout>
            }
            exact
          />
          {/*  */}
>>>>>>> Stashed changes
          <Route
            path="/inventario"
            element={
              <WalletLayout>
                <InventarioPage />
              </WalletLayout>
            }
            exact
          />
<<<<<<< Updated upstream
          <Route
              path="/jugar/sala"
              element={
                <GameLayout>
                  <WaitingRoomPage />
                </GameLayout>
              }
          />
          <Route path={'/jugar/perfil'} element={<ProfilePage />}/>
          <Route path={'/jugar/terminos'} element={<TerminosYCondicionesPage />}/>
          <Route path={'/jugar/opciones'} element={<OptionsPage />}/>
          <Route path={'/jugar/global-ranking'} element={<GlobalRankingPage />}/>
          <Route path={'/jugar/bonos-arena'} element={<BonificacionesDeArenaPage />}/>
          <Route path={'/jugar/misiones-diarias'} element={<MisionesDiariasPage />}/>
          <Route path={'/jugar/juego-terminado'} element={<JuegoTerminadoPage />}/>
          <Route path={'/jugar/inventario'} element={<InventarioGusanosPage />}/>
          <Route path={'/jugar/mejoras'} element={<MejorasGusanoPage />}/>
          <Route path={'/jugar/resultado'} element={<EndGamePage />}/>
          <Route path={'/jugar/skins'} element={<SkinsPage />}/>
          <Route path="/jugar" element={<GameHomePage />} />
=======
          {/*terminos de servicio*/}
          <Route
            path={"/terminos"}
            element={
              <Layout>
                <TerminosYCondicionesPage />
              </Layout>
            }
            exact
          />
          {/*profile*/}
          <Route
            path={"/perfil"}
            element={
              <Layout>
                <ProfilePage />
              </Layout>
            }
            exact
          />
          {/**/}
          {/*options*/}
          <Route
            path={"/opciones"}
            element={
              <Layout>
                <OptionsPage />
              </Layout>
            }
            exact
          />
          {/**/}
          {/*Global Ranking*/}
          <Route
            path={"/global-ranking"}
            element={
              <Layout>
                <GlobalRankingPage />
              </Layout>
            }
            exact
          />
          {/*Bonificaciones de arena*/}
          <Route
            path={"/jugar/bonos-arena"}
            element={
              <Layout>
                <BonificacionesDeArenaPage />
              </Layout>
            }
            exact
          />
          {/**/}
          {/*Misiones diaras*/}
          <Route
            path={"/jugar/misiones-diarias"}
            element={
              <Layout>
                <MisionesDiariasPage />
              </Layout>
            }
          />
          {/**/}
          {/**/}
          {/*Juego Terminado*/}
          <Route
            path={"/jugar/juego-terminado"}
            element={
              <Layout>
                <JuegoTerminadoPage />
              </Layout>
            }
          />
          {/**/}
          {/*Juego Terminado*/}
          <Route
            path={"/jugar/inventario"}
            element={
              <Layout>
                <InventarioGusanosPage />
              </Layout>
            }
          />
          {/**/}
          {/*Juego Mejoras*/}
          <Route
            path={"/jugar/mejoras"}
            element={
              <Layout>
                <MejorasGusanoPage />
              </Layout>
            }
          />
          {/**/}
          {/* resultado */}
          <Route
            path={"/jugar/resultado"}
            element={
              <Layout>
                <EndGamePage />
              </Layout>
            }
          />
          {/**/}
          {/* resultado */}
          <Route
            path={"/jugar/skins"}
            element={
              <Layout>
                <SkinsPage />
              </Layout>
            }
          />
          {/**/}
          {/* game homepage */}
          <Route path="/jugar" element={<GameHomePage />} exact />
          <Route path="/jugar/login" element={<PlayLoginPage />} exact />
          {/* game waiting room */}
          <Route
            path="/jugar/sala"
            element={
              <GameLayout>
                <WaitingRoomPage />
              </GameLayout>
            }
          />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </>
  );
}
