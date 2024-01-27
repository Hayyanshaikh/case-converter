import React, { useState } from "react";
import Button from "../utils/Button.js";
import Textarea from "../utils/Textarea.js";
import Heading from "../utils/Heading.js";
import { textData } from "../api/api.js";
import * as Icons from "@tabler/icons-react";
const Main = () => {
  const [active, setActive] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [headingText, setHeadingText] = useState("Sentence case");
  const [text, setText] = useState("");
  const [convertText, setConvertText] = useState("");
  const [converCase, setConverCase] = useState("");
  const buttonTextHandle = (event, active) => {
    setHeadingText(event);
    setConverCase(event);
    setDisabled(false);
    setActive(active);
  };

  // convert case change variable
  var convertedCase = converCase.toLowerCase();
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const changeHandle = () => {
    switch (convertedCase) {
      case "sentence case":
        var sectenceCase =
          text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setConvertText(sectenceCase);
        break;
      case "lower case":
        setConvertText(text.toLowerCase());
        break;
      case "upper case":
        setConvertText(text.toUpperCase());
        break;
      case "capitalized case":
        var capValue = text.split(" ");
        var modifiedCapValue = capValue.map(function (word, index) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        setConvertText(modifiedCapValue.join(" "));
        break;
      case "alternating case":
        var capValue = text.split(" ");
        var modifiedCapValue = capValue.map(function (word, index) {
          var alternatingWord = "";
          for (var i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
              alternatingWord += word[i].toLowerCase();
            } else {
              alternatingWord += word[i].toUpperCase();
            }
          }
          return alternatingWord;
        });
        var convertedText = modifiedCapValue.join(" ");

        setConvertText(convertedText);
        break;
      case "lnverse case":
        var capValue = text.split(" ");
        var modifiedCapValue = capValue.map(function (word, index) {
          var alternatingWord = "";
          for (var i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
              alternatingWord += word[i].toUpperCase();
            } else {
              alternatingWord += word[i].toLowerCase();
            }
          }
          return alternatingWord;
        });
        var convertedText = modifiedCapValue.join(" ");

        setConvertText(convertedText);
        break;
      default:
        console.log("not found");
        break;
    }
  };
  const copyHandle = () => {
    function copyTextToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    }
    copyTextToClipboard(convertText)
  };
  const clearHandle = () => {
  	setConvertText('');
  	setText('');
  }
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero_heading">
            Unleash the Potential of Text | Harness the Power of Case Conversion
          </h1>
        </div>
      </section>
      <header className="header">
        <div className="container">
          <div className="header_main">
            {textData.map(function (button, key) {
              return (
                <Button
                  onClick={() => buttonTextHandle(button.text, key)}
                  key={button.id}
                  text={button.text}
                  className={`${active === key ? "active" : ""}`}
                />
              );
            })}
          </div>
        </div>
      </header>
      <section className="text_body">
        <div className="container">
          <div className="text_body_main">
            <Heading text={`Convert To ${headingText}`} />
            <Textarea value={text} onChange={handleTextChange} disabled={disabled} />
            <button
              className="convert_btn"
              disabled={disabled}
              onClick={changeHandle}
            >
              <Icons.IconArrowsExchange />
            </button>
            <Textarea
              value={convertText}
              onChange={handleTextChange}
              read={true}
            />
            <div className="text_result">
              {/*<Button text="Download Text" className="convert_btn" />*/}
              <Button
                text="Copy text"
                className="convert_btn"
                onClick={copyHandle}
              />
              <Button text="Clear" className="convert_btn" 
                onClick={clearHandle}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
