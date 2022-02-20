import Logo from "components/atoms/Logo";
import LoadingWorm from "components/organisms/LoadingWorm";

export const WaitingRoomPage = () => {
  return (
    <div className="mmlogincenterdiv container grid place-center">
      <Logo className="zindex" />
      <div className="waiting-box">
        <div>Sala de espera</div>
        <div>
          <LoadingWorm />
        </div>
        <div>Jugadores encontrados:</div>
      </div>
    </div>
  );
};
