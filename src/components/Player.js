
function Player(props){
  return (
    <article className="Player">
      <h1>{props.firstName} <span>{props.gamerTag}</span> {props.lastName}</h1>

      {/* Show if no wins */}
      {props.wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {/* Show if one win */}
      {props.wins === 1 && <h2>Currently at 1 win</h2>}
      {/* Show if 1+ wins */}
      {props.wins > 1 && <h2>Currently at {props.wins} wins</h2>}

    </article>
  );
}

export default Player;