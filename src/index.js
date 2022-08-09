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
  $("#submitQuery").click(function () {
    event.preventDefault();
    // Store what the user entered
    const textEntered = $("#userEntered").val();
    // Separate text into individual lines.
    const textSeparated = textToLine(textEntered);
    console.log(`textSeparated: ${textSeparated}`);
    // First line -- words separated
    const wordsInLineOne = lineToWords(textSeparated[0]);
    console.log(`wordsInLineOne: ${wordsInLineOne}`);
    // First line -- prints words individually
    for (let i = 0; i < wordsInLineOne.length; i++) {
      console.log(wordsInLineOne[i]);
    }
    // First line -- word with no punctuation
    console.log(`Characters only, stripped of punctuation: `);
    for (let i = 0; i < wordsInLineOne.length; i++) {
      console.log(onlyChars(wordsInLineOne[i]));
    }
    // First line -- syllables of individual words
    for (let i = 0; i < wordsInLineOne.length; i++) {
      console.log(syllableCount(onlyChars(wordsInLineOne[i])));
    }
    // First line -- total syllables

    // Second line -- words separated
    const wordsInLineTwo = lineToWords(textSeparated[1]);
    console.log(`wordsInLineTwo: ${wordsInLineTwo}`);
    // Second line -- print words individually
    for (let i = 0; i < wordsInLineTwo.length; i++) {
      console.log(wordsInLineTwo[i]);
    }
    // Number of lines entered.
    $(".numberLines").text(
      `Number of lines in text entered: ${lineCheck(textEntered)}.`
    );
    // Display lines of text individually.
    $("#lineOne").append(`
    <tr>
      <td>1</td>
      <td>${JSON.stringify(textSeparated[0])}</td>
      <td>1st Line Syllables</td>
      <td>1stWord</td>
      <td>1stSyllables</td>
      `);
    for (let i = 0; i < textSeparated.length; i++) {
      $("#lineOne").append(`
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>2ndWords</td>
        <td>2ndSyllables</td>
      </tr>`);
    }
    $("#lineOne").append(`</tr>`);
    // Separate each line into words.
    $(".intoWords").append(`Lines into words: `);
    for (let i = 0; i < textSeparated.length; i++) {
      $(".intoWords").append(JSON.stringify(lineToWords(textSeparated[i])));
    }
  });
});
