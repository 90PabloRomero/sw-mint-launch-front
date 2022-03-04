import { useNavigate } from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png";
import imanIcon from "./../../assets/img/imanIcon.png";
import multiIcon from "./../../assets/img/multiIcon.png";
import radarIcon from "./../../assets/img/radarIcon.png";
import velocidadIcon from "./../../assets/img/velocidadIcon.png";
import movilidadIcon from "./../../assets/img/movilidadIcon.png";
import visibilidadIcon from "./../../assets/img/visibilidadIcon.png";

import { Link } from "react-router-dom";
import { useState } from "react";
export const InventarioGusanosPage = () => {
  const history = useNavigate();

  const [isOnView, setOnView] = useState("iman");
  const goBack = () => {
    history(-1);
  };
  return (
    <>
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
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: "0" }}>
          <div style={{ minWidth: "100vw", height: "800px" }}>
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
              Inventario de gusanos
              <div
                className={"flex-wrapper my-1"}
                style={{
                  marginTop: "25px",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "45%",
                    border: "3px solid #ffed00",
                    borderRadius: "12px",
                    display: "grid",
                    placeItems: "center",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "30px" }}>
                    {isOnView === "iman"
                      ? "Común"
                      : isOnView === "multiplicador"
                      ? "Poco Común"
                      : isOnView === "radar"
                      ? "Raro"
                      : isOnView === "velocidad"
                      ? "Legendario"
                      : isOnView === "movilidad"
                      ? "Común (P)"
                      : isOnView === "visibilidad"
                      ? "Poco Común (P)"
                      : ""}
                  </div>
                  <div>
                    {/* {isOnView === "iman" ? (
                      <img src={imanIcon} alt="iman" />
                    ) : isOnView === "multiplicador" ? (
                      <img src={multiIcon} alt="Multiplicador" />
                    ) : isOnView === "radar" ? (
                      <img src={radarIcon} alt="Radar" />
                    ) : isOnView === "velocidad" ? (
                      <img src={velocidadIcon} alt="Velocidad" />
                    ) : isOnView === "movilidad" ? (
                      <img src={movilidadIcon} alt="movilidad" />
                    ) : isOnView === "visibilidad" ? (
                      <img src={visibilidadIcon} alt="visibilidad" />
                    ) : (
                      ""
                    )} */}
                  </div>
                  <div style={{ margin: "1rem 0", fontSize: "16px" }}>
                    Usos 10/50
                  </div>
                  <div className="flex-wrapper">
                    <button
                      className={"btn create-btn"}
                      style={{
                        fontSize: "22px",
                        padding: "1rem",
                        minWidth: "166px",
                      }}
                    >
                      USAR
                    </button>
                    <button
                      className={"btn create-btn"}
                      style={{
                        fontSize: "22px",
                        padding: "1rem",
                        minWidth: "auto",
                        marginLeft: "10px",
                      }}
                      disabled
                    >
                      RECARGAR
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    width: "65%",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    borderRadius: "12px",
                    padding: ".51rem",
                    gap: "10px",
                  }}
                >
                  <div
                    className="bonif-card"
                    style={{ background: "none", maxHeight: "180px" }}
                    onClick={() => setOnView("iman")}
                  >
                    <div
                      style={{
                        display: "grid",
                        placeContent: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src="https://spaceworms.app/nftimages/1.png"
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className="bonif-card"
                    style={{ background: "none", maxHeight: "180px" }}
                    onClick={() => setOnView("iman")}
                  >
                    <div
                      style={{
                        display: "grid",
                        placeContent: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src="https://spaceworms.app/nftimages/2.png"
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className="bonif-card"
                    style={{ background: "none", maxHeight: "180px" }}
                    onClick={() => setOnView("iman")}
                  >
                    <div
                      style={{
                        display: "grid",
                        placeContent: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src="https://spaceworms.app/nftimages/3.png"
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className="bonif-card"
                    style={{ background: "none", maxHeight: "180px" }}
                    onClick={() => setOnView("iman")}
                  >
                    <div
                      style={{
                        display: "grid",
                        placeContent: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src="https://spaceworms.app/nftimages/4.png"
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"absolute-bottom"} style={{ bottom: "30px" }}>
            <div
              className={"flex-wrapper"}
              style={{ justifyContent: "center", gap: "2rem" }}
            >
              <div>
                <Link to="../jugar/inventario" className="active">
                  INVENTARIO
                </Link>
              </div>
              <div>
                <Link to="../jugar/mejoras">MEJORAS</Link>
              </div>
              <div>
                <Link to="../jugar/bonos-arena">BONOS DE ARENA</Link>
              </div>
              <div>
                <Link to="../jugar/skins">SKINS</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
