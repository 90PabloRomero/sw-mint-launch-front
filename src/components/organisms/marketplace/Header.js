import { useEffect, useState } from 'react';
import Logo from 'components/atoms/Logo';
import 'assets/css/templates/header-market.scss';
import userAvatar from 'assets/img/avatar_2.png';
import { Link } from 'react-router-dom';
import Tooltip from 'rc-tooltip';
import Button from 'components/atoms/Button';
import CrossIcon from 'components/atoms/icons/cross';
import HamburguerIcon from 'components/atoms/icons/hamburguer';
function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <header className=" absolute-inset">
        <div className="header flex-wrapper">
          <div className="header-left flex-wrapper">
            <Link to="/">
              <Logo
                alt="Space Worms"
                className="img-logo"
                style={{ width: '50%', minWidth: '70px' }}
              />
            </Link>
            <nav>
              <ul>
                <li className="desktop-only">
                  <Link to="/compra-egg" className="active nowrap">
                    Compra Egg
                  </Link>
                </li>
                <li className="desktop-only">
                  <Tooltip
                    placement="bottom"
                    trigger={['click']}
                    overlay={<span>Marketplace Próximamente!</span>}
                  >
                    <a href="/#0">Marketplace</a>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`mobile-only overlayDivMenuMobile ${navbarOpen ? ' showOverlay' : ''} `}>
            <nav>
              <ul>
                <li>
                  <a href="/" rel="author">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/compra-egg" rel="author">
                    Compra Egg
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="user-area">
              <Link to="/wallet">
                <button>
                  <img src={userAvatar} alt="" style={{ minWidth: '40px' }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Button onClick={handleToggle} className="buttonHamburguerStyles ml-3 mobile-only">
          {navbarOpen ? <CrossIcon /> : <HamburguerIcon />}
        </Button>
      </header>
    </>
  );
}

export default Header;
