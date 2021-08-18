import { useEffect, useState } from "react";
import DropPointsEl from "./DropPointsEl";
import CardStyle from "../../styles/Card.style";

const DropPointDisplayer = (props) => {
  const [dropPoints, setDropPoints] = useState([[19, 20]]);
  const [dropPointsEl, setDropPointsEl] = useState();
  const [amountOfRaces, setAmountOfRaces] = useState(props.totalRaces); //Change to props.totalRaces
  const [totalUserRaces, setTotalUserRaces] = useState(props.totalRaces); //Change to props.totalRaces
  const [dropPointsAdjusted, setDropPointsAdjusted] = useState(false);

  useEffect(() => {
    setAmountOfRaces(props.totalRaces);
    if (dropPointsAdjusted === false) {
      setDropPoints(props.defualtDropPoints);
      if (dropPoints !== undefined) {
        if (dropPoints[0][0] === 0 && dropPoints[0][1] === 0) {
          console.log("yes");
          setDropPoints([[props.totalRaces - 1, props.totalRaces]]);
          updateDropPointsElements();
        }
      }
    }
  }, [props]);

  const increaseDropsPoints = () => {
    let newState = [...dropPoints];
    newState.push([0, 0]);
    newState = divideDropPoints(newState);
    setDropPoints(newState);
    setTotalUserRaces(amountOfRaces);
    setDropPointsAdjusted(true);
  };

  const decreseDropsPoints = () => {
    if (dropPoints.length > 1) {
      let newState = [...dropPoints];
      newState.pop();
      newState = divideDropPoints(newState);
      setDropPoints(newState);
      setTotalUserRaces(amountOfRaces);
      setDropPointsAdjusted(true);
    }
  };

  const divideDropPoints = (oldState) => {
    const leftOver = amountOfRaces % oldState.length;
    const dividedRaces = Math.floor(amountOfRaces / oldState.length);
    let newState = [...oldState];
    newState = newState.map((e) => {
      return [dividedRaces - 1, dividedRaces];
    });
    newState[0] = [dividedRaces + leftOver - 1, dividedRaces + leftOver];
    return newState;
  };

  const updateDropPoints = (childDropPoints, index) => {
    let newState = dropPoints;
    newState[index] = childDropPoints;
    updateTotalUserRaces(newState);
    setDropPoints(newState);
    props.updateDropPoints(dropPoints, totalUserRaces);
    setDropPointsAdjusted(true);
  };

  useEffect(() => {
    updateDropPointsElements();
  }, [dropPoints]);

  useEffect(() => {
    if (props.dropPointsEnabled) {
      props.updateDropPoints(dropPoints, totalUserRaces);
    } else {
      props.updateDropPoints([[0, 0]], props.totalRaces);
    }
  }, [props.dropPointsEnabled]);

  const updateDropPointsElements = () => {
    if (dropPoints === undefined) {
      setDropPointsEl("Loading");
      return;
    }
    let newDropPointsEls = dropPoints.map((el, index) => {
      return (
        <DropPointsEl
          id={index}
          dropPoints={dropPoints[index]}
          updateDropPointsParent={updateDropPoints}
        />
      );
    });
    setDropPointsEl(newDropPointsEls);
  };

  const updateTotalUserRaces = (newDropTable) => {
    let total = 0;
    for (let index = 0; index < newDropTable.length; index++) {
      const element = newDropTable[index];
      total += element[1];
    }
    setTotalUserRaces(total);
  };

  if (props.dropPointsEnabled) {
    return (
      <div>
        <CardStyle
          style={{
            width: "150%",
            marginLeft: "-50px",
            marginTop: "50px",
          }}
        >
          <button onClick={() => increaseDropsPoints()}>+</button>
          {dropPointsEl}
          <button onClick={() => decreseDropsPoints()}>-</button>
          <p>{totalUserRaces}</p>
        </CardStyle>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "150%",
          marginLeft: "-50px",
          marginTop: "50px",
        }}
      >
        No drop points
      </div>
    );
  }
};

export default DropPointDisplayer;
