import { ajaxRequest, createModal } from "./app.js";

$(document).ready(function () {
  $(".search-button").on("click", function () {
    ajaxRequest();
  });

  $(".search-input").on("keyup", function (e) {
    if (e.key === "Enter" && e.keyCode === 13) {
      ajaxRequest();
    }
  });

  // add modal box
  $("#movies").on("click", ".detail-button", function (e) {
    const imdbid = $(this).data("imdbid");
    $.ajax({
      type: "get",
      url: `http://www.omdbapi.com/`,
      data: {
        apikey: "8789a299",
        i: `${imdbid}`
      },
      dataType: "json",
      success: function (response) {
        $(".modal-detail").html(createModal(response));
      }
    });
  });
});
