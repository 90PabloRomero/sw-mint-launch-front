import { useNavigate } from 'react-router-dom';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import leftArrow from '../assets/img/leftarrow.png';
export const GameLayout = ({ children }) => {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  };
  return (
    <div className="vh-100 mm-login">
      <header className="absolute-inset">
        <div className="header flex-wrapper">
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
                cursor: 'pointer',
                marginTop: '1rem'
              }}
              onClick={() => goBack()}
            >
              <img src={leftArrow} alt={'Regresar'} />
            </button>
          </div>
          <div className="waiting-room-timer">
            <Timer active duration={null}>
              <Timecode />
            </Timer>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
};
