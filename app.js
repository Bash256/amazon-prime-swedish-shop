$('.add').click(function(){
    $('#myCart tr:last') .show();

    var item = $(this).siblings('.item').text();
    var price = $(this).siblings('.price').text();
    var qty = $(this).siblings('.qty').val();
    var total = price * qty;

    // Check if item is in the table
    if($("td:contains('" + item + "')").length > 0){
        var lastQty = $("td:contains('" + item + "')").next().text();

        var accumQty = parseInt(lastQty) + parseInt(qty);

        $("td:contains('" + item + "')").siblings('.qty2').text(accumQty);

        total = price * accumQty;

        $("td:contains('" + item + "')").siblings('.total').text(total);

        var sum = 0;
        $(".total").each(function(){
            var val = parseInt($(this).text());
            sum += val;
        });

        $(".subtotal").text(sum);
    } else {
        $("myCart tr:last").before(
            "<tr>" +
                "<td class='qty2'>" + qty + "</td>" +
                "<td class='right price2'><span class='currency'>kr </span>" + price + "</td>" +
                "<td class='right total'>" + total + "</td>" +
            "</tr>"
        );

        var sum = 0;
        $(".total").each(function(){
            var val = parseInt($(this).text());
            sum += val;
        });

        $(".subtotal").text(sum);
    }

    $(this).siblings('.qty').val(1);
});