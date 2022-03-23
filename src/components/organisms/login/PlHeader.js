import Logo from "../../atoms/Logo";
import { Link } from "react-router-dom";

function PlHeader() {
  return (
    <>
      <header className=" absolute-inset">
        <div className="header flex-wrapper">
          <div className="header-left">
            <Link to="/">
              <Logo
                alt="Space Worms"
                className="img-logo"
                style={{ width: "50%", minWidth: "70px" }}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default PlHeader;
