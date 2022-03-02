/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import "react-image-lightbox/style.css";

// pages
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
import {TerminosYCondicionesPage} from "./pages/juego/TerminosYCondiciones";
import {ProfilePage} from "./pages/juego/Profile";
import {OptionsPage} from "./pages/juego/Options";
import {GlobalRankingPage} from "./pages/juego/GlobalRanking";
import {BonificacionesDeArenaPage} from "./pages/juego/BonificacionesDeArena";

export default function App() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

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

          // once connected, open modal with create account form
        } else {
          setWallet("");
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

  return (
    <>
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
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
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
          />
          {/*  */}
          <Route
            path="/inventario"
            element={
              <WalletLayout>
                <InventarioPage />
              </WalletLayout>
            }
          />
          {/*terminos de servicio*/}
          <Route path={"/terminos"} element={<Layout>
            <TerminosYCondicionesPage/>
          </Layout>} />
          {/*profile*/}
          <Route path={"/perfil"} element={<Layout>
            <ProfilePage/>
          </Layout>} />
          {/**/}
          {/*options*/}
          <Route path={"/opciones"} element={<Layout>
            <OptionsPage/>
          </Layout>} />
          {/**/}
          {/*Global Ranking*/}
          <Route path={"/global-ranking"} element={<Layout>
            <GlobalRankingPage/>
          </Layout>} />
          {/*Bonificaciones de arena*/}
          <Route path={"/bonificaciones-arena"} element={<Layout>
            <BonificacionesDeArenaPage/>
          </Layout>} />
          {/**/}
          {/* game homepage */}
          <Route path="/jugar" element={<GameHomePage />} />
          {/* game waiting room */}
          <Route
            path="/jugar/sala"
            element={
              <GameLayout>
                <WaitingRoomPage />
              </GameLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
