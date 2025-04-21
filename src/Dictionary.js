import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetics] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
    setPhonetics(response.data.phonetic);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "c20161a98fff44a06b23236e2obd0t3b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    //console.log(event);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">e.g. cat, flower, moon</div>
      </section>
      <Result result={results} phonetic={phonetic} />
    </div>
  );
}
