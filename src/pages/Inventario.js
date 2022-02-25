import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cryptoCoinLogo from "assets/img/gusano.png";
import userAvatar from "assets/img/avatar_2.png";
import inventoryIcon from "assets/img/icono_inventario.png";
import walletIcon from "assets/img/icono_wallet.png";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import "../assets/css/templates/wallet.scss";
import gusaMax from "./../assets/img/gusano1.png";
import gusanoRojo from "./../assets/img/gusamax.png";

export default function InventarioPage() {
  const [currentModal, setCurrentModal] = useState("init");

  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };
  const [modalOpen, setModalOpen] = useState(true);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          // once connected, open modal with create account form
          setModalOpen(true);
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

  const ShowBuyEgg = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            <div className="market-modal">
              <div className="marketplace-back-action">
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Regresar a Marketplace
                </button>
              </div>
              <div className="flex-wrapper">
                <div style={{ width: "50%" }}>
                  <img src={gusanoRojo} alt="gusano" className="img-fluid" />
                  <div
                    style={{
                      padding: "5px 15px",
                      fontSize: "15px",
                      color: "#e9dc20",
                      background: "#00000080",
                      width: "fit-content",
                      margin: "0 auto",
                      borderRadius: ".21rem",
                    }}
                  >
                    37 / 125
                  </div>
                </div>
                <div style={{ width: "50%", textAlign: "left" }}>
                  <div style={{ fontSize: "30px" }}>GusaMax</div>
                  <div style={{ fontSize: "11px", color: "#ccc" }}>
                    Dueño: kahahygytshga
                  </div>

                  <div className="market-modal-stats">
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Visión</div>
                      <div>2400</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Agilidad</div>
                      <div>450</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Velocidad</div>
                      <div>1.23</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Imán</div>
                      <div>1.35</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Radar</div>
                      <div>4.52</div>
                    </div>
                    <div className="flex-wrapper">
                      <div>Multiplicador</div>
                      <div>6.25</div>
                    </div>
                  </div>
                  <div className="marketplace-modal-values">
                    <div>0.15 WBNB</div>
                    <div>75.52 USD</div>
                  </div>
                  <div>
                    <button className="button" style={{ minWidth: "100%" }}>
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // the Modal
  const ShowInventario = () => {
    return (
      <div className="relative">
        <div className="black-label"></div>

        <div className="grid wallet-layout">
          {/*  */}
          {/* wallet starts */}
          <div>
            <div className="wallet-blue-box">
              <div className="wallet-user-info">
                <div>
                  {" "}
                  <img src={userAvatar} alt="" />
                </div>
                <div>Usuario</div>
                <div className="walletAddress">{walletAddress}</div>
              </div>
              <div className="wallet-user-info-menu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/inventario" className="active">
                        <span>
                          <img src={inventoryIcon} alt="" />
                        </span>
                        Inventario
                      </Link>
                    </li>
                    <li>
                      <Link to="/wallet">
                        <span>
                          <img src={walletIcon} alt="" />
                        </span>
                        Wallet
                      </Link>
                    </li>

                    <li>
                      <button
                        style={{
                          background: "none",
                          border: "0",
                          color: "white",
                          fontSize: "20px",
                          fontWeight: "bold",
                          padding: "0",
                          cursor: "pointer",
                        }}
                        onClick={goBack}
                      >
                        <span
                          style={{ paddingRight: "10px", cursor: "pointer" }}
                        >
                          ⤺
                        </span>
                        Volver
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: "5" }}>
            <div
              className="h1"
              style={{ textAlign: "start", paddingBottom: "10px" }}
            >
              Inventario
            </div>
            <div className="sort-area">
              <select name="sort-content-inventory" id="sort-content-inventory">
                <option value="-">Todos</option>
                <option value="-">ordenar</option>
              </select>
            </div>
            <div style={{ fontSize: "13px", textAlign: "start" }}>
              {walletAddress}
            </div>
            <div className="flex-wrapper">
              <div style={{ width: "85%" }} className="gusanos-list">
                {listadatagusanos.map((gusanos) => (
                  <button
                    onClick={() => {
                      setCurrentModal(gusanos.id);
                      setModalOpen(true);
                    }}
                    key={gusanos.id}
                    className="NFT-view-container"
                  >
                    <div className="image-container">
                      <img
                        src={gusanos.tokenimg}
                        alt=""
                        className="huevo-img"
                      />
                    </div>
                    <div className="NFT-view-info-price">
                      <div style={{ fontWeight: "800", fontSize: "20px" }}>
                        {gusanos.name}
                      </div>
                      <div>{gusanos.tokenvalue} WBNB</div>
                      <div>{gusanos.value} USD</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="metamask-logo" className="d-none"></div>
      </div>
    );
  };

  return (
    <>
      <div className="mm-wallet">
        <ShowInventario />
      </div>
    </>
  );
}
const listadatagusanos = [
  {
    id: 1,
    name: "GusaMax",
    tokenvalue: "1.6",
    value: "845.00",
    tokenimg: gusaMax,
  },
  {
    id: 2,
    name: "GusaMax",
    tokenvalue: "1.6",
    value: "845.00",
    tokenimg: gusaMax,
  },
  {
    id: 3,
    name: "GusaMax",
    tokenvalue: "1.6",
    value: "845.00",
    tokenimg: gusaMax,
  },
  {
    id: 4,
    name: "GusaMax",
    tokenvalue: "1.6",
    value: "845.00",
    tokenimg: gusaMax,
  },
];
