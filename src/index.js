import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import lineCheck from "./line-check.js";
import textToLine from "../src/text-to-lines.js";
import lineToWords from "../src/line-to-words.js";

// User Interface Logic
$(document).ready(function () {
  // Add here
  $("#submitQuery").click(function () {
    event.preventDefault();
    const textEntered = $("#userEntered").val();
    const results = $(".results").text(
      `Number of lines in text entered: ${lineCheck(textEntered)}.\n
      Text separated into lines: ${JSON.stringify(textToLine(textEntered))}`
    );
    results.html(results.html().replace(/\n/g, "<br/>"));
  });
});
