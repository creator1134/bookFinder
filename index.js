function bookSearch() {
  // store user input
  var search = $('#search').val();
  // clear any previous data
  $('#results').empty();

  // make a data request
  $.ajax({
    // url for database - API for google books - the source of all the informaion /////
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search,
    dataType: 'json',
    type: 'GET'
  }).then(function(data) {
    // display data being passed through
    console.log(data);
    var resultToDisplay = [];
    // loop through data in data.items
    for (var i = 0; i < data.items.length; i++) {
      // store current books volume info
      var res = data.items[i].volumeInfo;
      console.log(res);

      resultToDisplay = [
        '<div class="container">',
        '<div class="row">',
        '<div class="col-lg-4">',
        '<img src="' + res.imageLinks.thumbnail + '">',
        '</div> ',
        '<div class="col-lg-8">',
        '<h2>' + res.title + '(' + res.publishedDate + ')' + '</h2>',
        '<h4>' + res.authors + '</h4>',
        '<a class="btn btn-primary" href="' + res.infoLink + '" target="_blank">Learn More</a>',
        '</div>',
        '</div>',
        ' </div>',
        ' </div>'
      ];
      $('#results').append(resultToDisplay);
    }
  });
}

$('#searchBtn').on('click', bookSearch);
