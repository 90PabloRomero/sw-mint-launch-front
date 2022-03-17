import { useNavigate } from 'react-router-dom';
import leftArrow from './../../assets/img/leftarrow.png';
import imanIcon from './../../assets/img/imanIcon.png';
import multiIcon from './../../assets/img/multiIcon.png';
import radarIcon from './../../assets/img/radarIcon.png';
import velocidadIcon from './../../assets/img/velocidadIcon.png';
import movilidadIcon from './../../assets/img/movilidadIcon.png';
import visibilidadIcon from './../../assets/img/visibilidadIcon.png';

import { Link } from 'react-router-dom';
import oroCoin from './../../assets/img/oro.png';

import { useState } from 'react';
import styled from "styled-components";
import {Helmet} from "react-helmet";

const FlexWrapper = styled.div`
  display: flex;
  margin: .5rem 0;
  justify-content: center;
  gap: 20px;
  > div:nth-child(1){
    width: 60%;
    border: 3px solid #ffed00;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  @media (max-width: 800px){
    flex-direction: column;
    > div:nth-child(1) {
      width: 100%;
      order:2;
    }
    > div:nth-child(2) {
      
      max-height: 200px;
      
    }
    }
`


export const BonificacionesDeArenaPage = () => {
  const history = useNavigate();

  const [isOnView, setOnView] = useState('iman');
  const goBack = () => {
    history(-1);
  };
  return (
    <>
        <Helmet>
            <title>Bonificaciones de Arena</title>
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
              Bonificaciones de la arena
              <FlexWrapper
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    border: '3px solid #ffed00',
                    borderRadius: '12px',
                    padding: '.51rem',
                    gap: '10px'
                  }}
                >
                  <div className="bonif-card" onClick={() => setOnView('iman')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Imán
                    </div>
                    <div>
                      <img src={imanIcon} alt="iman" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>
                        <img src={oroCoin} alt="" style={{ maxWidth: '18px', maxHeight: '15px' }} />{' '}
                        1,500
                      </div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView('multiplicador')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Multiplicador
                    </div>
                    <div>
                      <img src={multiIcon} alt="Multiplicador" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>
                        <img src={oroCoin} alt="" style={{ maxWidth: '18px', maxHeight: '15px' }} />{' '}
                        1,500
                      </div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView('radar')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Radar
                    </div>
                    <div>
                      <img src={radarIcon} alt="Radar" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>
                        <img src={oroCoin} alt="" style={{ maxWidth: '18px', maxHeight: '15px' }} />{' '}
                        1,500
                      </div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView('velocidad')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Velocidad
                    </div>
                    <div>
                      <img src={velocidadIcon} alt="Velocidad" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>
                        <img src={oroCoin} alt="" style={{ maxWidth: '18px', maxHeight: '15px' }} />{' '}
                        1,500
                      </div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView('movilidad')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Movilidad
                    </div>
                    <div>
                      <img src={movilidadIcon} alt="movilidad" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>O 1,500</div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="bonif-card" onClick={() => setOnView('visibilidad')}>
                    <div
                      style={{
                        background: '#ffed00',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Visibilidad
                    </div>
                    <div>
                      <img src={visibilidadIcon} alt="visibilidad" style={{ maxWidth: '100px' }} />
                    </div>
                    <div style={{ fontSize: '12px' }}>Duración 21 seg.</div>
                    <div style={{ fontSize: '20px' }} className={'flex-wrapper justify-between'}>
                      <div>O 1,500</div>
                      <div
                        style={{
                          background: '#ffed00',
                          color: '#000',
                          borderTopLeftRadius: '8px',
                          paddingLeft: '8px'
                        }}
                      >
                        3/10
                      </div>
                    </div>
                  </div>
                </div>
                <BonosDisplayer>
                  <div style={{ fontSize: '30px' }}>
                    {isOnView === 'iman'
                      ? 'Imán'
                      : isOnView === 'multiplicador'
                      ? 'Multiplicador'
                      : isOnView === 'radar'
                      ? 'Radar'
                      : isOnView === 'velocidad'
                      ? 'Velocidad'
                      : isOnView === 'movilidad'
                      ? 'Movilidad'
                      : isOnView === 'visibilidad'
                      ? 'Visibilidad'
                      : ''}
                  </div>
                  <div>
                    {isOnView === 'iman' ? (
                      <img src={imanIcon} alt="iman" />
                    ) : isOnView === 'multiplicador' ? (
                      <img src={multiIcon} alt="Multiplicador" />
                    ) : isOnView === 'radar' ? (
                      <img src={radarIcon} alt="Radar" />
                    ) : isOnView === 'velocidad' ? (
                      <img src={velocidadIcon} alt="Velocidad" />
                    ) : isOnView === 'movilidad' ? (
                      <img src={movilidadIcon} alt="movilidad" />
                    ) : isOnView === 'visibilidad' ? (
                      <img src={visibilidadIcon} alt="visibilidad" />
                    ) : (
                      ''
                    )}
                  </div>
                  <div style={{ margin: '1rem 0' }}>Aumenta la visión de la arena.</div>
                  <button className={'btn create-btn'}>MEJORA</button>
                </BonosDisplayer>
              </FlexWrapper>
            </div>
          </div>
          <div className={'absolute-bottom'} style={{ bottom: '30px' }}>
            <BottomGameNavbar>
              <div>
                <Link to="../jugar/inventario">INVENTARIO</Link>
              </div>
              {/*<div>*/}
              {/*  <Link to="../jugar/mejoras">MEJORAS</Link>*/}
              {/*</div>*/}
              <div>
                <Link to="../jugar/bonos-arena" className="active">
                  BONOS DE ARENA
                </Link>
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
`

const BonosDisplayer = styled.div`
  border: 3px solid #ffed00;
  border-radius: 12px;
  background: #cccccc44;
  display: grid;
  place-items: center;
  padding: .51rem;
`