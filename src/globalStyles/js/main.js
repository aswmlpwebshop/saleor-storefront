/*
$('#offerSlider .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
*/
$('#offerSlider').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

$(document).ready(function(){
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
        $('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
    });
    $('#minus-btn').click(function(){
        $('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
        if ($('#qty_input').val() == 0) {
            $('#qty_input').val(1);
        }

    });


    size_li = $("#pagination .paginate-item").length;
    x=6;
    $('#pagination .paginate-item:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+6 <= size_li) ? x+6 : size_li;
        $('#pagination .paginate-item:lt('+x+')').slideDown();
    });
    $('#showLess').click(function () {
        x=(x-5<0) ? 3 : x-5;
        $('#myList li').not(':lt('+x+')').slideDown();
    });

});
