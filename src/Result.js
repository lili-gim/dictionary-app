import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result(props) {
  //console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result.word}</h2>

          <Phonetics phonetic={props.phonetic} />
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
