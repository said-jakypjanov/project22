$(document).ready(function () {

    $(".item").on("click", function () {
        let elemId = $(this).attr("id");
        console.log(elemId);
        $("body").css("background-color", elemId);
        $("h1").text("цвет страницы " + elemId);
    });

    $("#img").on("click", function () {
        $("body").css(
            {
            "background" : "url(bg-image.jpg)",
            "background-size" : "cover",
            "background-repeat" : "no-repeat"
        }
        );
    })

    let randomColor = Math.random() * 255;
    let randomNumber = Math.round(randomColor);
    console.log(randomNumber);

})
