$(function () {
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var current_status = $(this).data("status");
        console.log("devour-btn")
        if (current_status === 0) {
            current_status = true;
        }

        var newStatusObj = {
            devoured: current_status
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatusObj
        }).then(function () {
            //refresh the page
            location.reload();
        })
    });

    $(".create-update-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#ca").val().trim()
        };

        $.ajax("/api/burgers/post", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })

    })

})