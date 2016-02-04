$(function(){
  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
  function search(name) {
    var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
    // requires "jsonp" datatype.
  }

    $('#search').on('submit', function(){
      var planetSearch = $('#search-name').val();

      console.log(api + planetSearch);
      $.ajax({
        method: "GET",
        url: api,
        dataType: 'jsonp',
        data: {
          name: planetSearch
        }
      })

      .done(function(data){
        console.log(data);

        $('#preview').html("<img class='result' src='" + data["image"]["src"] + "'/>");

      });
      return false;
    })





});
