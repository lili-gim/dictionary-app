import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>

      <Synonym synonyms={props.meaning.synonyms} />
    </div>
  );
}
