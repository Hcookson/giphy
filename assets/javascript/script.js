
$(document).ready(function(){




var topics= ["the-office", "parks-and-recreation", "the-handmaid's-tale", "the-peaky-blinders",]

$(".js-btn").on("click", function() {
  var show = $(this).attr("data-show");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ show + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;
        

        for (var i = 0; i < results.length; i++) {
          var imageDiv = $("<div>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var gif = $("<img>");
          
          gif.attr("src", results[i].images.fixed_height.url);
          gif.addClass("animate");
          imageDiv.append(p);
          imageDiv.append(gif);
          $("#images").prepend(imageDiv);
        }
        
      
      
      });
      
      
  });
  $(".animate").on ("click", function() {
    var state =$(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src",$(this).attr("data-animate"));
      $(this).attr("data-state", "animate");

    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
      
    }
  });
  
  

});
