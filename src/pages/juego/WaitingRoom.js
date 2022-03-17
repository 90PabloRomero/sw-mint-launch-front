import Logo from 'components/atoms/Logo';
import LoadingWorm from 'components/organisms/LoadingWorm';
import {Helmet} from "react-helmet";

export const WaitingRoomPage = () => {
  return (
      <>
      <Helmet>
          <title>Esperando jugadores</title>
      </Helmet>
    <div className="mmlogincenterdiv container grid place-center">
      <Logo className="zindex" />
      <div className="waiting-box" style={{ minWidth: '375px' }}>
        <div>Sala de espera</div>
        <div>
          <LoadingWorm />
        </div>
        <div>Jugadores encontrados:</div>
      </div>
    </div>
      </>
  );
};
