import { useNavigate } from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png";
import arFlag from "./../../assets/img/flags/ar.png";
import chFlag from "./../../assets/img/flags/ch.png";
import brFlag from "./../../assets/img/flags/br.png";
import inFlag from "./../../assets/img/flags/in.png";
import crFlag from "./../../assets/img/flags/cr.png";
import esFlag from "./../../assets/img/flags/es.png";

import balanIcon from "./../../assets/img/kg.png";

import g1 from "./../../assets/img/gusanos/g1.png";
import g2 from "./../../assets/img/gusanos/g2.png";
import g3 from "./../../assets/img/gusanos/g3.png";
import g4 from "./../../assets/img/gusanos/g4.png";
import g5 from "./../../assets/img/gusanos/g5.png";
import g6 from "./../../assets/img/gusanos/g6.png";

import { useState } from "react";
import {Helmet} from "react-helmet";
export const GlobalRankingPage = () => {
  const history = useNavigate();


  const goBack = () => {
    history(-1);
  };
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
                maxWidth: "950px",
                textAlign: "center",
                margin: "auto",
                fontSize: "25px",
                marginTop: "2rem",
              }}
            >
              <div className={'flex-wrapper my-1'} style={{ flexDirection: 'column', gap: '10px' }}>
                <div className={'ranking-column'}>
                  <div>1</div>
                  <div className={"flex-wrapper"}>
                    <div>
                      <img src={arFlag} alt="argentina" />
                    </div>
                    <div>Tony Portugal</div>
                  </div>
                  <div>
                    <img src={g1} alt="" />
                  </div>
                  <div>15,548,522</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
                {/*  */}
                <div className={"ranking-column"}>
                  <div>2</div>
                  <div className={"flex-wrapper"}>
                    <div>
                      <img src={chFlag} alt="argentina" />
                    </div>
                    <div>Martin Hidalgo</div>
                  </div>
                  <div>
                    <img src={g2} alt="" />
                  </div>
                  <div>14,582,569</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
                {/*  */}
                <div className={"ranking-column"}>
                  <div>3</div>
                  <div className={"flex-wrapper"}>
                    <div>
                      <img src={brFlag} alt="argentina" />
                    </div>
                    <div>Tom Cruise</div>
                  </div>
                  <div>
                    <img src={g3} alt="" />
                  </div>
                  <div>13,548,895</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
                {/*  */}
                <div className={"ranking-column"}>
                  <div>4</div>
                  <div className={"flex-wrapper"}>
                    <div>
                      <img src={inFlag} alt="argentina" />
                    </div>
                    <div>Alicia Maravilla</div>
                  </div>
                  <div>
                    <img src={g4} alt="" />
                  </div>
                  <div>10,869,125</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
                {/*  */}
                <div className={"ranking-column"}>
                  <div>5</div>
                  <div className={"flex-wrapper"}>
                    <div>
                      <img src={crFlag} alt="argentina" />
                    </div>
                    <div>Botigusano</div>
                  </div>
                  <div>
                    <img src={g5} alt="" />
                  </div>
                  <div>9,258,266</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
                {/*  */}
                <div className={'ranking-column'}>
                  <div>6</div>
                  <div className={'flex-wrapper'}>
                    <div>
                      <img src={esFlag} alt="argentina" />
                    </div>
                    <div>Piton</div>
                  </div>
                  <div>
                    <img src={g6} alt="" />
                  </div>
                  <div>7,258,565</div>
                  <div>
                    <img src={balanIcon} alt="peso total" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'absolute-bottom'} style={{ bottom: '30px' }}>
            <div className={'flex-wrapper'} style={{ justifyContent: 'center', gap: '2rem' }}>
              <div>Global</div>
              <div>Local</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
