import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "😂": "Oversed haha emoji",
  "😢": "Used when someone screws up",
  "😒": "Used when you don't have a proper comeback",
  "😏": "That creepy face emoji",
  "😎": "Cool emoji, used by not so cool people",
  "😀": ' "Time to end our conversation" emoji',
  "😃": '"Time to end our conversation" emoji with big eyes',
  "😄": '"Thanks for your suggestion but imma ignore it anyways" emoji',
  "😁": '"Yes I\'m weird" emoji',
  "🤣": "Tilted haha emoji",
  "🙂": '"I\'ve already killed you 10 times in my head" emoji',
  "😉": "Who the hell still sends this emoji??",
  "🥰": '"Yes you\'re friendzoned " emoji',
  "🥴":
    "You haven't used this emoji in your entire life so don't bother knowing about it "
};
export default function App() {
  var emojiList = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("Translation will appear here ");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else if (userInput === "") {
      meaning = "Transalation will appear here";
      setMeaning(meaning);
    } else {
      meaning = "No data available";
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    var definition = emojiDictionary[emoji];
    setMeaning(definition);
  }
  return (
    <div className="App">
      <h1>EmojiBase</h1>
      <input
        onChange={emojiHandler}
        placeholder="Press Windows key + period to open emoji panel"
      ></input>
      <div style={{ fontSize: "2rem" }}>{meaning}</div>
      <h3> Emojis We Know </h3>

      {emojiList.map(function (emoji) {
        return (
          <button
            className="btn"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "3rem",
              padding: "0.5rem",
              cursor: "pointer",
              textShadow: "4px 4px 4px  #8a795d",
              background: "transparent",

              borderRadius: "5px"
            }}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}
