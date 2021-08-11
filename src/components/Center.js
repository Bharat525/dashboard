import Assets from "./Images/assets.jpg";
import Chart from "./chart";


const Center = () => {
  return (
    <div className="center">
      <div className="dashBoard"></div>

      <h2>Dashboard</h2>

      <Chart/>

      <div className="assests-div">
        <h1>Assets Available</h1>

        <div className="galary">
          <div className="img-parent">
            <img src={Assets} alt="" />
            <p>$30000</p>
          </div>

          <div className="img-parent">
            <img src={Assets} alt="" />
            <p>$30000</p>
          </div>

          <div className="img-parent">
            <img src={Assets} alt="" />
            <p>$30000</p>
          </div>

          <div className="img-parent">
            <img src={Assets} alt="" />
            <p>$30000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
