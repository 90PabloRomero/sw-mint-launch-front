/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-image-lightbox/style.css';
import './assets/css/App.scss';
import { Helmet } from "react-helmet";

// pages
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
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<MmLoginPage />}/>
          <Route path="/compra-egg" element={<CompraEggPage />}/>
          <Route path="/wallet" element={
              <WalletLayout>
                <WalletPage />
              </WalletLayout>
            }/>
          <Route
            path="/inventario"
            element={
              <WalletLayout>
                <InventarioPage />
              </WalletLayout>
            }
          />
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
        </Routes>
      </Router>
    </>
  );
}
