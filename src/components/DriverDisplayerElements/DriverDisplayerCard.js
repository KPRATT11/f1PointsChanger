import CardStyle from "../../styles/Card.style";

const DiverDisplayCard = (props) => {
  return (
    <CardStyle
      style={{
        width: "120%",
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>{props.name}</h3>
        <h4>{props.points}</h4>
      </div>
      <p>{props.nationality}</p>
    </CardStyle>
  );
};

export default DiverDisplayCard;
