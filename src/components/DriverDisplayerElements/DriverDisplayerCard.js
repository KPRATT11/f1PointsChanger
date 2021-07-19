const DiverDisplayCard = (props) => {
    return ( 
        <div style={{"backgroundColor" : "gray"}}>
            <div style={{"display" : "flex"}}>
                <h3>{props.name}</h3>
                <h4>{props.points}</h4>
            </div>
            <p>{props.nationality}</p>
        </div>
     );
}
 
export default DiverDisplayCard;