import leftArrow from '../../assets/img/leftarrow.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';

export const TerminosYCondicionesPage = () => {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };
  const goToGame = () => {
    history('/jugar');
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      checkbox: false
    }
  });

  const onSubmit = (values) => {
    // eslint-disable-next-line no-unused-expressions
    values.checkbox ? (localStorage.setItem('tos', true), history('/jugar')) : goToGame();
  };
  return (
    <>
      <Helmet>
        <title>Terminos y Condiciones</title>
      </Helmet>
      <main className="market" style={{ maxHeight: '100vh' }}>
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
        <div className="hero grid place-center" style={{ paddingBottom: '0' }}>
          <TerminosYConditionsWrapper>
            <TitleH1>Terminos de servicio y Políticas de privacidad</TitleH1>
            <LegalContent>
              <p>
                Space Worms© (desde ahora SW) ... Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                vel eum iriure
              </p>
              <p>
                Space Worms© (desde ahora SW) ... Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                vel eum iriure
              </p>
              <p>
                Space Worms© (desde ahora SW) ... Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                vel eum iriure
              </p>
            </LegalContent>
            <div style={{ textAlign: 'center' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => <input type={'checkbox'} {...field} />}
                  />
                  <span style={{ fontSize: '.5rem' }}>No volver a mostrar</span>
                </div>

                <AcceptButton type={'submit'} className="game-btn mx-1">
                  ACEPTAR
                </AcceptButton>
              </form>
            </div>
          </TerminosYConditionsWrapper>
        </div>
      </main>
    </>
  );
};

const TitleH1 = styled.div`
  font-size: 0.62rem;
  text-align: center;
  margin-top: 3rem;
  text-decoration: underline;
  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;
const TerminosYConditionsWrapper = styled.div`
  display: grid;
  padding: 1rem;
  max-width: 800px;
  text-align: center;
`;
const AcceptButton = styled.button`
  margin-top: 10px;
  min-height: 35px;
  font-size: 10px;
  min-width: 130px;

  font-weight: 800;
  @media (min-height: 600px) {
    min-height: 70px;
    min-width: 150px;
    font-size: 20px;
  }
`;
const LegalContent = styled.div`
  min-height: 40vh;
  max-height: 40vh;
  background: #000000d8;
  border: 3px solid var(--yellowborder);
  border-radius: 16px;
  overflow-y: scroll;
  margin: 1rem 0;
  @media (min-height: 600px) {
    min-height: 60vh;
    max-height: 60vh;
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--yellowborder);
    border: 3px solid var(--transparent);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  p {
    padding: 10px;
    margin: 0.15rem 0 0 0;
    text-align: justify;
    font-size: 0.52rem;

    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
`;
