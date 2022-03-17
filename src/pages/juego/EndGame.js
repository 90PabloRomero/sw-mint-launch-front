import { useNavigate } from 'react-router-dom';
import pos5 from './../../assets/img/pos5.png';
import pos1 from './../../assets/img/pos1.png';
import pos2 from './../../assets/img/pos2.png';
import pos3 from './../../assets/img/pos3.png';
import pos4 from './../../assets/img/pos4.png';
import ground from './../../assets/img/19.png';
import useWindowDimensions from 'components/atoms/useWindowsDimensions';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
export const EndGamePage = () => {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  };
  const { width, height } = useWindowDimensions();
  return (
    <>
      <Confetti width={width} height={height} />
      <main className="market" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
        <div
          className="hero grid place-center"
          style={{ paddingBottom: '0', maxHeight: '100vh', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: '100%', paddingTop: height / 5 }}>
            <div
              className="grid felicidades-screen-wrapper p-1"
              style={{
                maxWidth: '950px',
                textAlign: 'center',
                fontSize: '25px'
              }}
            >
              <h1 style={{ fontSize: '50px', marginTop: '-250px' }}>¡Felicidades!</h1>
              <div
                className={'flex-wrapper my-1 '}
                style={{
                  justifyContent: 'center',
                  gap: '20px'
                }}
              >
                <div
                  className={``}
                  style={{
                    maxWidth: '100%'
                  }}
                >
                  <div className="flex-wrapper " style={{ padding: '1rem', gap: '1rem' }}>
                    {/*  */}
                    <div
                      className="felicidades-screen"
                      style={{
                        maxHeight: '250px',
                        marginTop: '-60px'
                      }}
                    >
                      <div>
                        <img
                          src={`https://spaceworms.app/nftimages/4.png`}
                          alt="Quinto Lugar"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      </div>
                      <div>
                        <img src={pos5} alt="" />
                      </div>
                      <div
                        style={{
                          fontSize: '25px',
                          background: '#000',
                          borderRadius: '100%',
                          border: '3px solid white',
                          width: 'fit-content',
                          padding: '0 .45rem',
                          position: 'relative',
                          left: '35%',
                          top: '-80px'
                        }}
                      >
                        5
                      </div>
                    </div>
                    {/*  */}
                    <div
                      className={`felicidades-screen`}
                      style={{
                        maxHeight: '150px',
                        marginLeft: '-110px',
                        marginTop: '-100px'
                      }}
                    >
                      <div>
                        <img
                          src={`https://spaceworms.app/nftimages/1.png`}
                          alt="segundo lugar"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      </div>

                      <div style={{ position: 'relative', zIndex: '2' }}>
                        <img src={pos2} alt="segundo lugar" />
                      </div>
                      <div
                        style={{
                          fontSize: '45px',
                          background: '#000',
                          borderRadius: '100%',
                          border: '3px solid white',
                          width: 'fit-content',
                          padding: '0 .75rem',
                          position: 'relative',
                          left: '35%',
                          top: '-120px',
                          zIndex: '3'
                        }}
                      >
                        2
                      </div>
                    </div>
                    {/*  */}
                    <div
                      className="felicidades-screen"
                      style={{
                        minHeight: '250px',
                        marginTop: '-130px',
                        marginLeft: '-120px',
                        zIndex: '3'
                      }}
                    >
                      <div>
                        <img
                          src={`https://spaceworms.app/nftimages/2.png`}
                          alt="Primer Lugar"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      </div>
                      <div>
                        <img src={pos1} alt="" />
                      </div>
                      <div
                        style={{
                          fontSize: '50px',
                          background: '#000',
                          borderRadius: '100%',
                          border: '3px solid white',
                          width: 'fit-content',
                          padding: '0 .91rem',
                          position: 'relative',
                          left: '37%',
                          top: '-140px'
                        }}
                      >
                        1
                      </div>
                    </div>
                    {/*  */}
                    <div
                      className="felicidades-screen"
                      style={{
                        maxHeight: '250px',
                        marginLeft: '-120px',
                        zIndex: 2,
                        marginTop: '-80px'
                      }}
                    >
                      <div>
                        <img
                          src={`https://spaceworms.app/nftimages/3.png`}
                          alt="Tercer Lugar"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      </div>
                      <div>
                        <img src={pos3} alt="" />
                      </div>
                      <div
                        style={{
                          fontSize: '38px',
                          background: '#000',
                          borderRadius: '100%',
                          border: '3px solid white',
                          width: 'fit-content',
                          padding: '0 .71rem',
                          position: 'relative',
                          left: '33%',
                          top: '-120px'
                        }}
                      >
                        3
                      </div>
                    </div>
                    {/*  */}
                    <div
                      className="felicidades-screen"
                      style={{
                        maxHeight: '250px',
                        marginLeft: '-100px',
                        zIndex: 1,
                        marginTop: '-70px'
                      }}
                    >
                      <div>
                        <img
                          src={`https://spaceworms.app/nftimages/4.png`}
                          alt="dificultad: facil"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      </div>
                      <div>
                        <img src={pos4} alt="" />
                      </div>
                      <div
                        style={{
                          fontSize: '34px',
                          background: '#000',
                          borderRadius: '100%',
                          border: '3px solid white',
                          width: 'fit-content',
                          padding: '0 .61rem',
                          position: 'relative',
                          left: '35%',
                          top: '-90px'
                        }}
                      >
                        4
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'absolute-bottom'} style={{ zIndex: '7', bottom: '80px' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Link to="/">
              <button className="btn create-acc-button">INICIO</button>
            </Link>
          </div>
        </div>
        <div className={'absolute-bottom'} style={{ zIndex: '6', bottom: '-10px' }}>
          <img
            src={ground}
            alt=""
            style={{
              width: '100%',
              height: '30vh',
              objectFit: 'cover'
            }}
          />
        </div>
      </main>
    </>
  );
};
