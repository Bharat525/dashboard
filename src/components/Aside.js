import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faDolly,
  faShoppingBag,
  faQuestionCircle,
  faQuestion,
  faIdCard,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="ul-parent">
        <ul>
          <li>
            <div className="parent">
              <div className="icon">
                <FontAwesomeIcon color="white" icon={faColumns} />
              </div>

              <h2>
                {" "}
                <a href="#">Dashboard</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
              <div className="icon">
                <FontAwesomeIcon icon={faDolly} />
              </div>

              <h2>
                {" "}
                <a href="#">Pre-reserve</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
            <div className="icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <h2>
                {" "}
                <a href="#">Invest</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
            <div className="icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <h2>
                {" "}
                <a href="#">Buy Tocken</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
            <div className="icon">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>
              <h2>
                {" "}
                <a href="#">FAQ</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
            <div className="icon">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <h2>
                {" "}
                <a href="#">Support</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="parent">
            <div className="icon">
                <FontAwesomeIcon icon={faIdCard} />
              </div>
              <h2>
                {" "}
                <a href="#">KYC</a>{" "}
              </h2>
            </div>
          </li>

          <li>
            <div className="button parent">

            <div className="icon">
                <FontAwesomeIcon icon={faSignOutAlt} color="red" />
              </div>

              <h2>
                {" "}
                <a className ="logout" href="#">Logout</a>{" "}
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
