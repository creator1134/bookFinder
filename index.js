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
    var resultToDisplay = [];
    // loop through data in data.items
    for (var i = 0; i < data.items.length; i++) {
      // store current books volume info
      var res = data.items[i].volumeInfo;

      resultToDisplay = [
        '<div class="row">',
        '<div class="card" style="width: 18rem;margin:1rem;">',
        '<img class="card-img-top" style="width:5rem;height:8rem" src="' + res.imageLinks.thumbnail + '" alt="Card image cap">',
        '<div class="card-body">',
        '<h5 class="card-title">' + res.title + '(' + res.publishedDate + ')' + '</h5>',
        '<p class="card-text">' + res.authors + '</p>',
        '<a href="' + res.infoLink + '" target="_blank" class="btn btn-primary">Learn More</a>',
        '</div>',
        '</div>',
        '</div>'
      ];

      $('#results').append(resultToDisplay);
    }
  });
}

$('#searchBtn').on('click', bookSearch);
