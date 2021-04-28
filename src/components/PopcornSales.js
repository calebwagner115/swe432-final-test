import React, { useState, useCallback, useEffect, useRef } from "react";
/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import getPlace from "../core/popcorn";

function PopcornSales(props) {
  const {
    zipURL="https://swe432tomcat.herokuapp.com/zipLookup",
    library = "fetch",
  } = props;

  let [output, setOutput] = useState('');

  const doSeparator = () => {
    const val1 = document.getElementById('box1').value;
    const val2 = document.getElementById('box2').value;
    const val3 = document.getElementById('box3').value;
    const ans = val1 || val2 || val3 ? val1 + ',' + val2 + ',' + val3: '';
    setOutput(ans);
  };

  const doReverse = () => {
    const val1 = document.getElementById('box1').value;
    const val2 = document.getElementById('box2').value;
    const val3 = document.getElementById('box3').value;
    const ans = val1.split("").reverse().join("") 
    + val2.split("").reverse().join("")
    + val3.split("").reverse().join("");
    setOutput(ans);
  };

  const focusedElementRef = useRef();
  useEffect(() => {
    // focusedElementRef.current.focus(); // commented in codesandbox for "obvious" reasons
  }, []);

  const test = 'HELP';

  return (
    <div className="columns">
      <h2>Welcome to Caleb Wagner's SWE 432 Practice Tech Challenge</h2>

      <div>
        <input id="box1" type="text"></input>
        <br/>
      </div>

      <div>
        <input id="box2" type="text"></input>
        <br/>
      </div>

      <div>
        <input id="box3" type="text"></input>
        <br/>
      </div>

      <button onClick={doSeparator}>Separator</button>
      <button onClick={doReverse}>Reverse</button>
    <div>
      <h2>Output:</h2>
      <p>{output}</p>
    </div>
    </div>
  );
} 

export default PopcornSales;
