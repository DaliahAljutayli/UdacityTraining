// JavaScript source code
// By Daliah Aljutayli

var h, w, c, i, j; 
$('#GridSize').submit(function (event) {
    event.preventDefault();
    h = $('#H').val();
    w = $('#W').val();
    makeGride(h, w); //pass values
});


function makeGride(h, w) {
    $('table tr').remove(); 

    for (i = 1; i <= h; i++) {
        $('table').append('<tr id=table' + i + '></tr>');

        for (j = 1; j <= w; j++) {
            $('tr:last').append('<td></td>');
            $('td').attr('class','pixel');
        }// end inner for

    } //end outter for 

    $('td').click(function addColor() {
        color = $('#AColor').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        }// end if 

        else {
            $(this).attr('style', 'background-color:' + color);
        }

    });

    $('#deleteIt').click('.MyArea', function () {
        location.reload(); // refrish the page 
    });

        } //end function