import Logo from "components/atoms/Logo";

export const GameHomePage = () => {
  return (
    <>
      <div className="absolute-inset">
        <div
          className="flex-wrapper"
          style={{ justifyContent: "space-between" }}
        >
          <div>30%</div>
          <div>872</div>
        </div>
      </div>
      <div className="grid place-center">AAA</div>
      <div className="absolute-bottom">
        <div
          className="flex-wrapper"
          style={{ justifyContent: "space-between" }}
        >
          <div>30%</div>
          <div>872</div>
        </div>
      </div>
      <div id="metamask-logo" className="d-none"></div>
    </>
  );
};
