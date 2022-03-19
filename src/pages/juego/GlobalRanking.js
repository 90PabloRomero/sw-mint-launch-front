import { useNavigate } from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png";
import arFlag from "./../../assets/img/flags/ar.png";
import chFlag from "./../../assets/img/flags/ch.png";
import brFlag from "./../../assets/img/flags/br.png";
import inFlag from "./../../assets/img/flags/in.png";
import crFlag from "./../../assets/img/flags/cr.png";
import esFlag from "./../../assets/img/flags/es.png";
import api from "../../util/api.js";
import { getCurrentWalletConnected } from "../../util/interact.js";
import balanIcon from "./../../assets/img/kg.png";

import g1 from "./../../assets/img/gusanos/g1.png";
import g2 from "./../../assets/img/gusanos/g2.png";
import g3 from "./../../assets/img/gusanos/g3.png";
import g4 from "./../../assets/img/gusanos/g4.png";
import g5 from "./../../assets/img/gusanos/g5.png";
import g6 from "./../../assets/img/gusanos/g6.png";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
export const GlobalRankingPage = () => {
  const history = useNavigate();
  const [allusers, setAllusers] = useState([]);
  useEffect(async () => {
    var address = await getCurrentWalletConnected();

    if (address !== "") {
      getUsers();
    }
  }, [])

  const getUsers = async () => {
    await api
      .post("/getusers", {})
      .then(function (res) {
        if (res.data.success === "existed") {
          var users = res.data.data;
          setAllusers(users);
        } else if (res.data.success === "No NFT Tokens") {
          console.log("no tiene nfts");
        }
      });
  };

  const goBack = () => {
    history(-1);
  };
  const showGlobalRanking = () => {
    document.getElementById("global-ranking").style.display = "";
    document.getElementById("local-ranking").style.display = "none";
  }
  const showLocalRanking = () => {
    document.getElementById("global-ranking").style.display = "none";
    document.getElementById("local-ranking").style.display = "";
  }
  return (
    <>
      <Helmet>
        <title>Ranking</title>
      </Helmet>
      <main className="market">
        <header style={{ position: "absolute", top: "3vh", zIndex: "2" }}>
          <div className={"flex-wrapper"}>
            <button
              style={{
                border: "none",
                background: "#af2322",
                color: "white",
                minWidth: "148px",
                borderTop: "3px solid #ffed00",
                borderBottom: "3px solid #ffed00",
                borderRight: "3px solid #ffed00",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => goBack()}
            >
              <img src={leftArrow} alt={"Regresar"} />
            </button>
            <div
              style={{
                marginLeft: "8px",
                height: "67px",
                fontSize: "35px",
                display: "grid",
                placeContent: "center",
              }}
            >
              Global Ranking
            </div>
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: "0" }}>
          <div
            style={{
              background: "#171a1c93",
              minWidth: "100vw",
              height: "500px",
              borderTop: "3px solid #ffed00",
              borderBottom: "3px solid #ffed00",
            }}
          >
            <div
              className=" grid  p-1"
              style={{
                minWidth: "950px",
                maxWidth: "1250px",
                textAlign: "center",
                margin: "auto",
                fontSize: "25px",
                marginTop: "2rem",
              }}
            >
              <div
                id="global-ranking"
                className={"flex-wrapper my-1"}
                style={{ flexDirection: "column", gap: "10px" }}
              >
                {allusers.map((user, index) => (
                  <div className={"ranking-column"}>
                    <div>{index + 1}</div>
                    <div className={"flex-wrapper"}>
                      <div>
                        <img src={index % 4 == 0 ? arFlag : index % 4 == 1 ? chFlag : index % 4 == 2 ? brFlag : esFlag} alt="argentina" />
                      </div>
                      <div>{user.walletaddress}</div>
                    </div>
                    <div>
                      <img src={index % 4 == 0 ? g1 : index % 4 == 1 ? g2 : index % 4 == 2 ? g3 : g4} alt="" />
                    </div>
                    <div>{user.highscore}</div>
                    <div>
                      <img src={balanIcon} alt="peso total" />
                    </div>
                  </div>
                ))}
              </div>
              {/*                             */}
              <div
                id="local-ranking"
                className={"flex-wrapper my-1"}
                style={{ flexDirection: "column", gap: "10px", display: "none" }}
              >

                {allusers.map((user, index) => (

                  index % 4 == 0 ? (<div className={"ranking-column"}>
                    <div>{index / 4 + 1}</div>
                    <div className={"flex-wrapper"}>
                      <div>
                        <img src={index % 4 == 0 ? arFlag : index % 4 == 1 ? chFlag : index % 4 == 2 ? brFlag : esFlag} alt="argentina" />
                      </div>
                      <div>{user.walletaddress}</div>
                    </div>
                    <div>
                      <img src={index % 4 == 0 ? g1 : index % 4 == 1 ? g2 : index % 4 == 2 ? g3 : g4} alt="" />
                    </div>
                    <div>{user.highscore}</div>
                    <div>
                      <img src={balanIcon} alt="peso total" />
                    </div>
                  </div>
                  ) : ""))}
              </div>
            </div>
          </div>
          <div className={"absolute-bottom"} style={{ bottom: "30px" }}>
            <div
              className={"flex-wrapper"}
              style={{ justifyContent: "center", gap: "2rem" }}
            >
              <div>
                <button className="game-btn mx-1"
                  onClick={() => showGlobalRanking()}
                  style={{
                    minHeight: "70px",
                    minWidth: "150px",
                    fontSize: "20px",
                    fontWeight: "800",
                  }}
                >
                  Global
                </button>
              </div>
              <div>
                <button className="game-btn mx-1"
                  onClick={() => showLocalRanking()}
                  style={{
                    minHeight: "70px",
                    minWidth: "150px",
                    fontSize: "20px",
                    fontWeight: "800",
                  }}
                >
                  Local
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
