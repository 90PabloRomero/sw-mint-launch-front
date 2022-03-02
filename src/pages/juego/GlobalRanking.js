import {useNavigate} from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png"
import iconCheck from "./../../assets/img/iconcheck.png"
import {useState} from "react";
export const GlobalRankingPage = () => {
  const [isIconCheck, setIconCheck] = useState(false);
  const history = useNavigate();


  const [isCheckInterfaz, setCheckInterfaz] = useState(false);
  const [isCheckVibracion, setCheckVibracion] = useState(false);
  const [isCheckMusica, setCheckMusica] = useState(false);
  const [isCheckSFX, setCheckSFX] = useState(false);
  const [isCheckSonido,setCheckSonido] = useState(false);



  const goBack = () => {
    history(-1);
  };
  return (
    <>

      <main className="market">
        <header style={{position: "absolute", top: "3vh", zIndex: "2"}}>
          <div className={"flex-wrapper"}>
          <button style={{
            border: "none",
            background: "#af2322",
            color: "white",
            minWidth: "148px",
          borderTop: "3px solid #ffed00",
          borderBottom: "3px solid #ffed00",
          borderRight: "3px solid #ffed00",
          borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          cursor: "pointer"}} onClick={() => goBack()}>
          <img src={leftArrow} alt={"Regresar"}/>
          </button>
          <div style={{
            marginLeft: "8px", height:"67px", fontSize: "35px", display: "grid", placeContent: "center"
          }}>Global Ranking</div>
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: "0" }}>
          <div style={{background: "#171a1c93", minWidth: "100vw", height: "500px", borderTop: "3px solid #ffed00", borderBottom: "3px solid #ffed00"}}>

          <div className=" grid  p-1" style={{ maxWidth: "950px",  textAlign: "center", margin: "auto", fontSize: "25px", marginTop: "2rem" }}>

            <div className={"flex-wrapper my-1"} style={{flexDirection: "column", gap: "20px"}}>

              <div className={"ranking-column"}>
                <div>1</div>
                <div className={"flex-wrapper"}>
                  <div>ar</div>
                  <div>Tony Portugal</div>
                </div>
                <div>worms</div>
                <div>15,548,522</div>
                <div>balan</div>
              </div>
            {/*  */}
              <div className={"ranking-column"}>
                <div>2</div>
                <div className={"flex-wrapper"}>
                  <div>ch</div>
                  <div>Martin Hidalgo</div>
                </div>
                <div>worms</div>
                <div>14,582,569</div>
                <div>balan</div>
              </div>
              {/*  */}
              <div className={"ranking-column"}>
                <div>3</div>
                <div className={"flex-wrapper"}>
                  <div>br</div>
                  <div>Tom Cruise</div>
                </div>
                <div>worms</div>
                <div>13,548,895</div>
                <div>balan</div>
              </div>
            {/*  */}
              <div className={"ranking-column"}>
                <div>4</div>
                <div className={"flex-wrapper"}>
                  <div>in</div>
                  <div>Alicia Maravilla</div>
                </div>
                <div>worms</div>
                <div>10,869,125</div>
                <div>balan</div>
              </div>
              {/*  */}
              <div className={"ranking-column"}>
                <div>5</div>
                <div className={"flex-wrapper"}>
                  <div>ar</div>
                  <div>Botigusano</div>
                </div>
                <div>worms</div>
                <div>9,258,266</div>
                <div>balan</div>
              </div>
              {/*  */}
              <div className={"ranking-column"}>
                <div>6</div>
                <div className={"flex-wrapper"}>
                  <div>ar</div>
                  <div>Piton</div>
                </div>
                <div>worms</div>
                <div>7,258,565</div>
                <div>balan</div>
              </div>

            </div>
          </div>
        </div>
<div className={"absolute-bottom"} style={{bottom: "30px"}}>
  <div className={"flex-wrapper"} style={{justifyContent: "center", gap: "2rem"}}>
  <div>
    Global
  </div>
  <div>Local</div></div>
</div>
        </div>
      </main>
    </>
  );
}