import { useEffect, useState } from "react";
import "assets/css/templates/components/modal.scss";
import { useNavigate } from "react-router-dom";
import SocialMedia from "components/molecules/SocialMedia";
import { getCurrentWalletConnected } from "../util/interact.js";
import api from "../util/api.js";
import { BusdAbiService } from "util/services/busd.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/organisms/marketplace/Header";
import gusaMax from "./../assets/img/gusano1.png";
import gusanoRojo from "./../assets/img/gusamax.png";

toast.configure();

const Web3 = require("web3");

const mainnetAbi = [
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
      { internalType: "uint256", name: "_price", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "safeMint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_max", type: "uint256" }],
    name: "setMaxNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_price", type: "uint256" }],
    name: "setNFTPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function MarketplacePage() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("init");
  // const [isBusdNotApproved, setBusdApproved] = useState(true);
  const [walletAddress, setWallet] = useState("");
  const [allowance, setAllowance] = useState(0);
  const [price, setPrice] = useState(1);
  const navigate = useNavigate();
  // we create an initial state for the current eggs available by user
  const [currentMintedNfts, setCurrentMintedNfts] = useState();
  const [wholeMintedNfts, setWholeMintedNfts] = useState(0);
  const [nftImgPath, setNftImgPath] = useState();
  const eggPrice = 100 * Number(price);
  const isBusdNotApproved = Number(allowance) < Number(price) * 10e17;
  // const isBusdNotApproved = true;
  // we inform the user about mm status on model info
  const [MMStatusInfo, setMMStatusInfo] = useState("Esperando a Metamask");

  const [showGusano, setShowGusano] = useState("");

  // contract address
  // const mainnetContract = "0x4f54DBCF6852cc5386f72210B3587B1975637386";
  const mainnetContract = "0x2c59a530b0f253b4e436dea8c6d127465f5c0a55";

  const account1 = walletAddress;
  let tokenId;

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    // setStatus(status);
    addWalletListener();
  }, []);

  // useEffect(() => {
  //   imgURI(wholeMintedNfts + 1);
  // }, [wholeMintedNfts]);

  useEffect(() => {
    (async () => {
      const rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
      const web3 = new Web3(rpcURL);
      if (account1 && web3.eth.Contract) {
        const BUSDContractAddress =
          "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";
        const BUSDABI = BusdAbiService;

        const BUSDContract = await new web3.eth.Contract(
          BUSDABI,
          BUSDContractAddress
        );

        // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);
        const allowance = await BUSDContract.methods
          .allowance(account1, mainnetContract)
          .call();
        setAllowance(allowance);
      }
    })();
  }, [account1]);

  // function imgURI(tokenId) {
  //   let base_URI = "https://negociosytecnologias.net/erc721/" + tokenId;
  //   try {
  //     api.get(base_URI).then(function (response) {
  //       var str = response.data;
  //       var str1 = str.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "");
  //       var arr = str1.split('"');
  //       var res = arr[arr.length - 2];

  //       setNftImgPath(res);
  //     });
  //   } catch (error) {
  //     console.log("Something went wrong: " + error.message);
  //   }
  // }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          // setWallet(accounts[0]);
          // setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          // setWallet("");
          // setStatus("🦊 Connect to Metamask using the top right button.");

          localStorage.removeItem("uuid");
          navigate("/login");
        }
      });
    }
  }

  // the Modal
  const ShowBuyEgg = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            <div className="market-modal">
              <div className="marketplace-back-action">
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Regresar a Marketplace
                </button>
              </div>
              <div className="flex-wrapper">
                <div style={{ width: "50%" }}>
                  <img src={gusanoRojo} alt="gusano" className="img-fluid" />
                  <div
                    style={{
                      padding: "5px 15px",
                      fontSize: "15px",
                      color: "#e9dc20",
                      background: "#00000080",
                      width: "fit-content",
                      margin: "0 auto",
                      borderRadius: ".21rem",
                    }}
                  >
                    37 / 125
                  </div>
                </div>
                <div style={{ width: "50%", textAlign: "left" }}>
                  <div style={{ fontSize: "30px" }}>GusaMax</div>
                  <div style={{ fontSize: "11px", color: "#ccc" }}>
                    Dueño: kahahygytshga
                  </div>

                  <div className="market-modal-stats">
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Visión</div>
                      <div>2400</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Agilidad</div>
                      <div>450</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Velocidad</div>
                      <div>1.23</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Imán</div>
                      <div>1.35</div>
                    </div>
                    <div
                      className="flex-wrapper"
                      style={{ borderBottom: "1px solid #414a2b" }}
                    >
                      <div>Radar</div>
                      <div>4.52</div>
                    </div>
                    <div className="flex-wrapper">
                      <div>Multiplicador</div>
                      <div>6.25</div>
                    </div>
                  </div>
                  <div className="marketplace-modal-values">
                    <div>0.15 WBNB</div>
                    <div>75.52 USD</div>
                  </div>
                  <div>
                    <button className="button" style={{ minWidth: "100%" }}>
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const listadatagusanos = [
    {
      id: 1,
      name: "GusaMax",
      tokenvalue: "1.6",
      value: "845.00",
      tokenimg: gusaMax,
    },
    {
      id: 2,
      name: "GusaMax",
      tokenvalue: "1.6",
      value: "845.00",
      tokenimg: gusaMax,
    },
    {
      id: 3,
      name: "GusaMax",
      tokenvalue: "1.6",
      value: "845.00",
      tokenimg: gusaMax,
    },
    {
      id: 4,
      name: "GusaMax",
      tokenvalue: "1.6",
      value: "845.00",
      tokenimg: gusaMax,
    },
  ];
  return (
    <>
      {modalOpen ? <ShowBuyEgg /> : ""}
      <main className="market">
        <div className="black-label"></div>
        <div className="hero" style={{ paddingBottom: "0" }}>
          <Header />
          <div
            className="game-wrapper market-layout"
            style={{ maxWidth: "100%" }}
          >
            <h1
              style={{
                fontSize: "clamp(1.8rem, 2rem, 4rem)",
                gridArea: "title",
                textAlign: "right",
              }}
            >
              Marketplace
            </h1>
            {/*  */}
            <div className="market-sidebar mt-1">
              <div className="p-1">
                <div
                  className="flex-wrapper"
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <div>Filtros</div>
                  <div>
                    <button>Limpiar todo</button>
                  </div>
                </div>
                <div
                  className="flex-wrapper pt-1"
                  style={{
                    justifyContent: "space-between",
                    borderTop: "2px solid #e1cc01",
                  }}
                >
                  <div>Rareza</div>
                  <div>
                    <button>^</button>
                  </div>
                </div>
                <ul>
                  <li className="flex-wrapper">
                    <input type="checkbox" name="comun" id="list-comun" />{" "}
                    <span>Común</span>
                  </li>
                  <li className="flex-wrapper">
                    <input type="checkbox" name="comun" id="list-comun" />{" "}
                    <span>Poco Común</span>
                  </li>
                  <li className="flex-wrapper">
                    <input type="checkbox" name="comun" id="list-comun" />{" "}
                    <span>Raro</span>
                  </li>
                  <li className="flex-wrapper">
                    <input type="checkbox" name="comun" id="list-comun" />{" "}
                    <span>Legendario</span>
                  </li>
                </ul>
                <div
                  className="flex-wrapper pt-1"
                  style={{
                    justifyContent: "space-between",
                    borderTop: "2px solid #e1cc01",
                  }}
                >
                  <div>Últimos publicados</div>
                  <div>
                    <button>^</button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="market-browse">
              <div className="p-1">
                <div>
                  <select
                    name="sort-content-inventory"
                    id="sort-content-inventory"
                  >
                    <option value="-">Ordenar por</option>
                    <option value="-">ordenar</option>
                  </select>
                </div>
                <div className="gusanos-list">
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
                        <img
                          src={gusanos.tokenimg}
                          alt=""
                          className="huevo-img"
                        />
                      </div>
                      <div className="NFT-view-info-price">
                        <div style={{ fontWeight: "800", fontSize: "20px" }}>
                          {gusanos.name}
                        </div>
                        <div>{gusanos.tokenvalue} WBNB</div>
                        <div style={{ fontSize: "11px" }}>
                          {gusanos.value} USD
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-wrapper mt-3" style={{ gridArea: "footer" }}>
              <div className="mx-auto">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div id="metamask-logo" className="d-none"></div>
        </div>
      </main>
    </>
  );
}

export default MarketplacePage;
