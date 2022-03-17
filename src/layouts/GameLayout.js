import { useNavigate } from "react-router-dom";
import leftArrow from "./../assets/img/leftarrow.png";
export const GameLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="vh-100 mm-login">
      <header className="absolute-inset">
        <div className="header flex-wrapper">
          <div>
            <button
              style={{
                border: "none",
                background: "#af2322",
                color: "white",
                minWidth: "148px",
                marginTop: "35px",
                borderTop: "3px solid #ffed00",
                borderBottom: "3px solid #ffed00",
                borderRight: "3px solid #ffed00",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <img src={leftArrow} alt={"Regresar"} />
            </button>
          </div>
          <div className="waiting-room-timer">timer</div>
        </div>
      </header>

      {children}
    </div>
  );
};
