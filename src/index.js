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
    // Color Hex Values:
    const greenHexCode = "#94b49f";
    const redHexCode = "#DF7861";
    // Store what the user entered
    const textEntered = $("#userEntered").val();
    // Separate text into individual lines.
    const textSeparated = textToLine(textEntered);
    // Number of Lines in text
    const numberLines = lineCheck(textEntered);

    // Results Summary Table:
    $("#linesSummary").text(`${numberLines}`);
    updateBackgroundColor("#linesSummary", numberLines === 3);

    updateSyllableRow(
      "#lineOneSyllables",
      syllableCountLine(lineToWords(textSeparated[0])),
      5
    );
    updateSyllableRow(
      "#lineTwoSyllables",
      syllableCountLine(lineToWords(textSeparated[1])),
      7
    );
    updateSyllableRow(
      "#lineThreeSyllables",
      syllableCountLine(lineToWords(textSeparated[2])),
      5
    );

    function updateSyllableRow(idTag, numberSyllablesItIs, numberItShouldBe) {
      $(idTag).text(numberSyllablesItIs);
      console.log(
        `${idTag} has ${numberSyllablesItIs}, but should have ${numberItShouldBe}`
      );
      updateBackgroundColor(idTag, numberSyllablesItIs === numberItShouldBe);
    }

    function updateBackgroundColor(idTag, ifMatches) {
      const colorCode = ifMatches ? greenHexCode : redHexCode;
      console.log(
        `Background color ACTIVE for ${idTag}. Color is ${colorCode}`
      );
      $(idTag).css("background-color", colorCode);
    }
    //
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
