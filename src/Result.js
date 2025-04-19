import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  //console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>

        <Phonetics phonetic={props.phonetic} />

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
