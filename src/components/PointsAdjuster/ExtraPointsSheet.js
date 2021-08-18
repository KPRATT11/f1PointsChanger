import { useState, useEffect } from "react";
import CardStyle from "../../styles/Card.style";
import Input from "../../styles/Input.style";

const ExtraPointsSheet = (props) => {
  const [extraPoints, setExtraPoints] = useState(props.extraPoints);

  useEffect(() => {
    setExtraPoints(props.extraPoints);
  }, [props]);

  const inputStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <div>
      <CardStyle
        style={{
          width: "150%",
          marginLeft: "-50px",
          marginTop: "50px",
        }}
      >
        <div style={{ display: "flex" }}>
          <p>FastestLap</p>
          <Input
            style={inputStyle}
            type="number"
            value={extraPoints.fastestLap}
            onChange={(e) => {
              let newExtraPoints = {
                ...extraPoints,
              };
              newExtraPoints.fastestLap = e.target.value;
              console.log(newExtraPoints);
              props.updateExtraPoints(newExtraPoints);
              setExtraPoints(newExtraPoints);
            }}
          ></Input>
        </div>
        <div style={{ display: "flex" }}>
          <p>Pole Position</p>
          <Input
            style={inputStyle}
            type="number"
            value={extraPoints.qualyPoints}
            onChange={(e) => {
              let newExtraPoints = {
                ...extraPoints,
              };
              newExtraPoints.qualyPoints = e.target.value;
              props.updateExtraPoints(newExtraPoints);
              setExtraPoints(newExtraPoints);
            }}
          ></Input>
        </div>
        <div style={{ display: "flex" }}>
          <p>DNF</p>
          <Input
            style={inputStyle}
            type="number"
            value={extraPoints.dnf}
            onChange={(e) => {
              let newExtraPoints = {
                ...extraPoints,
              };
              newExtraPoints.dnf = e.target.value;
              props.updateExtraPoints(newExtraPoints);
              setExtraPoints(newExtraPoints);
            }}
          ></Input>
        </div>
      </CardStyle>
    </div>
  );
};

export default ExtraPointsSheet;
