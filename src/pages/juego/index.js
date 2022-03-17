import Logo from "components/atoms/Logo";
import { GoHome } from "react-icons/go";
import balanzaIcon from "../../assets/img/icons/weighing.png";
import wormAladoIcon from "../../assets/img/icons/worm.png";
import starIcon from "../../assets/img/icons/star.png";
import shareIcon from "../../assets/img/icons/share.png";
import plusIcon from "../../assets/img/icons/plus.png";
import happyFaceIcon from "../../assets/img/icons/happy-face.png";
import swCoin from "../../assets/img/icons/coin.png";
import cogIcon from "../../assets/img/icons/cog.png";
import homeIcon from "../../assets/img/icons/home.png";
import checklistIcon from "../../assets/img/icons/checklist.png";
import bagIcon from "../../assets/img/icons/bag.png";
import chartIcon from "../../assets/img/icons/chart.png";
import { Link, useNavigate } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected } from "../../util/interact.js";
import { useEffect, useState } from "react";
import api from "../../util/api.js";
import AdvertenciaPage from "./Advertencia";

export const GameHomePage = () => {
  const [advertenciaContent, setAdvertenciaContent] = useState(false);
  const [walletAddress, setWallet] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("Not login yet");
  var uuid = localStorage.getItem("uuid");
  useEffect(async () => {
    setUsername(uuid);
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);

    if (walletAddress !== "") {
      checkMintedNfts();
    }
  }, [walletAddress])
  const checkMintedNfts = async () => {
    await api
      .post("/getNFTTokens", { params: { walletaddress: walletAddress } })
      .then(function (res) {
        if (res.data.success === "existed") {
          var nftorigin = res.data.data;
          console.log(nftorigin, "#####################");
        } else if (res.data.success === "No NFT Tokens") {
          console.log("no tiene nfts");
        }
      });
  };
  const goToWaitingRoom = () => {
    navigate("/jugar/sala");
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
          <div className="absolute-inset p-1">
            <div
              className="flex-wrapper"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex-wrapper">
                {/* <div
                  style={{
                    borderRadius: "100%",
                    border: "5px solid #af2322",
                    height: "40px",
                  }}
                >
                  <img src={happyFaceIcon} alt="" style={{ width: "30px" }} />
                </div> */}
                <div
                  style={{
                    border: "2px solid #af2322",
                    borderRadius: "5px",
                    background: "black",
                    height: "30px",
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "18px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <span style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    lineHeight: "normal",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}>{username}</span>
                </div>
                {/* <div className="relative" style={{ marginLeft: "-15px" }}>
                  <img src={starIcon} alt="" style={{ width: "40px" }} />
                  <div
                    className="absolute"
                    style={{
                      top: "13px",
                      padding: "7px 5px",
                      left: "11px",
                      background: "#00000084",
                      borderRadius: "100%",
                      lineHeight: "0",
                      fontSize: "12px",
                      fontWeight: "800",
                    }}
                  >
                    2
                  </div>
                </div> */}
              </div>
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
                    border: "5px solid #af2322",
                    borderRadius: "5px",
                    background: "#af2322",
                    height: "25px",
                    paddingTop: "2px",
                    marginTop: "8px",
                    lineHeight: 0.5,
                    fontSize: "15px",
                    marginLeft: "-6px",
                    width: "60px",
                  }}
                >
                  354
                </div>
                {/* <div className="relative" style={{ marginLeft: "-15px" }}>
                  <button
                    className="blue"
                    style={{
                      borderRadius: "16px",
                      lineHeight: 0,
                      height: "40px",
                      width: "40px",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    <img src={plusIcon} alt="" style={{ width: "15px" }} />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="grid"
            style={{ placeContent: "center", height: "100vh" }}
          >
            <div className="game-logo">
              <div className="spinning-aura"></div>
              <Logo
                style={{
                  zIndex: "1",
                  position: "relative",
                  width: "65%",
                  maxWidth: "350px",
                  minWidth: "130px",
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
              style={{ zIndex: "1", position: "relative" }}
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
          </div>
          {/*  */}
          <div className="absolute-fixed-bottom p-1">
            <div
              className="flex-wrapper"
              style={{ justifyContent: "space-between" }}
            >
              <div className="mt-auto flex-column">
                {/* <Link to="/">
                  <div>
                    <button className="red-btn ">
                      <img src={shareIcon} alt="" />
                    </button>
                  </div>
                </Link> */}
                <Link to="/global-ranking">
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
                <Link to="/opciones">
                  <button className="red-btn my-1">
                    <img src={cogIcon} alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
