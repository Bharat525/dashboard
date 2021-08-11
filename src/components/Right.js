import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faWaveSquare } from "@fortawesome/free-solid-svg-icons";

const Right = () => {
  return (
    <div className="right-mainDiv">
      <div className="btn">
        <button className="buy">Buy</button>
        <button className="buy">Token</button>
      </div>

      <button className="regBtn">
        <div className="icon-reg">
          <FontAwesomeIcon size="lg" color="#4DB2AF" icon={faUserTie} />
        </div>

        <a href="#">Register as professional</a>
      </button>

      <button className="regBtn">
        <div className="icon-reg">
          <FontAwesomeIcon size="lg" color="#4DB2AF" icon={faWaveSquare} />
        </div>

        <a href="#">Accredited investor</a>
      </button>

      <div className="investment">
        <h2>Total Investment</h2>
        <p> 0 BLKT</p>

        <div className="btn-view">
          <a href="#">View all</a>
        </div>
      </div>

      <div className="investment">
        <h2>Total Reservation</h2>
        <p> 0 BLKT</p>

        <div className="btn-view">
          <a href="#"> + Reserve</a>
        </div>
      </div>

      <div className="Token-div">
        <h2>Tokens</h2>

        <div className = "main-circle">

        <div className="circle-parent">
          <div className="circle-child"></div>
        </div>
        </div>

        <div className="utility">
          <div className="circle-smMain">
            <div className="sm-circle"></div>
            <p>Utility Token</p>
          </div>

          <p className="num">0</p>
        </div>

        <div className="utility utility2">
          <div className="circle-smMain">
            <div className="yellow  sm-circle"></div>
            <p>Utility Token</p>
          </div>

          <p className="num">0</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
