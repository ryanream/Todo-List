// strikethough li to mark as completed (completed class)
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click trash icon (span) to delete
$("ul").on("click", "span", function(event){
    // on click, fade out the li (parent of this span). this = span (trash icon)
   $(this).parent().fadeOut(500, function(){
       // this = li (parent of span)
       $(this).remove();
   });
   // stop click from bubbling up through parent elements
   event.stopPropagation();
});

// listen to text unput for "Enter" (key 13)
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // save entered text as todoText
        var todoText = $(this).val();
        // empty the text input
        $(this).val("");
        // create a new li with entered text, append to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

// listen to the edit icon and toggle the text field 
$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
});