import {useNavigate} from "react-router-dom";
import leftArrow from "./../../assets/img/leftarrow.png"
import iconCheck from "./../../assets/img/iconcheck.png"
import {useState} from "react";
export const OptionsPage = () => {
  //const [isIconCheck, setIconCheck] = useState(false);
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
          }}>Opciones</div>
          </div>
        </header>
        <div className="hero grid place-center" style={{ paddingBottom: "0" }}>
          <div style={{background: "#171a1c93", minWidth: "100vw", height: "500px", borderTop: "3px solid #ffed00", borderBottom: "3px solid #ffed00"}}>

          <div className=" grid  p-1" style={{ maxWidth: "750px",  textAlign: "center", margin: "auto", fontSize: "25px", marginTop: "2rem" }}>

            <div className={"flex-wrapper justify-between my-1"} style={{flexWrap: "wrap", gap: "20px"}}>
              {/**/}
              <div className={"flex-wrapper"} style={{border: "3px solid #ffed00", minWidth: "350px", padding: ".51rem", borderRadius: "16px"}}>
                <button onClick={()=>setCheckInterfaz(!isCheckInterfaz)} style={{background: "#af2322", border: "3px solid #ffed00", borderRadius: "12px", height: "72px", width: "72px"}}>{isCheckInterfaz ? (<img src={iconCheck} alt="..." />) : " "}</button>
                <div style={{margin: ".71rem 0 1rem 15px"}}>Interfaz</div>
              </div>
              {/**/}
              <div className={"flex-wrapper"} style={{border: "3px solid #ffed00", minWidth: "350px", padding: ".51rem", borderRadius: "16px"}}>
                <button onClick={()=>setCheckVibracion(!isCheckVibracion)} style={{background: "#af2322", border: "3px solid #ffed00", borderRadius: "12px", height: "72px", width: "72px"}}>{isCheckVibracion ? (<img src={iconCheck} alt="..." />) : " "}</button>
                <div style={{margin: ".71rem 0 1rem 15px"}}>Vibración</div>
              </div>
              {/**/}
              <div className={"flex-wrapper"} style={{border: "3px solid #ffed00", minWidth: "350px", padding: ".51rem", borderRadius: "16px"}}>
                <button onClick={()=>setCheckMusica(!isCheckMusica)} style={{background: "#af2322", border: "3px solid #ffed00", borderRadius: "12px", height: "72px", width: "72px"}}>{isCheckMusica ? (<img src={iconCheck} alt="..." />) : " "}</button>
                <div style={{margin: ".71rem 0 1rem 15px"}}>Música</div>
              </div>
            {/*  */}
              {/**/}
              <div className={"flex-wrapper"} style={{border: "3px solid #ffed00", minWidth: "350px", padding: ".51rem", borderRadius: "16px"}}>
                <button onClick={()=>setCheckSFX(!isCheckSFX)} style={{background: "#af2322", border: "3px solid #ffed00", borderRadius: "12px", height: "72px", width: "72px"}}>{isCheckSFX ? (<img src={iconCheck} alt="..." />) : " "}</button>
                <div style={{margin: ".71rem 0 1rem 15px"}}>SFX</div>
              </div>
              {/*  */}
              {/**/}
              <div className={"flex-wrapper"} style={{border: "3px solid #ffed00", minWidth: "350px", padding: ".51rem", borderRadius: "16px"}}>
                <button onClick={()=>setCheckSonido(!isCheckSonido)} style={{background: "#af2322", border: "3px solid #ffed00", borderRadius: "12px", height: "72px", width: "72px"}}>{isCheckSonido ? (<img src={iconCheck} alt="..." />) : " "}</button>
                <div style={{margin: ".71rem 0 1rem 15px"}}>Sonido de movimiento</div>
              </div>
              {/*  */}
            </div>

          </div>
        </div>
        </div>
      </main>
    </>
  );
}