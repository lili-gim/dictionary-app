import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photo from "./Photo";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetics] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data);
    setResults(response.data);
    setPhonetics(response.data.phonetic);
  }

  function handleImgResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "c20161a98fff44a06b23236e2obd0t3b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let imgApiKey = `c20161a98fff44a06b23236e2obd0t3b`;
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}&per_page=6`;

    axios.get(imgApiUrl).then(handleImgResponse);
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
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Search for a word..."
            />
          </form>
          <div className="hint">e.g. word, flower, moon</div>
        </section>
        <Result result={results} phonetic={phonetic} />
        <Photo photo={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
