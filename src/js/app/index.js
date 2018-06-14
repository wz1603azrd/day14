require(["jquery", "handlebars"], function($, handlebars) {
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function(res) {
            var tpl = $("#tpl").html();
            var template = handlebars.compile(tpl);
            var html = template(res);
            $('#list').html(html);
        },
        error: function(err) {
            console.log(err)
        }
    })
})