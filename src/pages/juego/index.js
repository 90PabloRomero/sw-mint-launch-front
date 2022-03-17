import Logo from 'components/atoms/Logo';

import happyFaceIcon from '../../assets/img/icons/happy-face.png';
import swCoin from '../../assets/img/icons/coin.png';
import cogIcon from '../../assets/img/icons/cog.png';
import checklistIcon from '../../assets/img/icons/checklist.png';
import bagIcon from '../../assets/img/icons/bag.png';
import chartIcon from '../../assets/img/icons/chart.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AdvertenciaPage from './Advertencia';

export const GameHomePage = () => {
  const [advertenciaContent, setAdvertenciaContent] = useState(false);
  return (
    <>
      {advertenciaContent ? (
        <AdvertenciaPage />
      ) : (
        <div className="footer-wrapper">
          <div className="absolute-inset pt-1">
            <div className="flex-wrapper" style={{ justifyContent: 'space-between' }}>
              <div className="flex-wrapper">
                <div
                  style={{
                    borderRadius: '100%',
                    border: '5px solid #af2322',
                    height: '40px'
                  }}
                >
                  <img src={happyFaceIcon} alt="" style={{ width: '30px' }} />
                </div>
                <div
                  style={{
                    border: '5px solid #af2322',
                    background: 'black',
                    height: '25px',
                    paddingTop: '2px',
                    marginTop: '8px',
                    lineHeight: 0.5,
                    fontSize: '15px',
                    marginLeft: '-6px',
                    width: '80px'
                  }}
                >

                </div>

              </div>
              <div className="flex-wrapper relative">
                <div
                  style={{
                    borderRadius: '100%',
                    height: '40px',
                    zIndex: 2
                  }}
                >
                  <img src={swCoin} alt="" style={{ width: '40px' }} />
                </div>
                <div
                  style={{
                    border: '5px solid #af2322',
                    background: '#af2322',
                    height: '25px',
                    paddingTop: '2px',
                    marginTop: '8px',
                    lineHeight: 0.5,
                    fontSize: '15px',
                    marginLeft: '-6px',
                    width: '60px'
                  }}
                >
                  0
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid" style={{ placeContent: 'center', height: '100vh' }}>
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
            </div>
            <div
              className="flex-wrapper justify-center"
              style={{ zIndex: "1", position: "relative" }}
            >
              <button className="blue btn-circle mr-2">
                <img src={balanzaIcon} alt="" />
              </button>
              <button className="blue btn-circle ml-2">
                <img src={wormAladoIcon} alt="" />
              </button>
            </div>*/}
            <div
              className="flex-wrapper justify-center mt-3"
              style={{ zIndex: '1', position: 'relative' }}
            >
              <Link to={"/jugar/inventario"}>
              <button className="blue ml-2" style={{ borderRadius: '16px' }}>
                <img src={bagIcon} alt="" />
              </button></Link>

              <button
                onClick={() => setAdvertenciaContent(true)}
                className="game-btn mx-1"
                style={{
                  minHeight: '70px',
                  minWidth: '150px',
                  fontSize: '20px',
                  fontWeight: '800'
                }}
              >
                JUGAR
              </button>
              <Link to={"/jugar/misiones-diarias"}>
              <button className="blue ml-2" style={{ borderRadius: '16px' }}>
                <img src={checklistIcon} alt="" />
              </button></Link>
            </div>
          </div>
          {/*  */}
          <div className="absolute-fixed-bottom p-1">
            <div className="flex-wrapper" style={{ justifyContent: 'space-between' }}>
              <div className="mt-auto flex-column">
                {/*<Link to="/">*/}
                  {/*<div>
                    <button className="red-btn ">
                      <img src={shareIcon} alt="" />
                    </button>
                  </div>*/}
                {/*</Link>*/}
                <Link to="/jugar/global-ranking">
                  <button className="red-btn my-1">
                    <img src={chartIcon} alt="" />
                  </button>
                </Link>
              </div>

              <div className="mt-auto flex-column">
                <Link to="/">
                  <div className="red-btn " style={{ maxWidth: '53px' }}>
                    <svg
                      fill="currentColor"
                      strokeWidth="0.5"
                      stroke={'#18012d'}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"
                      />
                    </svg>
                  </div>
                </Link>
                <Link to="/jugar/opciones">
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
