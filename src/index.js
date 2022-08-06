import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { lineCheck } from "./haiku.js";

// User Interface Logic
$(document).ready(function () {
  // Add here
  $("#submitQuery").click(function () {
    event.preventDefault();
    const textEntered = $("#userEntered").val();
    $(".results").text(
      `Number of lines in text entered: ${lineCheck(textEntered)}`
    );
  });
});
