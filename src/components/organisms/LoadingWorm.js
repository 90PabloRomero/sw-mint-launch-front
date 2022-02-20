import "assets/css/templates/components/loadingworm.scss";
const LoadingWorm = ({ className }) => {
  return (
    <div className={`worm-container ${className}`}>
      <div className="worm">
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="purple-dot">&nbsp;</span>
        <span className="head">&nbsp;</span>
      </div>
    </div>
  );
};

export default LoadingWorm;
