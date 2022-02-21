import { useEffect, useState } from "react";
import "assets/css/templates/components/modal.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SocialMedia from "components/molecules/SocialMedia";
import LoadingWorm from "components/organisms/LoadingWorm";
import alien from "assets/img/alien.png";
import soldierWorm from "assets/img/gusano-guerrero.png";
import { getCurrentWalletConnected } from "../util/interact.js";
import api from "../util/api.js";
import { BusdAbiService } from "util/services/busd.js";
import huevoIMG from "./../assets/img/huevo-gusano.png";
import ReactMomentCountDown from "react-moment-countdown";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/organisms/marketplace/Header";
import { mainNetAbiService } from "util/services/mainnet.js";

toast.configure();

const Web3 = require("web3");

const mainnetAbi = mainNetAbiService;

function CompraEggPage() {
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
  const isBusdNotApproved = Number(allowance) < Number(price) * 1000e17;
  // const isBusdNotApproved = true;
  // we inform the user about mm status on model info
  const [MMStatusInfo, setMMStatusInfo] = useState("Esperando a Metamask");

  // contract address
  // const mainnetContract = "0x4f54DBCF6852cc5386f72210B3587B1975637386";
  const mainnetContract = "0x7d80E1A99f0cab1fB1A0f2790F42e5b59A3F020f";

  const account1 = walletAddress;
  let tokenId;

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    // setStatus(status);
    addWalletListener();
  }, []);

  useEffect(() => {
    if (walletAddress) {
      calculateMintedEggs();
    }
  }, [walletAddress]);

  // useEffect(() => {
  //   imgURI(wholeMintedNfts + 1);
  // }, [wholeMintedNfts]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setModalOpen(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    (async () => {
      const rpcURL = "https://bsc-dataseed.binance.org/";
      const web3 = new Web3(rpcURL);
      if (account1 && web3.eth.Contract) {
        const BUSDContractAddress =
          "0xe9e7cea3dedca5984780bafc599bd69add087d56";
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

  function calculateMintedEggs() {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);
    window.contract = new web3.eth.Contract(mainnetAbi, mainnetContract);
    window.contract.methods.tokenId().call((err, result) => {
      setWholeMintedNfts(parseInt(result));
    });
    window.contract.methods.balanceOf(walletAddress).call((err, result) => {
      console.log(parseInt(result));
      setCurrentMintedNfts(parseInt(result));
    });
  }

  function getCountOfNFTs() {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);
    window.contract = new web3.eth.Contract(mainnetAbi, mainnetContract);
    window.contract.methods.tokenId().call((err, result) => {
      setWholeMintedNfts(parseInt(result));
    });
    window.contract.methods.balanceOf(walletAddress).call((err, result) => {
      console.log(parseInt(result));
    });
  }

  //mintNFT
  const mint_NFT = async (values) => {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);

    const BUSDContractAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    // testnet
    // const BUSDContractAddress = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";

    const BUSDABI = BusdAbiService;

    const BUSDContract = await new web3.eth.Contract(
      BUSDABI,
      BUSDContractAddress
    );

    // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);

    // const busdBalance = await BUSDContract.methods.balanceOf(account1).call();

    // set loading modal while order process is on
    setCurrentModal("loading-screen");
    setModalOpen(true);
    setLoading(true);
    const mainnetContractInterface = await new web3.eth.Contract(
      mainnetAbi,
      mainnetContract
    );

    const transactionParameters = {
      to: mainnetContract,
      from: account1,
      data: mainnetContractInterface.methods
        .safeMint(web3.utils.toHex(price * 1000e17))
        .encodeABI(),
    };
    setMMStatusInfo("Esperando a Metamask");

    if (values.length > 0) {
      try {
        for (var i = 1; i <= values; i++) {
          // const txHash = await window.ethereum.request({
          //   method: "eth_sendTransaction",
          //   params: [transactionParameters],
          // });
          const transfer = () => {
            return window.ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
          };
          transfer()
            .then((tx) => {
              setLoading(true);
              console.log("transaction done, ", tx);
              const intervalHandler = setInterval(async () => {
                const nftBalance = await mainnetContractInterface.methods
                  .balanceOf(account1)
                  .call();
                if (nftBalance > currentMintedNfts) {
                  calculateMintedEggs();
                  api
                    .post("/registerNFT", {
                      params: { address: account1, id: currentMintedNfts + 1 },
                    })
                    .then(function (response) {})
                    .catch(function (error) {
                      console.log("stories error response :: ", error);
                    });
                  toast.success(
                    `Ha comprado con exito ${
                      currentMintedNfts + 1
                    } NFTs. Bienvenido a la aventura`,
                    {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                  setCurrentModal("buy-egg");
                  setModalOpen(false);
                  setLoading(false);
                  clearInterval(intervalHandler);
                }
              }, 2000);
            })
            .catch(() => {
              setLoading(false);
              setModalOpen(false);
              toast.warn("Error en la compra. Error en la red", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
      } catch (error) {
        alert("here");
        setModalOpen(false);
        setLoading(false);
        toast.warn("Error en la compra. Error en la red", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  async function registerNFT(address, id) {
    await api
      .post("/registerNFT", { params: { address: address, id: id } })
      .then(function (response) {
        return response.data.Success;
      })
      .catch(function (error) {
        console.log("stories error response :: ", error);
      });
  }

  // handler to open ShowBuyEgg
  const handleBuyEgg = () => {
    console.log("set buy egg");
    setCurrentModal("buy-egg");
    setModalOpen(true);
  };

  // form component
  const BuyEggForm = ({ onMintNFT }) => {
    const [proStatus, setProStatus] = useState(0);
    const {
      handleSubmit,
      register,
      watch,
      formState: { errors },
    } = useForm({
      defaultValues: {
        nftquantity: "1",
      },
    });
    const onSubmit = (values) => {
      if (currentMintedNfts >= 10) {
        toast.warn("mint count error", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // alert('Minted Count');
        return;
      }
      if (Number(allowance) < Number(price) * 1000e17) {
        toast.warn("Error en la compra. Insuficiente credito", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      console.log(values.nftquantity);
      // console.log(formState);
      onMintNFT(values.nftquantity);
    };
    // const onInputChange = (event) => {
    //   console.log(event.target.value);
    //   setInputValue(event.target.value);
    // };
    // const inputValue = watch(["nftquantity", "number"]);
    const handleChange = (event) => {
      // document.getElementById("totalPrice").innerHTML =
      //   eggPrice * event.target.value + " BUSD";
      if (Number(event.target.value) < 1) setPrice(Number(event.target.value));
    };

    // handler when click Approve
    const approveBUSDHandler = async () => {
      try {
        setModalOpen(true);
        setCurrentModal("loading-screen");
        const rpcURL = "https://bsc-dataseed.binance.org/";
        const web3 = new Web3(rpcURL);
        // important, this busd address is probably wrong
        const BUSDContractAddress =
          "0xe9e7cea3dedca5984780bafc599bd69add087d56";
        const BUSDABI = BusdAbiService;

        const BUSDContract = await new web3.eth.Contract(
          BUSDABI,
          BUSDContractAddress
        );

        // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);

        const transactionParameters = {
          to: BUSDContractAddress,
          from: account1,
        };
        const busdBalance = await BUSDContract.methods
          .balanceOf(account1)
          .call();

        if (Number(busdBalance) < price * 1000e17) {
          setModalOpen(false);
          setLoading(false);
          return toast.warn(
            "La aprobacion no se pudo realizar. Insuficiente credito",
            {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
        const allowance = await BUSDContract.methods
          .allowance(account1, mainnetContract)
          .call();

        if (Number(allowance) < price * 1000e17) {
          setLoading("true");
          transactionParameters.data = await BUSDContract.methods
            .approve(mainnetContract, web3.utils.toHex(5000e17))
            .encodeABI();
          const txHash = await window.ethereum
            .request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            })
            .catch(() => {
              setLoading(false);
              setModalOpen(false);
            });
          const intervalHandler = setInterval(async () => {
            const allowance = await BUSDContract.methods
              .allowance(account1, mainnetContract)
              .call();
            if (Number(allowance) >= price * 1000e17) {
              setAllowance(Number(allowance));
              toast.success(
                "Aprobacion realizada con exito. Ya puede comprar nfts",
                {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );
              setModalOpen(false);
              setLoading(false);
              clearInterval(intervalHandler);
            }
          }, 2000);
          console.log("end");
        } else {
          console.log("here");
        }
      } catch (err) {
        setModalOpen(false);
        setLoading(false);
        toast.warn("La aprobracion no se pudo realizar. Error en la red", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    return (
      <>
        <form className="buy-egg-form mt-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="buy-egg-form-label flex-wrapper">
            <div>Costo de huevo</div>
            <div>{eggPrice} BUSD</div>
          </div>
          <div className="buy-egg-form-quantity flex-wrapper">
            <div>Cantidad</div>
            <div>
              <input
                type="text"
                className="number-input "
                min="1"
                max="1"
                disabled={true}
                value={price}
                {...register("nftquantity")}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="buy-egg-form-label flex-wrapper">
            <div>Precio total</div>
            <div id="totalPrice">100 BUSD</div>
          </div>
          <div className="buy-egg-form-terms">
            * máximo de compra por wallet (2)
          </div>
          <div className="buy-egg-form-actions flex-wrapper mt-1">
            <button
              className="button create-acc-button"
              disabled={isBusdNotApproved || loading}
              onClick={() => {
                // console.log(currentMintedNfts);
                if (currentMintedNfts >= 2) {
                  setProStatus(1);
                }
              }}
            >
              {loading ? (
                <img
                  src="/ZZ5H.gif"
                  style={{ width: "20px", display: loading ? "" : "none" }}
                />
              ) : (
                "Comprar"
              )}
            </button>
          </div>
        </form>

        <div className="absolute mintegg-cancel-button">
          <button
            className="button cancel create-acc-button"
            onClick={() => setModalOpen(false)}
          >
            cancelar
          </button>
          <button
            className="button create-acc-button create-acc-button d-flex"
            onClick={approveBUSDHandler}
            disabled={!isBusdNotApproved || loading}
          >
            {loading ? (
              <img
                src="/ZZ5H.gif"
                style={{ width: "17px", display: loading ? "" : "none" }}
                alt=" "
              />
            ) : (
              "aprobar busd"
            )}
          </button>
        </div>
      </>
    );
  };

  // the Modal
  const ShowBuyEgg = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            {/* {/ {2}/}
            {/ form starts /} */}
            {currentModal === "buy-egg" ? (
              <>
                <div className="create-account-modal">
                  <h1>Compra</h1>
                  <p className="my-1">
                    Estas a punto de comprar un huevo en Space Worms
                  </p>
                  <BuyEggForm
                    onCancel={() => {
                      setModalOpen(false);
                    }}
                    onMintNFT={(values) => {
                      mint_NFT(values);
                    }}
                    currentMintedNfts={currentMintedNfts}
                  />
                </div>
              </>
            ) : currentModal === "loading-screen" ? (
              <>
                <div className="loading-screen-container">
                  <h1>{MMStatusInfo}</h1>
                  <div>
                    <LoadingWorm className="absolute" />
                  </div>
                </div>
              </>
            ) : currentModal === "init" ? (
              <>
                {() => {
                  setModalOpen(false);
                }}
                <div className="flex-wrapper">
                  <div>
                    <LoadingWorm className="absolute" />
                  </div>
                  <h1>Cargando...</h1>
                </div>
              </>
            ) : (
              <>
                {() => {
                  setModalOpen(false);
                }}
                <div className="absolute img-loading">
                  <img src={soldierWorm} alt="" />
                </div>
                <div className="flex-wrapper">
                  <img src={alien} alt="" />
                  <h1>Bienvenido a la aventura</h1>
                </div>
              </>
            )}
            {/* {/ {2}/} */}
          </div>
        </div>
      </>
    );
  };
  const dateInFuture = moment("2022-2-25");
  return (
    <>
      {modalOpen ? <ShowBuyEgg /> : ""}
      <main className="market">
        <div className="hero" style={{ paddingBottom: "0" }}>
          <Header />
          <div className="game-wrapper grid" style={{ maxWidth: "100%" }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 2rem, 4rem)" }}>
              Compra Egg
            </h1>
            <div className="mt-4">
              <div className="NFT-status-container">
                <div className="NFT-status-box">
                  <div>Cantidad Disponible</div>
                  <div>{1000 - wholeMintedNfts} / 1000</div>
                </div>
                <div className="NFT-status-box">
                  <div>Tiempo disponible</div>
                  <div>
                    {/* <ReactMomentCountDown
                      toDate={dateInFuture}
                      targetFormatMask={`DD`}
                    />
                    d&nbsp;
                    <ReactMomentCountDown
                      toDate={dateInFuture}
                      targetFormatMask={`HH`}
                    />
                    h&nbsp;
                    <ReactMomentCountDown
                      toDate={dateInFuture}
                      targetFormatMask={`mm`}
                    />
                    m&nbsp;
                    <ReactMomentCountDown
                      toDate={dateInFuture}
                      targetFormatMask={`s`}
                    />
                    s&nbsp; */}
                    Indefinido
                  </div>
                </div>
                <div className="NFT-status-box">
                  <div>Eggs minted</div>
                  {/* {
                  / on the first boolean, first string should display the current number of eggs bought, it will always be > 0 so... yeah. setting on first string a number just for visualizing the useState. /
                }
                {
                  / two booleans inserted probably first one wouldn't be needed once backend and MM actually works here /
                } */}
                  <div>{currentMintedNfts} </div>
                </div>
              </div>
              <div className="NFT-view-container">
                <div className="image-container">
                  <img src={huevoIMG} alt="" className="huevo-img" />

                  <div className="NFT-view-info-stats">
                    <div className="NFT-common">Común 50%</div>
                    <div className="NFT-uncommon">Poco común 35%</div>
                    <div className="NFT-rare">Raro 12%</div>
                    <div className="NFT-legendary">Legendario 3%</div>
                  </div>
                </div>
                <div className="NFT-view-info-price">
                  <div className="NFT-view-info-name">Minteo NFT</div>
                  <div>100 BUSD</div>
                </div>
                <div className="mt-1 text-center">
                  {currentMintedNfts >= 2 ? (
                    " "
                  ) : (
                    <button
                      onClick={handleBuyEgg}
                      className="button"
                      style={{ marginTop: "10px" }}
                    >
                      Comprar
                    </button>
                  )}
                </div>
                <div
                  className="NFT-status-box"
                  style={{
                    marginTop: "15px",
                    maxWidth: "715px",
                    background: "#00000064",
                  }}
                >
                  <div>
                    <strong>ATENCION:</strong> el 27 de Febrero será la apertura
                    de todos los huevos para que puedas descubrir su rareza!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-wrapper mt-3">
              <div className="mx-auto">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CompraEggPage;
