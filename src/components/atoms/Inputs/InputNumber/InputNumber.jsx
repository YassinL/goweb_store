import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./InputNumber.scss";

export default function InputNumber({ id, label, defaultOption }) {
  return (
    <div className="inputNumber">
      <h3 className="inputNumber_label" htmlFor={id}>
        {label}
      </h3>
      <div className="inputNumber_value" type="select" id={id}>
        <span>{defaultOption}</span>
        <div className="inputNumber_value_arrows">
          <div type="button">
            <FontAwesomeIcon icon={faCaretUp} />
          </div>
          <div className="inputNumber_value_line" />
          <div type="button">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};
