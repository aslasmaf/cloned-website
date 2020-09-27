
$(document).ready(function () {
    $(".slide-2-s").click(function () {
        //$("#s1").css("display", "none");
        // $("#s3").css("display", "none");
        $("#s3").slideUp("slow");
        $("#s1").slideUp("slow");
        $("#s2").slideDown("slow");
        $("#s2sh").css("color", "red");
        $("#s1sh").css("color", "rgb(150, 130, 130)");
        $("#s3sh").css("color", "rgb(150, 130, 130)");
        $("#s1sp").css("color", "rgb(150, 130, 130)");
        $("#s2sp").css("color", "#fff");
        $("#s3sp").css("color", "rgb(150, 130, 130)");
    });
    $(".slide-3-s").click(function () {
        //$("#s1").css("display", "none");
        //$("#s2").css("display", "none");
        $("#s2").slideUp("slow");
        $("#s1").slideUp("slow");
        $("#s3").slideDown("slow");
        $("#s3sh").css("color", "red");
        $("#s1sh").css("color", "rgb(150, 130, 130)");
        $("#s2sh").css("color", "rgb(150, 130, 130)");
        $("#s1sp").css("color", "rgb(150, 130, 130)");
        $("#s3sp").css("color", "#fff");
        $("#s2sp").css("color", "rgb(150, 130, 130)");
    });
    $(".slide-1-s").click(function () {
        $("#s2").slideUp("slow");
        $("#s3").slideUp("slow");
        $("#s1").slideDown("slow");
        $("#s1sh").css("color", "red");
        $("#s3sh").css("color", "rgb(150, 130, 130)");
        $("#s2sh").css("color", "rgb(150, 130, 130)");
        $("#s3sp").css("color", "rgb(150, 130, 130)");
        $("#s1sp").css("color", "#fff");
        $("#s2sp").css("color", "rgb(150, 130, 130)");
    });
});


$(document).ready(function () {
    $(".ul-menu-icon").click(function () {
        $(".m-v-n").toggle();
    });
});

