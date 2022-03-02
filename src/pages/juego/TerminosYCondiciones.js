export const TerminosYCondicionesPage = () => {
  return (
    <>

      <main className="market">
        <div className="hero grid place-center" style={{ paddingBottom: "0" }}>
          <div className=" grid  p-1" style={{ maxWidth: "800px", textAlign: "center" }}>
            <h1 className=" text-center" style={{fontSize: "55px", lineHeight: "55px"}}>Terminos de servicio y
              Políticas de privacidad</h1>
            <p style={{margin: "2rem 0"}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure
            </p>
            <div style={{textAlign: "center"}}>

            <a href="/demo/game.html" className="disable-styles">
              <button
                className="game-btn mx-1"
                style={{
                  minHeight: "70px",
                  minWidth: "150px",
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                ACEPTAR
              </button>
            </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}