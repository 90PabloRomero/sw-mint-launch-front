
import { useNavigate } from 'react-router-dom';
import leftArrow from './../../assets/img/leftarrow.png';
import misionFacil from './../../assets/img/misionfacil.png';
import misionLock from './../../assets/img/misionlock.png';
import { Helmet } from "react-helmet";

export const MisionesDiariasPage = () => {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  };
  return (
    <>
      <Helmet>
        <title>Misiones Diarias</title>
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
              <img src={leftArrow} alt={'Regresar'} />
            </button>
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: '0' }}>
          <div style={{ minWidth: '100vw', height: '800px' }}>
            <div
              className=" grid  p-1"
              style={{
                maxWidth: '950px',
                textAlign: 'center',
                margin: 'auto',
                fontSize: '25px',
                marginTop: '2rem'
              }}
            >
              <div
                className={'flex-wrapper my-1'}
                style={{
                  marginTop: '25px',
                  justifyContent: 'center',
                  gap: '20px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    border: '3px solid #ffed00',
                    borderRadius: '12px',
                    padding: '.51rem',
                    gap: '10px'
                  }}
                >
                  <div className="flex-wrapper" style={{ padding: '1rem', gap: '1rem' }}>
                    <div
                      style={{
                        border: '3px solid white',
                        minHeight: '250px',
                        minWidth: '180px',
                        padding: '10px 5px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Fácil</div>
                      <div>
                        <img src={misionFacil} alt="dificultad: facil" />
                      </div>
                      <div style={{ fontSize: '12px' }}>Come 200 loriks</div>
                    </div>
                    {/*  */}
                    <div
                      style={{
                        border: '3px solid white',
                        minHeight: '250px',
                        minWidth: '180px',
                        padding: '10px 5px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#1c648b84'
                        }}
                      ></div>
                      <div>Normal</div>
                      <div>
                        <img src={misionLock} alt="dificultad: facil" />
                      </div>
                      <div style={{ fontSize: '12px' }}>&nbsp;</div>
                    </div>
                    {/*  */}
                    <div
                      style={{
                        border: '3px solid white',
                        minHeight: '250px',
                        minWidth: '180px',
                        padding: '10px 5px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#1c648b84'
                        }}
                      ></div>
                      <div>Dificil</div>
                      <div>
                        <img src={misionLock} alt="dificultad: facil" />
                      </div>
                      <div style={{ fontSize: '12px' }}>&nbsp;</div>
                    </div>
                    {/*  */}
                    <div
                      style={{
                        border: '3px solid white',
                        minHeight: '250px',
                        minWidth: '180px',
                        padding: '10px 5px',

                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#1c648b84'
                        }}
                      >&nbsp;       </div>
                      <div>Extrema</div>
                      <div>
                        <img src={misionLock} alt="dificultad: facil" />
                      </div>
                      <div style={{ fontSize: '12px' }}>&nbsp;</div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
              Nuevas tareas disponibles en: 2h 8m
            </div>
          </div>
          <div className={'absolute-bottom'} style={{ bottom: '30px' }}>
            {/* <div
              className={"flex-wrapper"}
              style={{ justifyContent: "center", gap: "2rem" }}
            >
              <div>
                <Link to="juego/inventario">INVENTARIO</Link>
              </div>
              <div>
                <Link to="juego/mejoras">MEJORAS</Link>
              </div>
              <div>
                <Link to="juego/bonos-arena" className="active">
                  BONOS DE ARENA
                </Link>
              </div>
              <div>
                <Link to="juego/skins">SKINS</Link>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </main>
    </>
  );
};
