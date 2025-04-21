import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>

      <Synonym synonyms={props.meaning.synonyms} />
    </div>
  );
}
