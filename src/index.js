import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import lineCheck from "./line-check.js";
import textToLine from "../src/text-to-lines.js";
import lineToWords from "../src/line-to-words.js";
import onlyChars from "../src/only-chars.js";
import syllableCount from "../src/syllable-count.js";
import syllableCountLine from "../src/syllable-count-line.js";

// User Interface Logic
$(document).ready(function () {
  $("#submitQuery").click(function () {
    event.preventDefault();
    clearFields();
    // Store what the user entered
    const textEntered = $("#userEntered").val();
    // Separate text into individual lines.
    const textSeparated = textToLine(textEntered);
    //
    //
    // Results Summary Table:
    $("#linesSummary").text(`${lineCheck(textEntered)}`);
    if (lineCheck(textEntered) === 3) {
      $("#linesSummary").css("background-color", "#94b49f");
    } else {
      $("#linesSummary").css("background-color", "#DF7861");
    }
    $("#lineOneSyllables").text(
      syllableCountLine(lineToWords(textSeparated[0]))
    );
    if (syllableCountLine(lineToWords(textSeparated[0])) === 5) {
      $("#lineOneSyllables").css("background-color", "#94b49f");
    } else {
      $("#lineOneSyllables").css("background-color", "#DF7861");
    }
    $("#lineTwoSyllables").text(
      syllableCountLine(lineToWords(textSeparated[1]))
    );
    if (syllableCountLine(lineToWords(textSeparated[1])) === 7) {
      $("#lineTwoSyllables").css("background-color", "#94b49f");
    } else {
      $("#lineTwoSyllables").css("background-color", "#DF7861");
    }
    $("#lineThreeSyllables").text(
      syllableCountLine(lineToWords(textSeparated[2]))
    );
    if (syllableCountLine(lineToWords(textSeparated[2])) === 5) {
      $("#lineThreeSyllables").css("background-color", "#94b49f");
    } else {
      $("#lineThreeSyllables").css("background-color", "#DF7861");
    }
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
            <td>${syllableCount(
              onlyChars(lineToWords(textSeparated[k])[i])
            )}</td>
          </tr>`);
      }
    }
  });

  function clearFields() {
    $("#submitQuery").val("");
    $("#lineOne").empty();
  }
});
