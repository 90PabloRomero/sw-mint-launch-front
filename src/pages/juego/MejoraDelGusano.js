import { useNavigate } from 'react-router-dom';
import leftArrow from './../../assets/img/leftarrow.png';
import imanIcon from './../../assets/img/imanIcon.png';
import multiIcon from './../../assets/img/multiIcon.png';
import oroCoin from './../../assets/img/oro.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";
const FlexWrapper = styled.div`
  display: flex;
  margin: .5rem 0;
  justify-content: center;
  gap: 20px;
  > div:nth-child(1){
    width: 50%;
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
    }
    }
`
export const MejorasGusanoPage = () => {
  const history = useNavigate();

  const [isOnView, setOnView] = useState('iman');
  const goBack = () => {
    history(-1);
  };
  return (
    <>
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
              <h1>Mejora de gusanos</h1>
              <p
                style={{
                  fontSize: '16px',
                  margin: '10px 0',
                  fontWeight: '500'
                }}
              >
                Aquí puedes mejorar las habilidades de tus gusanos
              </p>
              <FlexWrapper
              >
                <div
                  style={{
                    width: '60%',
                    display: 'grid',
                    border: '3px solid #ffed00',
                    gridTemplateColumns: 'repeat(3, 1fr)',

                    placeContent: 'center',
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
                </div>
                <div
                  style={{
                    width: '40%',
                    border: '3px solid #ffed00',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                    padding: '1rem'
                  }}
                >
                  <div>(nombre de gusano))</div>
                  <div>(gusano)</div>
                  <button className={'btn game-btn'}>USAR</button>
                </div>
              </FlexWrapper>
            </div>
          </div>
          <div className={'absolute-bottom'} style={{ bottom: '30px' }}>
            <BottomGameNavbar>
              <div>
                <Link to="../jugar/inventario">INVENTARIO</Link>
              </div>
              {/*<div>*/}
              {/*  <Link to="../jugar/mejoras" className="active">*/}
              {/*    MEJORAS*/}
              {/*  </Link>*/}
              {/*</div>*/}
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
`