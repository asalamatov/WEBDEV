// $(function(){
//     $("button").click(function(){
//         $("img").animate({
//             height:"+=100px",
//             width: "+=100px"
//         }, 1000);
//     })
// })

// $(function(){
//     $("button").click(function(){
//         $("img").slideToggle(1000, function(){
//             alert("animation complete")
//         })
//     })
// })

$(function(){
    $("button").click(function(){
        $("img").css("width", "200px")
        .slideUp(2000)
        .slideDown(2000);
    });
})