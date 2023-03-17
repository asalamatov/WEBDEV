// $(function(){
//     $(".btn-text").click(function(){
//         alert("Text is: " + $("h1").text());
//     });
// });

// $(function(){
//     $(".btn-text").click(function(){
//         $("h1").text("I am learning jQuery!");
//     });
// });

$(function(){
    $(".btn-text").click(function(){
        $("h1").text(function(i, origi){
            return origi + " with A-Z Tech";
        });
    });
});

// $(function(){
//     $(".btn-html").click(function(){
//         alert("HTML is: " + $("h1").html() );
//     });
// });

$(function(){
    $(".btn-html").click(function(){
        $("h1").html("<em>" + $("h1").text() + "</em>");
    });
});

// $(function(){
//     $(".btn-form").click(function(){
//         alert("form text is: " + $("input").val() );
//     });
// });

$(function(){
    $(".btn-form").click(function(){
        alert("form text is: " + $("input").val() );
    });
});

$(function(){
    $(".btn-link").click(function(){
        alert("link is: " + $("a").attr("href") );
    });
});



