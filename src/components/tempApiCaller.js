import { useEffect, useState } from "react";
import Input from "./../styles/Input.style";
import Button from "./../styles/Button.style";

const TempApiCaller = (props) => {
  const [input, setInput] = useState(2020);

  function handleChange(event) {
    setInput(event.target.value);
    props.handleSeasonChange(event.target.value);
  }

  function handleSubmit() {
    props.callApi();
  }

  return (
    <div
      style={{
        marginTop: "2%",
        height: "50%",
        width: "80%",
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <Input
        textSize="large"
        color="blue"
        style={{
          marginTop: "-1%",
          height: "140%",
          width: "50%",
        }}
        type="number"
        value={input}
        onChange={(e) => handleChange(e)}
      ></Input>
      <Button
        style={{
          marginLeft: "-30%",
          position: "relative"
        }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
};

export default TempApiCaller;
