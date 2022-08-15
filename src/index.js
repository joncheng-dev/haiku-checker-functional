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
    //
    //
    // Store text user entered
    const textEntered = $("#userEntered").val();
    // Separate text into individual lines -- in an array.
    const textSeparated = textToLine(textEntered);
    // Counts number of Lines in user-entered text.
    const numberLines = countLinesInText(textEntered);
    // Separate text into individual lines in different elements (array[0, 1, 2]).
    const lineOneText = textSeparated[0];
    const lineTwoText = textSeparated[1];
    const lineThreeText = textSeparated[2];
    // Separate each individual line -- array element -- into words.
    const lineOneWords = lineToWords(lineOneText);
    const lineTwoWords = lineToWords(lineTwoText);
    const lineThreeWords = lineToWords(lineThreeText);
    // Remove punctuation and numbers from individual words (stored in array).
    const lineOneWordsAlpha = lineOneWords.map((word) => onlyChars(word));
    const lineTwoWordsAlpha = lineTwoWords.map((word) => onlyChars(word));
    const lineThreeWordsAlpha = lineThreeWords.map((word) => onlyChars(word));
    // Syllable count individual words
    const lineOneWordsSyllables = lineOneWordsAlpha.map((word) => syllableCount(word));
    const lineTwoWordsSyllables = lineTwoWordsAlpha.map((word) => syllableCount(word));
    const lineThreeWordsSyllables = lineThreeWordsAlpha.map((word) => syllableCount(word));
    // Total Syllables per Line
    const lineOneTotalSyllables = syllableCountLine(lineOneWordsAlpha);
    const lineTwoTotalSyllables = syllableCountLine(lineTwoWordsAlpha);
    const lineThreeTotalSyllables = syllableCountLine(lineThreeWordsAlpha);
    //
    //
    // Results Summary Table:
    $("#linesSummary").text(`${numberLines}`);
    updateBackgroundColor("#linesSummary", numberLines === 3);

    updateSyllableRow("#lineOneSyllables", lineOneTotalSyllables, 5);
    updateSyllableRow("#lineTwoSyllables", lineTwoTotalSyllables, 7);
    updateSyllableRow("#lineThreeSyllables", lineThreeTotalSyllables, 5);

    // Results Detailed Table:
    updateDetailsTable("#resultsItemized", 1, lineOneText, lineOneTotalSyllables, lineOneWordsAlpha, lineOneWordsSyllables);
    updateDetailsTable("#resultsItemized", 2, lineTwoText, lineTwoTotalSyllables, lineTwoWordsAlpha, lineTwoWordsSyllables);
    updateDetailsTable("#resultsItemized", 3, lineThreeText, lineThreeTotalSyllables, lineThreeWordsAlpha, lineThreeWordsSyllables);

    // // Results Itemized Table;
    // for (let k = 0; k < textSeparated.length; k++) {
    //   // Display first line of text.
    //   // Display first word in line with syllables.
    //   $("#resultsItemized").append(`
    //   <tr>
    //     <td>${k + 1}</td>
    //     <td>${textSeparated[k]}</td>
    //     <td>${syllableCountLine(lineToWords(textSeparated[k]))}</td>
    //     <td>${onlyChars(lineToWords(textSeparated[k])[0])}</td>
    //     <td>${syllableCount(onlyChars(lineToWords(textSeparated[k])[0]))}</td>
    //   </tr>`);
    //   // Display all other words in first line with syllables.
    //   for (let i = 1; i < lineToWords(textSeparated[k]).length; i++) {
    //     $("#resultsItemized").append(`
    //     <tr>
    //       <td></td>
    //       <td></td>
    //       <td></td>
    //       <td>${onlyChars(lineToWords(textSeparated[k])[i])}</td>
    //       <td>${syllableCount(onlyChars(lineToWords(textSeparated[k])[i]))}</td>
    //     </tr>`);
    //   }
    // }
  });

  function clearFields() {
    $("#submitQuery").val("");
    $("#linesSummary").empty();
    $("#lineOneSyllables").empty();
    $("#lineTwoSyllables").empty();
    $("#lineThreeSyllables").empty();
    $("#resultsItemized").empty();
  }

  function updateSyllableRow(idTag, numberSyllablesItIs, numberItShouldBe) {
    $(idTag).text(numberSyllablesItIs);
    updateBackgroundColor(idTag, numberSyllablesItIs === numberItShouldBe);
  }

  function updateBackgroundColor(idTag, ifMatches) {
    const colorCode = ifMatches ? greenHexCode : redHexCode;
    $(idTag).css("background-color", colorCode);
  }

  function updateDetailsRow(idTag, lineNumber, textOfLine, lineTotalSyllables, individualWords, individualWordsSyllables) {
    $(idTag).append(`
    <tr>
      <td>${lineNumber}</td>
      <td>${textOfLine}</td>
      <td>${lineTotalSyllables}</td>
      <td>${individualWords}</td>
      <td>${individualWordsSyllables}</td>
    </tr>`);
  }

  function updateDetailsTable(idTag, lineNumber, textOfLine, lineTotalSyllables, individualWords, individualWordsSyllables) {
    updateDetailsRow(idTag, lineNumber, textOfLine, lineTotalSyllables, individualWords[0], individualWordsSyllables[0]);
    for (let i = 1; i < individualWords.length; i++) {
      updateDetailsRow(idTag, "", "", "", individualWords[i], individualWordsSyllables[i]);
    }
  }
});
