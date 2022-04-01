import Logo from 'components/atoms/Logo';

import swCoin from '../../assets/img/icons/coin.png';
import cogIcon from '../../assets/img/icons/cog.png';
import homeIcon from "../../assets/img/icons/home.png";
import checklistIcon from '../../assets/img/icons/checklist.png';
import bagIcon from '../../assets/img/icons/bag.png';
import chartIcon from '../../assets/img/icons/chart.png';
import { Link, useNavigate } from 'react-router-dom';
import { connectWallet, getCurrentWalletConnected } from "../../util/interact.js";
import { useState } from 'react';
import api from "../../util/api.js";
import AdvertenciaPage from './Advertencia';

export const GameHomePage = () => {
  const [advertenciaContent, setAdvertenciaContent] = useState(false);
  const [walletAddress, setWallet] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("Not login yet");
  const [amount, setAmount] = useState(0);
  const uuid = localStorage.getItem('uuid');

  const goToWaitingRoom = () => {
    window.location.href = 'http://localhost:8000/game?username=' + uuid;
  }
  const goToInventario = () => {
    navigate("/jugar/inventario");
  }
  const goToMisionesDiarias = () => {
    navigate("/jugar/misiones-diarias");
  }
  return (
    <>
      {advertenciaContent ? (
        <AdvertenciaPage />
      ) : (
        <div className="footer-wrapper">
          <div className="absolute-inset pt-1">
            <div className="flex-wrapper" style={{ justifyContent: 'space-between' }}>
              <div className="flex-wrapper">
                {/* <div
                  style={{
                    borderRadius: '100%',
                    border: '5px solid #af2322',
                    height: '40px'
                  }}
                >

                  <img src={happyFaceIcon} alt="" style={{ width: '30px' }} />
              </div>*/}
                <div
                  style={{
                    border: "2px solid #af2322",
                    borderRadius: "5px",
                    background: "black",
                    padding: "0 2px",
                    textAlign: "start",

                    margin: "8px",
                    fontSize: "18px",
                    width: "100%",
                  }}
                >
                  ID: {uuid}
                </div>

              </div >
              <div className="flex-wrapper relative">
                <div
                  style={{
                    borderRadius: "100%",
                    height: "40px",
                    zIndex: 2,
                  }}
                >
                  <img src={swCoin} alt="" style={{ width: "40px" }} />
                </div>
                <div
                  style={{
                    border: '5px solid #af2322',
                    background: '#af2322',
                    height: '25px',
                    paddingTop: '2px',
                    marginTop: '8px',
                    lineHeight: 0.5,
                    fontSize: "15px",
                    marginLeft: "-6px",
                    width: "60px",
                  }}
                >
                  {amount}
                </div>
              </div >
            </div >
          </div >
          {/*  */}
          < div className="grid" style={{ placeContent: 'center', height: '100vh' }}>
            <div className="game-logo">
              <Logo
                style={{
                  zIndex: '1',
                  position: 'relative',
                  maxWidth: '450px',
                  minWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            {/* <div
              style={{
                zIndex: "1",
                position: "relative",
                fontSize: "16px",
                marginBottom: "3%",
              }}
            >
              ELIGE BOOSTER:
            </div> */}
            {/* <div
              className="flex-wrapper justify-center"
              style={{ zIndex: "1", position: "relative" }}
            >
              <button className="blue btn-circle mr-2">
                <img src={balanzaIcon} alt="" />
              </button>
              <button className="blue btn-circle ml-2">
                <img src={wormAladoIcon} alt="" />
              </button>
            </div> */}
            <div
              className="flex-wrapper justify-center mt-3"
              style={{ zIndex: '1', position: 'relative' }}
            >
              <button className="blue ml-2" style={{ borderRadius: "16px" }} onClick={() => goToInventario()}>
                <img src={bagIcon} alt="" />
              </button>
              {/* <a
            href="http://52.15.191.202:4200/wormsgame/advertencia.html"
            className="disable-styles"
          > */}

              <button
                // onClick={() => setAdvertenciaContent(true)}
                onClick={() => goToWaitingRoom()}
                className="game-btn mx-1"
                style={{
                  minHeight: "70px",
                  minWidth: "150px",
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                JUGAR
              </button>
              {/* </a> */}
              <button className="blue ml-2" style={{ borderRadius: "16px" }} onClick={() => goToMisionesDiarias()}>
                <img src={checklistIcon} alt="" />
              </button>
            </div>
          </div >
          {/*  */}
          < div className="absolute-fixed-bottom p-1" >
            <div className="flex-wrapper" style={{ justifyContent: 'space-between' }}>
              <div className="mt-auto flex-column">
                {/* <Link to="/">
                  <div>
                    <button className="red-btn ">
                      <img src={shareIcon} alt="" />
                    </button>
                  </div>
                </Link> */}
                <Link to="/jugar/global-ranking">
                  <button className="red-btn my-1">
                    <img src={chartIcon} alt="" />
                  </button>
                </Link>
              </div>

              <div className="mt-auto flex-column">
                <Link to="/">
                  <div>
                    <button className="red-btn ">
                      <img src={homeIcon} alt="" />
                    </button>
                  </div>
                </Link>
                <Link to="/jugar/opciones">
                  <button className="red-btn my-1">
                    <img src={cogIcon} alt="" />
                  </button>
                </Link>
              </div>
            </div >
          </div >
        </div >
      )}
    </>
  );
};
