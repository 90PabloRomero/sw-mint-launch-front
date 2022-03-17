import { useNavigate } from 'react-router-dom';
import leftArrow from './../../assets/img/leftarrow.png';
import wakyFace from './../../assets/img/wakyface.png';
export const ProfilePage = () => {
  const history = useNavigate();

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
            <div
              style={{
                marginLeft: '8px',
                height: '67px',
                fontSize: '35px',
                display: 'grid',
                placeContent: 'center'
              }}
            >
              Perfil
            </div>
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: '0' }}>
          <div
            style={{
              background: '#171a1c93',
              minWidth: '100vw',
              height: '500px',
              borderTop: '3px solid #ffed00',
              borderBottom: '3px solid #ffed00'
            }}
          >
            <div
              className=" grid  p-1"
              style={{ maxWidth: '600px', textAlign: 'center', margin: 'auto', fontSize: '25px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={wakyFace} alt={'Perfil'} />
                <div
                  className=" text-center"
                  style={{
                    fontSize: '35px',
                    lineHeight: '35px',
                    paddingTop: '25px'
                  }}
                >
                  Perfil
                </div>
              </div>

              <div className={'flex-wrapper justify-between my-1'}>
                <div>Puntuación más alta</div>
                <div>2,833</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Entra al Top-3</div>
                <div>0</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Victorias</div>
                <div>0</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Muertes</div>
                <div>4</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Partidas jugadas</div>
                <div>10</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Tiempo total de juego</div>
                <div>34m 52s</div>
              </div>
              <div className={'flex-wrapper justify-between my-1'}>
                <div>Puntuación Total</div>
                <div>10,520</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
