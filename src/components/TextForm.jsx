import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [val, setval] = useState("");
  const [spi, setSpi] = useState(0);

  const copied = () => {
    const text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alertMsg("Text Copied", "success");
  };
  const changed = (event) => {
    const input = event.target.value;
    setval(input);
    if (input === "") {
      setSpi(0);
    } else {
      setSpi(val.split(" ").length);
    }
  };

  const Upper = () => {
    if (typeof val === "string") {
      const Fval = val.toUpperCase();
      setval(Fval);
      props.alertMsg("Changed to UpperCase", "success");
    } else {
      props.alertMsg("Enter Valid Text", "danger");
    }
  };
  const Lower = () => {
    if (typeof val === "string") {
      const Fval = val.toLowerCase();
      setval(Fval);
      props.alertMsg("Changed to LowerCase", "success");
    } else {
      props.alertMsg("Enter Valid Text", "danger");
    }
  };
  const Trim = () => {
    let newText = val.split(/[ ]+/);
    setval(newText.join(" "));
    props.alertMsg("Text is Trimed", "success");
  };
  const Clear = () => {
    const yesNo = window.confirm("Do you want to clear EveryThing ???");
    if (yesNo === true) {
      setval("");
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="main">
          <div className="mb-1">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={changed}
              value={val}
              placeholder="Enter or Paste the Text..."
              style={{ border: `2px solid black` }}
            ></textarea>
            <button
              type="button"
              className="btn btn-primary mx-3 my-3"
              onClick={Upper}
            >
              UpperCase
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-3 my-3"
              onClick={Lower}
            >
              LowerCase
            </button>
            <button
              type="button"
              className="btn btn-success mx-3 my-3"
              onClick={Trim}
            >
              Trim
            </button>
            <button
              type="button"
              className="btn btn-danger mx-3 my-3"
              onClick={Clear}
            >
              Clear
            </button>

            <button
              id="copy"
              type="button"
              className="btn btn-warning mx-3 my-3"
              onClick={copied}
            >
              Copy Text
            </button>
          </div>
          <div className="container my-1">
            <h1>Your Text Summary is :</h1>
            <p>No. of Words : {spi}</p>
            <p>No. of Characters : {val.length}</p>
            <p>{0.008 * val.split(" ").length} minutes need to read this</p>
            <h2>Preview : </h2>
            <p>{val === "" ? "See your Preview Here..." : val}</p>
          </div>
        </div>
      </div>
    </>
  );
}
