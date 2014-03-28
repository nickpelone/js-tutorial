/* jshint browser:true, devel:true, jquery: true */
(function () {
    $(document).ready(function () {
        $("#button").click(function () {
            var status = $(".target").css("display");
            if (status === "none") {
                $(".target").show(500);
            } else {
                $(".target").hide(500);
            }
        });
        $(".target").mouseover(function () {
                alert("your mouse touched the target");
        });
    });
}());
