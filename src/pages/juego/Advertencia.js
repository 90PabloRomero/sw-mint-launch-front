import Logo from 'components/atoms/Logo';
import SocialMedia from 'components/molecules/SocialMedia.js';
import MmHeader from 'components/organisms/login/MmHeader';

const AdvertenciaPage = () => {
  return (
    <>
      <main className="market">
        <div className="hero grid place-center" style={{ paddingBottom: '0' }}>
          <div className=" grid place-center p-1" style={{ maxWidth: '800px' }}>
            <Logo style={{ maxWidth: '85px' }} />
            <h4 className=" text-center">ADVERTENCIA</h4>
            <p className="mt-2">
              ESTA VERSION QUE PROBARAS A CONTINUACIÓN ES UN DEMO Y PUEDE QUE EXPERIMENTES
              DIFICULTADES SEGÚN LAS CARACTERÍSTICAS DE TU EQUIPO. CONTINUAMOS DÍA A DÍA DEPURANDO
              EL CÓDIGO Y REALIZANDO PRUEBAS PARA OPTIMIZAR EL CONSUMO DE RECURSOS Y LA FLUIDEZ DEL
              JUEGO.
            </p>
            <div>
              LO PRINCIPAL PARA SPACE WORMS SERÁ OFRECERTE PARTIDAS FLUIDAS Y SIN PROBLEMAS DE
              LATENCIA.
            </div>

            <p>
              SI TU EXPERIENCIA DE JUEGO NO ES SATISFACTORIA TE PEDIMOS DISCULPAS Y TE INVITAMOS A
              PROBAR DE NUEVO EN LOS PRÓXIMOS DIAS.
            </p>
            <a href="/demo/game.html" className="disable-styles">
              <button
                className="game-btn mx-1"
                style={{
                  minHeight: '70px',
                  minWidth: '150px',
                  fontSize: '20px',
                  fontWeight: '800'
                }}
              >
                Entiendo, jugar!
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdvertenciaPage;
