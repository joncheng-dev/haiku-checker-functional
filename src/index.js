import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import countLinesInText from "./num-lines-in-text.js";
import textToLine from "../src/text-to-lines.js";
import lineToWords from "../src/line-to-words.js";
import onlyChars from "../src/only-chars.js";
import syllableCount from "../src/syllable-count.js";
import syllableCountLine from "../src/syllable-count-line.js";

// User Interface Logic
$(document).ready(function () {
  // Color Hex Values:
  const greenHexCode = "#94b49f";
  const redHexCode = "#DF7861";

  $("#submitQuery").click(function () {
    event.preventDefault();
    clearFields();
    // Store what the user entered
    const textEntered = $("#userEntered").val();
    // Separate text into individual lines (stored in array).
    const textSeparated = textToLine(textEntered);
    // Number of Lines in text
    const numberLines = countLinesInText(textEntered);
    // Separate individual lines into different elements (array[0, 1, 2]).
    const lineOneText = textSeparated[0];
    const lineTwoText = textSeparated[1];
    const lineThreeText = textSeparated[2];
    // Separate each array element into words.
    const lineOneWords = lineToWords(lineOneText);
    const lineTwoWords = lineToWords(lineTwoText);
    const lineThreeWords = lineToWords(lineThreeText);
    // Remove punctuation from individual words.
    const lineOneWordsAlpha = lineOneWords.map((word) => onlyChars(word));
    const lineTwoWordsAlpha = lineTwoWords.map((word) => onlyChars(word));
    const lineThreeWordsAlpha = lineThreeWords.map((word) => onlyChars(word));
    //
    // Results Summary Table:
    $("#linesSummary").text(`${numberLines}`);
    updateBackgroundColor("#linesSummary", numberLines === 3);

    updateSyllableRow("#lineOneSyllables", syllableCountLine(lineOneWordsAlpha), 5);
    updateSyllableRow("#lineTwoSyllables", syllableCountLine(lineTwoWordsAlpha), 7);
    updateSyllableRow("#lineThreeSyllables", syllableCountLine(lineThreeWordsAlpha), 5);

    // Results Detailed Table;
    for (let k = 0; k < textSeparated.length; k++) {
      // Display first line of text.
      // Display first word in line with syllables.
      $("#lineOne").append(`
      <tr>
        <td>${k + 1}</td>
        <td>${textSeparated[k]}</td>
        <td>${syllableCountLine(lineToWords(textSeparated[k]))}</td>
        <td>${onlyChars(lineToWords(textSeparated[k])[0])}</td>
        <td>${syllableCount(onlyChars(lineToWords(textSeparated[k])[0]))}</td>
      </tr>`);
      // Display all other words in first line with syllables.
      for (let i = 1; i < lineToWords(textSeparated[k]).length; i++) {
        $("#lineOne").append(`
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>${onlyChars(lineToWords(textSeparated[k])[i])}</td>
          <td>${syllableCount(onlyChars(lineToWords(textSeparated[k])[i]))}</td>
        </tr>`);
      }
    }

    // $(idTag).append(`
    // <tr>
    //   <td>${lineNumber}</td>
    //   <td>${textOfLine}</td>
    //   <td>${lineTotalSyllables}</td>
    //   <td>${individualWords}</td>
    //   <td>${individualWordsSyllables}</td>
    // </tr>`);
  });

  function clearFields() {
    $("#submitQuery").val("");
    $("#linesSummary").empty();
    $("#lineOneSyllables").empty();
    $("#lineTwoSyllables").empty();
    $("#lineThreeSyllables").empty();
    $("#lineOne").empty();
  }

  function updateSyllableRow(idTag, numberSyllablesItIs, numberItShouldBe) {
    $(idTag).text(numberSyllablesItIs);
    updateBackgroundColor(idTag, numberSyllablesItIs === numberItShouldBe);
  }

  function updateBackgroundColor(idTag, ifMatches) {
    const colorCode = ifMatches ? greenHexCode : redHexCode;
    $(idTag).css("background-color", colorCode);
  }
});
