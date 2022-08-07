import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import lineCheck from "./line-check.js";
import textToLine from "../src/text-to-lines.js";
import lineToWords from "../src/line-to-words.js";
import onlyChars from "../src/only-chars.js";
import syllableCount from "../src/syllable-count.js";

// User Interface Logic
$(document).ready(function () {
  // Add here
  $("#submitQuery").click(function () {
    event.preventDefault();
    const textEntered = $("#userEntered").val();
    const textSeparated = textToLine(textEntered);
    $(".numberLines").text(
      `Number of lines in text entered: ${lineCheck(textEntered)}.`
    );
    $(".intoLines").text(
      `Text separated into lines: ${JSON.stringify(textSeparated)}`
    );
    $(".intoWords").append(`Lines into words: `);
    for (let i = 0; i < textSeparated.length; i++) {
      $(".intoWords").append(JSON.stringify(lineToWords(textSeparated[i])));
    }
  });
});
