import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cryptoCoinLogo from 'assets/img/gusano.png';
import userAvatar from 'assets/img/avatar_2.png';
import inventoryIcon from 'assets/img/icono_inventario.png';
import walletIcon from 'assets/img/icono_wallet.png';
import { connectWallet, getCurrentWalletConnected } from '../util/interact.js';
import '../assets/css/templates/wallet.scss';
import Tooltip from 'rc-tooltip';
import {Helmet} from "react-helmet";

export default function WalletPage() {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };
  const [modalOpen, setModalOpen] = useState(true);
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          // once connected, open modal with create account form
          setModalOpen(true);
        } else {
          setWallet('');
          setModalOpen(false);
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
            You must install Metamask, a virtual Ethereum wallet, in your browser.
          </a>
        </p>
      );
    }
  }

  // the Modal
  const ShowWallet = () => {
    return (
      <>
        <Helmet>
          <title>Wallet</title>
        </Helmet>
        <div className="modal-wrapper" style={{ overflowY: 'scroll' }}>
          <div className="grid wallet-layout">
            {/*  */}
            {/* wallet starts */}
            <div>
              <div className="wallet-blue-box">
                <div className="wallet-user-info">
                  <div>
                    {' '}
                    <img src={userAvatar} alt="" />
                  </div>
                  <div>Usuario</div>
                  <div className="walletAddress" style={{ marginBottom: '10px' }}>
                    {String(walletAddress).substring(0, 6) +
                      '...' +
                      String(walletAddress).substring(38)}
                  </div>
                </div>
                <div className="wallet-user-info-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/inventario">
                          <span>
                            <img src={inventoryIcon} alt="" />
                          </span>
                          Inventario
                        </Link>
                      </li>
                      <li>
                        <Link to="/wallet" className="active">
                          <span>
                            <img src={walletIcon} alt="" />
                          </span>
                          Wallet
                        </Link>
                      </li>

                      <li>
                        <button
                          style={{
                            background: 'none',
                            border: '0',
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            padding: '0',
                            cursor: 'pointer'
                          }}
                          onClick={goBack}
                        >
                          <span style={{ paddingRight: '10px' }}>⤺</span>
                          Volver
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="wallet-rs">
              <div className="h1">Wallet</div>
              <div className="div">
                {String(walletAddress).substring(0, 6) +
                  '...' +
                  String(walletAddress).substring(38)}
              </div>
              <div className="flex-wrapper wallet-bb-flex">
                <div className="wallet-blue-box">
                  <div style={{ fontSize: '30px' }}>Coin</div>
                  <div className="value">
                    0 BNB
                    <legend>0 USD</legend>
                  </div>
                  <div className="value">
                    0 BUSD
                    <legend>0 USD</legend>
                  </div>
                </div>
                <div className="wallet-blue-box">
                  <div style={{ fontSize: '30px' }}>WormsCoin</div>
                  <div className="value">
                    0 WC
                    <legend>0 USD</legend>
                  </div>
                  <div className="grid mt-2">
                    <button className="button" disabled={true}>
                      Depositar
                    </button>
                  </div>
                </div>
              </div>
              <div className="h1">Ingame Currency</div>
              <div className="wallet-blue-box">
                <div>WormsCoin</div>
                <div className="wallet-blue-box-image">
                  <img src={cryptoCoinLogo} alt="" />
                </div>
                <div className="crypto-value">
                  0<legend>0 USD</legend>
                </div>
                <div className="grid mt-2">
                  <button className="button" disabled={true}>
                    Retirar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowWallet /> : ''}

      <div className="mm-wallet">
        <div className="">{` `}</div>
      </div>
    </>
  );
}
