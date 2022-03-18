import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userAvatar from 'assets/img/avatar_2.png';
import inventoryIcon from 'assets/img/icono_inventario.png';
import walletIcon from 'assets/img/icono_wallet.png';
import { connectWallet, getCurrentWalletConnected } from '../util/interact.js';
import '../assets/css/templates/wallet.scss';
import gusanoRojo from './../assets/img/gusamax.png';
import api from '../util/api.js';
import axios from 'axios';
import {Helmet} from "react-helmet";

export default function InventarioPage() {
  const [currentModal, setCurrentModal] = useState('init');
  const [listadatagusanos, setListadatagusanos] = useState([]);
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

  useEffect(() => {
    if (walletAddress !== '') {
      checkMintedNfts();
    }
  }, [walletAddress]);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          // once connected,check existing wallet in db and open modal with create account form
          api
            .post('/checkifwalletexist', {
              params: { walletaddress: accounts[0] }
            })
            .then(function (res) {
              if (res.data.success === 'existed') {
                localStorage.setItem('uuid', res.data.uuid);
                localStorage.setItem('token', res.data.token);
              } else if (res.data.success === 'unexisted') {
                setModalOpen(true); // modified by tuktuk
              }
            });
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

  const checkMintedNfts = async () => {
    await api
      .post('/getNFTTokens', { params: { walletaddress: walletAddress } })
      .then(function (res) {
        if (res.data.success === 'existed') {
          var nftorigin = res.data.data;
          asyncForLoop(nftorigin);

          localStorage.setItem('token', res.data.token);
        } else if (res.data.success === 'No NFT Tokens') {
          console.log('no tiene nfts');
        }
      });
  };
  const asyncForLoop = async (nftorigin) => {
    var nftdatas = new Array();
    for (const nfto of nftorigin) {
      var data = await getNFTData(nfto);
      if (data.rarity === 1) {
        data.rarity = 'Común (P)';
      } else if (data.rarity === 2) {
        data.rarity = 'Poco Común (P)';
      } else if (data.rarity === 3) {
        data.rarity = 'Raro (P)';
      } else if (data.rarity === 4) {
        data.rarity = 'Legendario (P)';
      } else if (data.rarity === 5) {
        data.rarity = 'Común';
      } else if (data.rarity === 6) {
        data.rarity = 'Poco Común';
      } else if (data.rarity === 7) {
        data.rarity = 'Raro';
      } else if (data.rarity === 8) {
        data.rarity = 'Legendario';
      }
      nftdatas.push(data);
    }
    setListadatagusanos(nftdatas);
  };
  const getNFTData = async (nfto) => {
    const res = await axios.get('https://spaceworms.app/nftdata/' + nfto.tokenId);
    return res.data;
  };

  const [sortedBy, setSortedBy] = useState('all');

  // the Modal
  const ShowInventario = () => {
    return (
      <div className="relative">
        <div className="black-label"></div>

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
                      <Link to="/inventario" className="active">
                        <span>
                          <img src={inventoryIcon} alt="" />
                        </span>
                        Inventario
                      </Link>
                    </li>
                    <li>
                      <Link to="/wallet">
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
                        <span style={{ paddingRight: '10px', cursor: 'pointer' }}>⤺</span>
                        Volver
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: '5' }}>
            <div className="h1" style={{ textAlign: 'start', paddingBottom: '10px' }}>
              Inventario
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '13px', textAlign: 'start' }}></div>
              <div className="sort-area">
                <select
                  name="sort-content-inventory"
                  id="sort-content-inventory"
                  style={{ minWidth: '175px' }}
                  onChange={(e) => setSortedBy(e.target.value)}
                >
                  <option value="all">Ver todos</option>
                  <option value="common">Común</option>
                  <option value="uncommon">No Común</option>
                  <option value="rare">Raro</option>
                  <option value="legendary">Legendario</option>
                </select>
              </div>
            </div>
            <div className="flex-wrapper">
              <div style={{ width: '100%' }} className="gusanos-list">
                {listadatagusanos.map((gusanos) => (
                  <button
                    onClick={() => {
                      setCurrentModal(gusanos.id);
                      setModalOpen(true);
                    }}
                    key={gusanos.id}
                    className="NFT-view-container"
                  >
                    <div className="image-container">
                      <img src={gusanos.Image} alt="" className="huevo-img" />
                    </div>
                    <div className="NFT-view-info-price">
                      <div style={{ fontWeight: '800', fontSize: '20px' }}>{gusanos.rarity}</div>
                      {/* <div>{gusanos.tokenvalue} WBNB</div> */}
                      <div>Usos {gusanos.Usos}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Inventario</title>
      </Helmet>
      <div className="mm-wallet">
        <ShowInventario />
      </div>
    </>
  );
}
