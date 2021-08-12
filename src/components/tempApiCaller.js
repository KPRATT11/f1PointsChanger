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
        marginTop: "17px",
      }}
    >
      <Input
        color="grey"
        style={{
          width: "200px",
        }}
        type="number"
        value={input}
        onChange={(e) => handleChange(e)}
      ></Input>
      <Button
        style={{
          marginLeft: "40px",
        }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
};

export default TempApiCaller;
