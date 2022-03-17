import logo from '../../assets/img/logo.png';
function Logo(props) {
  return (
    <>
      <img src={logo} className={props.className} alt={props.alt} style={props.style} />
    </>
  );
}
export default Logo;
