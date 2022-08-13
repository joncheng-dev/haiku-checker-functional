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
    clearFields();
    // Store what the user entered
    const textEntered = $("#userEntered").val();

    // Separate text into individual lines.
    const textSeparated = textToLine(textEntered);
    // First line -- words separated
    const wordsInLineOne = lineToWords(textSeparated[0]);
    // First line -- Total syllables
    console.log(`COUNT LINE SYLLABLES`);
    console.log(`Line: ${lineToWords(textSeparated[0])}`);
    // Individual words' syllables.
    let lineSyllableCount = 0;
    for (let i = 0; i < lineToWords(textSeparated[0]).length; i++) {
      console.log(
        `Syllables: ${syllableCount(
          onlyChars(lineToWords(textSeparated[0])[i])
        )}`
      );
      lineSyllableCount =
        lineSyllableCount +
        syllableCount(onlyChars(lineToWords(textSeparated[0])[i]));
    }
    console.log(`Syllables for this line: ${lineSyllableCount}`);

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
    //
    //
    //
    //
    //
    console.log(`textSeparated: ${textSeparated}`);
    console.log(`textSeparated.length: ${textSeparated.length}`);
    console.log(
      `lineToWords(textSeparated[0]): ${lineToWords(textSeparated[0])}`
    );
    console.log(`textSeparated[0]: ${textSeparated[0]}`);
    console.log(`textSeparated[0].length: ${textSeparated[0].length}`);
    // Display lines of text individually:
    for (let k = 0; k < textSeparated.length; k++) {
      // Display first line of text.
      // Display first word in line with syllables.
      $("#lineOne").append(`
        <tr>
          <td>${k + 1}</td>
          <td>${JSON.stringify(textSeparated[k])}</td>
          <td>Line Syllables</td>
          <td>${lineToWords(textSeparated[k])[0]}</td>
          <td>${syllableCount(lineToWords(textSeparated[k])[0])}</td>
        </tr>`);
      // Display all other words in first line with syllables.
      for (let i = 1; i < lineToWords(textSeparated[k]).length; i++) {
        $("#lineOne").append(`
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>${lineToWords(textSeparated[k])[i]}</td>
            <td>${syllableCount(lineToWords(textSeparated[k])[i])}</td>
          </tr>`);
      }
    }
    // Separate each line into words.
    $(".intoWords").append(`Lines into words: `);
    for (let i = 0; i < textSeparated.length; i++) {
      $(".intoWords").append(JSON.stringify(lineToWords(textSeparated[i])));
    }
  });

  function clearFields() {
    $("#submitQuery").val("");
    $("#lineOne").empty();
  }
});
