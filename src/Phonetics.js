import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    return <div className="Phonetics">{props.phonetic}</div>;
  } else {
    return null;
  }
}
