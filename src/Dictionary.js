import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetics] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
    setPhonetics(response.data.phonetic);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "c20161a98fff44a06b23236e2obd0t3b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    //console.log(event);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">e.g. word, flower, moon</div>
        </section>
        <Result result={results} phonetic={phonetic} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
