import { useNavigate } from 'react-router-dom';
import leftArrow from './../../assets/img/leftarrow.png';
import { connectWallet, getCurrentWalletConnected } from '../../util/interact.js';
import api from '../../util/api.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
  text-align: center;
  font-size: 25px;
  margin-top: 2rem;
`;
const FlexWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
  justify-content: center;
  gap: 20px;
  > div:nth-child(1) {
    width: 50%;
    border: 3px solid #ffed00;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    > div:nth-child(1) {
      width: 100%;
    }
  }
`;

export const InventarioGusanosPage = () => {
  const history = useNavigate();
  const [listadatagusanos, setListadatagusanos] = useState([]);
  const [isOnView, setOnView] = useState('iman');
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const goBack = () => {
    history(-1);
  };

  // useEffect(async () => {
  //   const { address, status } = await getCurrentWalletConnected();
  //   setWallet(address);
  //   setStatus(status);
  // }, []);
  // useEffect(async () => {
  //   console.log(walletAddress);
  //   if (walletAddress !== '') {
  //     checkMintedNfts();
  //   }
  // }, []);
  // const checkMintedNfts = async () => {
  //   await api
  //     .post('/api/getNFTTokens', { params: { walletaddress: walletAddress } })
  //     .then(function (res) {
  //       if (res.data.success === 'existed') {
  //         var nftorigin = res.data.data;
  //         console.log('###########', nftorigin);
  //         asyncForLoop(nftorigin);

  //         localStorage.setItem('token', res.data.token);
  //       } else if (res.data.success === 'No NFT Tokens') {
  //         console.log('no tiene nfts');
  //       }
  //     });
  // };
  const asyncForLoop = async (nftorigin) => {
    var nftdatas = [];
    for (const nfto of nftorigin) {
      var data = await getNFTData(nfto);
      if (data.rarity === 1) {
        data.rarity = 'Común (P)';
      } else if (data.rarity === 2) {
        data.rarity = 'Poco Común (P)';
      } else if (data.rarity === 3) {
        data.rarity = 'Raro (P)';
      } else if (data.rarity === 4) {
        data.rarity = 'Legendario (P)';
      } else if (data.rarity === 5) {
        data.rarity = 'Común';
      } else if (data.rarity === 6) {
        data.rarity = 'Poco Común';
      } else if (data.rarity === 7) {
        data.rarity = 'Raro';
      } else if (data.rarity === 8) {
        data.rarity = 'Legendario';
      }
      nftdatas.push(data);
    }
    setListadatagusanos(nftdatas);
  };
  const getNFTData = async (nfto) => {
    console.log('----------------------', 'https://spaceworms.app/nftdata/' + nfto.tokenId);
    const res = await axios.get('https://spaceworms.app/nftdata/' + nfto.tokenId);
    return res.data;
  };

  return (
    <>
      <Helmet>
        <title>Inventario de Gusanos</title>
      </Helmet>
      <main className="market">
        <header style={{ position: 'absolute', top: '3vh', zIndex: '2' }}>
          <div className={'flex-wrapper'}>
            <button
              style={{
                border: 'none',
                background: '#af2322',
                color: 'white',
                minWidth: '148px',
                borderTop: '3px solid #ffed00',
                borderBottom: '3px solid #ffed00',
                borderRight: '3px solid #ffed00',
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => goBack()}>
              <img src={leftArrow} alt={'Regresar'} />
            </button>
          </div>
        </header>
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0, textAlign: 'center' }}>
          <div style={{ marginTop: '10vh' }}>Inventario de gusanos</div>
        </div>
        <div className="hero grid place-center">
          <Wrapper>
            <FlexWrapper>
              <div>
                <div style={{ fontSize: '30px' }}>
                  {isOnView === 'iman'
                    ? 'Común'
                    : isOnView === 'multiplicador'
                    ? 'Poco Común'
                    : isOnView === 'radar'
                    ? 'Raro'
                    : isOnView === 'velocidad'
                    ? 'Legendario'
                    : isOnView === 'movilidad'
                    ? 'Común (P)'
                    : isOnView === 'visibilidad'
                    ? 'Poco Común (P)'
                    : ''}
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
                <div style={{ margin: '1rem 0', fontSize: '16px' }}>Usos 10/50</div>
                <div className="flex-wrapper" style={{ justifyContent: 'center' }}>
                  <button
                    className={'btn game-btn'}
                    style={{
                      fontSize: '22px',
                      padding: '1rem',
                      minWidth: '166px'
                    }}>
                    USAR
                  </button>
                  <button
                    className={'btn game-btn'}
                    style={{
                      fontSize: '22px',
                      padding: '1rem',
                      minWidth: 'auto',
                      marginLeft: '10px'
                    }}
                    disabled>
                    RECARGAR
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: '65%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  borderRadius: '12px',
                  padding: '.51rem',
                  gap: '10px'
                }}>
                {listadatagusanos.map((gusanos) => (
                  <div
                    className="bonif-card"
                    style={{ background: 'none', maxHeight: '180px' }}
                    onClick={() => setOnView('iman')}>
                    <div
                      style={{
                        display: 'grid',
                        placeContent: 'center',
                        height: '100%'
                      }}>
                      <img
                        src="https://spaceworms.app/nftimages/4.png"
                        alt="iman"
                        style={{ maxWidth: '100px' }}
                      />
                    </div>
                  </div>
                ))}
                {/*  */}
              </div>
            </FlexWrapper>
          </Wrapper>
          <div className={'absolute-bottom'} style={{ bottom: '30px' }}>
            <BottomGameNavbar className={'flex-wrapper'}>
              <div>
                <Link to="../jugar/inventario" className="active">
                  INVENTARIO
                </Link>
              </div>
              {/*<div>
                <Link to="../jugar/mejoras">MEJORAS</Link>
              </div>*/}
              <div>
                <Link to="../jugar/bonos-arena">BONOS DE ARENA</Link>
              </div>
              <div>
                <Link to="../jugar/skins">SKINS</Link>
              </div>
            </BottomGameNavbar>
          </div>
        </div>
      </main>
    </>
  );
};
const BottomGameNavbar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: right;
    margin-right: 15px;
  }
`;
