import { useEffect, useState } from "react";
import { positionSuffix } from "../../helpers/positionPrefix";
import Input from "./../../styles/Input.style";
import {H2} from "./../../styles/Typography.style"

const PointsAdjusterEl = (props) => {
  const [inputValue, setInputValue] = useState(props.displayPoints);
  const [labelValue, setLabelValue] = useState("NLV");

  useEffect(() => {
    if (props.displayPoints === undefined) {
      setInputValue("0");
    } else {
      setInputValue(props.displayPoints);
    }
  }, [props.displayPoints]);

  useEffect(() => {
    if (props.position === true) {
      setLabelValue(props.label + positionSuffix(props.label));
    } else {
      setLabelValue(props.label);
    }
  }, [props.position, props.label]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitChange = () => {
    if (inputValue === "") {
      setInputValue(0);
      props.updatePoints(props.id, 0);
    } else {
      props.updatePoints(props.id, parseInt(inputValue));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <H2
        style={{
        }}
        weight="bold"
      >{labelValue}</H2>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => submitChange()}
        style={{
          marginBottom: "10px",
          width: "60px",
          height: "60px",
        }}
      ></Input>
    </div>
  );
};

export default PointsAdjusterEl;
