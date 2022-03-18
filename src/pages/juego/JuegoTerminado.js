import calavera from './../../assets/img/calavera.png';
import chartIcon from '../../assets/img/icons/chart.png';
import weightIcon from '../../assets/img/icons/weighing.png';
import oroCoin from './../../assets/img/oro.png';
import {Helmet} from "react-helmet";

export const JuegoTerminadoPage = () => {
  return (
    <>
        <Helmet>
            <title>Fin del Juego</title>
        </Helmet>
      <main className="market">
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
              <h1 style={{ fontSize: '40px' }}>Juego terminado</h1>
              <div
                className={'flex-wrapper my-1'}
                style={{
                  justifyContent: 'center',
                  gap: '20px',
                  flexDirection: 'column',
                  margin: '25px auto 0 auto'
                }}
              >
                <div
                  style={{
                    width: '40vw',
                    display: 'grid',
                    border: '2px solid #ffed00',
                    borderRadius: '12px',
                    margin: 'auto'
                  }}
                >
                  <div
                    className="flex-wrapper"
                    style={{
                      padding: '.31rem',
                      justifyContent: 'space-between',
                      fontSize: '60px'
                    }}
                  >
                    <div>
                      <button className="red-btn" style={{ marginRight: '10px' }}>
                        <img src={chartIcon} alt="" />
                      </button>
                      <span>50</span>
                    </div>
                    <div style={{ marginTop: '5px' }}>
                      <button
                        style={{
                          background: 'none',
                          border: '0',
                          maxHeight: '50px',
                          marginRight: '10px'
                        }}
                      >
                        <img src={weightIcon} alt="" />
                      </button>
                      <div
                        style={{
                          display: 'inline',
                          marginTop: '-15px'
                        }}
                      >
                        3,623
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
                <div
                  style={{
                    minWidth: '50vw',
                    display: 'grid',
                    border: '2px solid #ffed00',
                    borderRadius: '12px'
                  }}
                >
                  <div
                    className="flex-wrapper"
                    style={{
                      padding: '.31rem',
                      justifyContent: 'space-between',
                      fontSize: '30px'
                    }}
                  >
                    <div>GANADOS</div>
                    <div>
                      2 <img src={oroCoin} alt="" style={{ maxWidth: '30px', maxHeight: '30px' }} />
                    </div>
                    {/*  */}
                  </div>
                </div>
                {/*  */}
                <div
                  style={{
                    minWidth: '50vw',
                    display: 'grid',
                    border: '2px solid #ffed00',
                    borderRadius: '12px'
                  }}
                >
                  <div
                    className="flex-wrapper"
                    style={{
                      padding: '.31rem',
                      justifyContent: 'space-between',
                      fontSize: '30px'
                    }}
                  >
                    <div>GUSANOS MUERTO</div>
                    <div>1</div>
                    {/*  */}
                  </div>
                </div>
                {/*  */}
                <div
                  style={{
                    minWidth: '50vw',

                    display: 'grid',
                    border: '2px solid #ffed00',
                    borderRadius: '12px'
                  }}
                >
                  <div
                    className="flex-wrapper"
                    style={{
                      padding: '.31rem',
                      justifyContent: 'space-between',
                      fontSize: '30px'
                    }}
                  >
                    <div>TIEMPO DE SUPERVIVENCIA</div>
                    <div>5m 23s</div>
                    {/*  */}
                  </div>
                </div>
                {/*  */}
                <div
                  style={{
                    minWidth: '50vw',
                    maxWidth: '800px',
                    display: 'grid',
                    border: '2px solid #ffed00',
                    borderRadius: '12px'
                  }}
                >
                  <div
                    className="flex-wrapper"
                    style={{
                      padding: '.31rem',
                      justifyContent: 'space-between',
                      fontSize: '30px'
                    }}
                  >
                    <div>DISTANCIA RECORRIDA</div>
                    <div>120 m</div>
                    {/*  */}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn create-acc-button"
                  style={{
                    padding: '20px 50px',
                    maxWidth: '170px',
                    fontSize: '22px',
                    marginTop: '50px'
                  }}
                >
                  INICIO
                </button>
              </div>
            </div>
          </div>
          <div
            className={'absolute-bottom'}
            style={{ bottom: '30px', textAlign: 'end', right: '30px' }}
          >
            <img src={calavera} alt="..." />
          </div>
        </div>
      </main>
    </>
  );
};
