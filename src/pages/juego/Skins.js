import { useNavigate } from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png";
import gusano from "./../../assets/img/gusano1.png";
import oroCoin from "./../../assets/img/oro.png";

import { Link } from "react-router-dom";
import { useState } from "react";
export const SkinsPage = () => {
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
              Bonificaciones de la arena
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
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    border: "3px solid #ffed00",
                    borderRadius: "12px",
                    padding: ".51rem",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      borderBottom: "3px solid #ffed00",
                    }}
                  >
                    Premium
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      borderBottom: "3px solid #ffed00",
                    }}
                  >
                    Eventos
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      borderBottom: "3px solid #ffed00",
                    }}
                  >
                    Paises
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      borderBottom: "3px solid #ffed00",
                    }}
                  >
                    Temporadas
                  </div>

                  <div className="bonif-card" onClick={() => setOnView("iman")}>
                    <div
                      style={{
                        minHeight: "100%",
                        height: "120px",
                        display: "grid",
                        placeContent: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={gusano}
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                      <div
                        style={{
                          fontSize: "20px",
                          position: "absolute",
                          bottom: "-10px",
                          left: "33%",
                        }}
                      >
                        <div
                          style={{
                            background: "#081084",
                            border: "1px solid #ffed00",
                            padding: "3px 5px",
                            fontSize: "16px",
                          }}
                        >
                          <img
                            src={oroCoin}
                            alt=""
                            style={{ maxWidth: "18px", maxHeight: "15px" }}
                          />
                          250
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView("iman")}>
                    <div
                      style={{
                        minHeight: "100%",
                        display: "grid",
                        placeContent: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={gusano}
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                      <div
                        style={{
                          fontSize: "20px",
                          position: "absolute",
                          bottom: "-10px",
                          left: "33%",
                        }}
                      >
                        <div
                          style={{
                            background: "#081084",
                            border: "1px solid #ffed00",
                            padding: "3px 5px",
                            fontSize: "16px",
                          }}
                        >
                          <img
                            src={oroCoin}
                            alt=""
                            style={{ maxWidth: "18px", maxHeight: "15px" }}
                          />
                          250
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView("iman")}>
                    <div
                      style={{
                        minHeight: "100%",
                        display: "grid",
                        placeContent: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={gusano}
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                      <div
                        style={{
                          fontSize: "20px",
                          position: "absolute",
                          bottom: "-10px",
                          left: "33%",
                        }}
                      >
                        <div
                          style={{
                            background: "#081084",
                            border: "1px solid #ffed00",
                            padding: "3px 5px",
                            fontSize: "16px",
                          }}
                        >
                          <img
                            src={oroCoin}
                            alt=""
                            style={{ maxWidth: "18px", maxHeight: "15px" }}
                          />
                          250
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView("iman")}>
                    <div
                      style={{
                        minHeight: "100%",
                        display: "grid",
                        placeContent: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={gusano}
                        alt="iman"
                        style={{ maxWidth: "100px" }}
                      />
                      <div
                        style={{
                          fontSize: "20px",
                          position: "absolute",
                          bottom: "-10px",
                          left: "33%",
                        }}
                      >
                        <div
                          style={{
                            background: "#081084",
                            border: "1px solid #ffed00",
                            padding: "3px 5px",
                            fontSize: "16px",
                          }}
                        >
                          <img
                            src={oroCoin}
                            alt=""
                            style={{ maxWidth: "18px", maxHeight: "15px" }}
                          />
                          250
                        </div>
                      </div>
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
                <Link to="../jugar/inventario">INVENTARIO</Link>
              </div>
              <div>
                <Link to="../jugar/mejoras">MEJORAS</Link>
              </div>
              <div>
                <Link to="../jugar/bonos-arena">BONOS DE ARENA</Link>
              </div>
              <div>
                <Link to="../jugar/skins" className="active">
                  SKINS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
