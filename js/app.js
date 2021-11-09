// ajaxRequest
function ajaxRequest() {
  const keyword = $(".search-input").val();
  $.ajax({
    type: "get",
    url: `http://www.omdbapi.com/`,
    data: {
      apikey: "8789a299",
      s: `${keyword}`
    },
    dataType: "json",
    success: function (response) {
      const movies = response.Search;
      printCards(movies);
    },
    error: (response) => {
      alert(response.statusText);
    }
  });
}

// PrintCards
function printCards(data) {
  let cards = "";
  data.forEach((e) => {
    cards += createCards(e);
  });
  $(".search-input").val("");
  $("#movies .container .row").html(cards);
}

// createCards
function createCards(data) {
  return /*html*/ `
  <div class="col-md-3">
    <div class="card mb-3">
      <img src="${data.Poster}" class="card-img-top" alt="${data.Title}" />
      <div class="card-body">
        <h5 class="card-title">${data.Title}</h5>
        <p class="card-text">${data.Year}</p>
        <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#detail" data-imdbid="${data.imdbID}">Show Detail</a>
      </div>
    </div>
  </div>`;
}

// createModal
function createModal(data) {
  return /*html*/ `
  <div class="col-md-3">
    <img class="img-fluid" src="${data.Poster}" alt="${data.Title}" />
  </div>
  <div class="col">
    <ul class="list-groupl">
      <li class="list-group-item"><h4>${data.Title} (${data.Year})</h4></li>
      <li class="list-group-item"><strong>Released :</strong> ${data.Released}</li>
      <li class="list-group-item"><strong>Genre :</strong> ${data.Genre}</li>
      <li class="list-group-item"><strong>Director :</strong> ${data.Director}</li>
      <li class="list-group-item"><strong>Writer :</strong> ${data.Writer}</li>
      <li class="list-group-item"><strong>Actors :</strong> ${data.Actors}</li>
      <li class="list-group-item"><strong>Plot :</strong> ${data.Plot}</li>
    </ul>
  </div>`;
}

export { ajaxRequest, createModal };
