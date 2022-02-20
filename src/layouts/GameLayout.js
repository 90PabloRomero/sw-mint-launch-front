import { useNavigate } from "react-router-dom";

export const GameLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="vh-100 mm-login">
      <header className="absolute-inset">
        <div className="header flex-wrapper">
          <div>
            <button onClick={() => navigate("/")}>back</button>
          </div>
          <div className="waiting-room-timer">timer</div>
        </div>
      </header>

      {children}
    </div>
  );
};
