import "./NotchedBtn.css";
import PropTypes from "prop-types";
function ConnectWalletBTN({ onClick , fontSize }) {
  return (
    <a className="notchedButtonL1">
      <div className="notchedButtonL2">
        <div className="notchedButtonL3">
          <div
            className="notchedButtonL4"
            onClick={onClick}
            style={{
              backgroundColor: "rgba(255, 211, 99, 1)",
              fontSize: fontSize,
              color: "rgba(30, 30, 30, 1)",
            }}
          >
            Connect Wallet
          </div>
        </div>
      </div>
    </a>
  );
}



ConnectWalletBTN.propTypes = {
  onClick: PropTypes.func.isRequired,
  fontSize: PropTypes.func.isRequired,
};

export default ConnectWalletBTN;
