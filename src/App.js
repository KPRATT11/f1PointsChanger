import { useEffect, useState } from "react";
import TempApiCaller from "./components/tempApiCaller";
import PointsAdjuster from "./components/PointsAdjuster";
import DriverDisplayer from "./components/DriverDisplayer";
import { scoringData } from "./dataTemplates/template";
import { totalPoints } from "./helpers/totalPoints";
import { getDefaultData } from "./helpers/getDefaultData";
import { createApiReqUrl, formatRawApiData } from "./apiScripts";

//Styling
import Container from "./styles/Container.style";
import Button from "./styles/Button.style";

const App = () => {
  const [driverData, setDriverData] = useState([]);
  const [pointsSystem, setPointsSystem] = useState(scoringData);
  const [raceDetails, setRaceDetails] = useState("None");
  const [season, setSeason] = useState(2020);
  const [totalRaces, setTotalRaces] = useState(0);
  const [apiLoading, setApiLoading] = useState(true);

  useEffect(() => {
    const newPointsSystem = getDefaultData(season);
    updateScoringData(newPointsSystem);
    callApi();
  }, []);

  useEffect(() => {
    const totalRaces = raceDetails.length;
    setTotalRaces(totalRaces);
  }, [raceDetails]);

  function tempUpdateNewPoints() {
    const newPointsSystem = getDefaultData(season);
    updateScoringData(newPointsSystem);
  }

  function updateScoringData(newPoints) {
    setPointsSystem(newPoints);
  }

  function getNewDrivers(drivers) {
    setRaceDetails(drivers.races);
    const newDriverData = Object.values(drivers.drivers);
    setDriverData(newDriverData);
  }

  function updateDropScoresEnabled(bool) {
    let newPointsSystem = { ...pointsSystem };
    newPointsSystem.extraRules.dropScores = bool;
    setPointsSystem(newPointsSystem);
  }

  function checkDropScoresValidity() {
    const dropScoresData = pointsSystem.extraRules.dropScoresData;
    let totalUserRaces = 0;
    for (let index = 0; index < dropScoresData.length; index++) {
      const element = dropScoresData[index];
      totalUserRaces += element[1];
    }
    console.log(totalUserRaces);
    if (totalUserRaces === 0) {
      return true;
    }
    if (totalUserRaces !== totalRaces) {
      return false;
    }
    return true;
  }

  function handlePointsCalculation() {
    if (checkDropScoresValidity()) {
      let newDriverData = totalPoints(pointsSystem, driverData, raceDetails);
      setDriverData(newDriverData);
    } else {
      console.log("Not Working");
    }
  }

  function handleSeasonChange(season) {
    let newSeason = parseInt(season);
    setSeason(newSeason);
  }

  async function callApi() {
    setApiLoading(true);
    const response = await fetch(createApiReqUrl(season));
    const data = await response.json();
    let formattedData = formatRawApiData(data);
    getNewDrivers(formattedData);
    setApiLoading(false);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Container
        className="PointsAdjusterSheet"
        style={{
          width: "777px",
          height: "800px",
        }}
      >
        <div
          className="yearSelector"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-70px",
            position: "inherit",
            height: "10%",
          }}
        >
          <Button
            style={{
              marginLeft: "-25%",
              marginTop: "18px",
            }}
            onClick={() => tempUpdateNewPoints()}
          >
            Set Points To Year
          </Button>
          <TempApiCaller
            handleSeasonChange={handleSeasonChange}
            updateDrivers={getNewDrivers}
            callApi={callApi}
          />
        </div>
        <div
          className="pointsSheet"
          style={{
            height: "80%",
          }}
        >
          <PointsAdjuster
            isLoading={apiLoading}
            updateDropPointsShowing={updateDropScoresEnabled}
            raceAmount={totalRaces}
            driverAmount={driverData.length}
            scoringData={pointsSystem}
            updateScoringData={updateScoringData}
          />
          <Button
            type="positive"
            style={{
              position: "relative",
              width: "27%",
              height: "10%",
              padding: "10px",
              marginTop: "5%",
              marginLeft: "58%",
            }}
            onClick={() => handlePointsCalculation()}
          >
            Calculate Points
          </Button>
        </div>
      </Container>
      <Container
        style={{
          width: "636px",
        }}
      >
        <DriverDisplayer isLoading={apiLoading} drivers={driverData} />
      </Container>
    </div>
  );
};

export default App;
