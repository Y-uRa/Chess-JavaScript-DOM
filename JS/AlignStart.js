var arr = [];
function AlignStart(){
    $('table').remove();
    var board = $('<table class="board"></table>').appendTo(document.body);
    
    $('<tr data-str = "1"></tr>').appendTo(board);
    $('tr[data-str="1"]').after('<tr data-str = "2"></tr>');
    $('tr[data-str="2"]').after('<tr data-str = "3"></tr>');
    $('tr[data-str="3"]').after('<tr data-str = "4"></tr>');
    $('tr[data-str="4"]').after('<tr data-str = "5"></tr>');
    $('tr[data-str="5"]').after('<tr data-str = "6"></tr>');
    $('tr[data-str="6"]').after('<tr data-str = "7"></tr>');
    $('tr[data-str="7"]').after('<tr data-str = "8"></tr>');
    var cel1, cel2, ax = 0, ay = 0;
    
    $('<td class = "cell white" data-index="1"></td>').appendTo('tr[data-str="1"]');
    $('td[data-index="1"]').after('<td class = "cell black" data-index="2"></td>');
    $('td[data-index="2"]').after('<td class = "cell white" data-index="3"></td>');
    $('td[data-index="3"]').after('<td class = "cell black" data-index="4"></td>');
    $('td[data-index="4"]').after('<td class = "cell white" data-index="5"></td>');
    $('td[data-index="5"]').after('<td class = "cell black" data-index="6"></td>');
    $('td[data-index="6"]').after('<td class = "cell white" data-index="7"></td>');
    $('td[data-index="7"]').after('<td class = "cell black" data-index="8"></td>');
    
    $('<td class = "cell black" data-index="9"></td>').appendTo('tr[data-str="2"]');
    $('td[data-index="9"]').after('<td class = "cell white" data-index="10"></td>');
    $('td[data-index="10"]').after('<td class = "cell black" data-index="11"></td>');
    $('td[data-index="11"]').after('<td class = "cell white" data-index="12"></td>');
    $('td[data-index="12"]').after('<td class = "cell black" data-index="13"></td>');
    $('td[data-index="13"]').after('<td class = "cell white" data-index="14"></td>');
    $('td[data-index="14"]').after('<td class = "cell black" data-index="15"></td>');
    $('td[data-index="15"]').after('<td class = "cell white" data-index="16"></td>');
    
    $('<td class = "cell white" data-index="17"></td>').appendTo('tr[data-str="3"]');
    $('td[data-index="17"]').after('<td class = "cell black" data-index="18"></td>');
    $('td[data-index="18"]').after('<td class = "cell white" data-index="19"></td>');
    $('td[data-index="19"]').after('<td class = "cell black" data-index="20"></td>');
    $('td[data-index="20"]').after('<td class = "cell white" data-index="21"></td>');
    $('td[data-index="21"]').after('<td class = "cell black" data-index="22"></td>');
    $('td[data-index="22"]').after('<td class = "cell white" data-index="23"></td>');
    $('td[data-index="23"]').after('<td class = "cell black" data-index="24"></td>');
    
    $('<td class = "cell black" data-index="25"></td>').appendTo('tr[data-str="4"]');
    $('td[data-index="25"]').after('<td class = "cell white" data-index="26"></td>');
    $('td[data-index="26"]').after('<td class = "cell black" data-index="27"></td>');
    $('td[data-index="27"]').after('<td class = "cell white" data-index="28"></td>');
    $('td[data-index="28"]').after('<td class = "cell black" data-index="29"></td>');
    $('td[data-index="29"]').after('<td class = "cell white" data-index="30"></td>');
    $('td[data-index="30"]').after('<td class = "cell black" data-index="31"></td>');
    $('td[data-index="31"]').after('<td class = "cell white" data-index="32"></td>');
    
    $('<td class = "cell white" data-index="33"></td>').appendTo('tr[data-str="5"]');
    $('td[data-index="33"]').after('<td class = "cell black" data-index="34"></td>');
    $('td[data-index="34"]').after('<td class = "cell white" data-index="35"></td>');
    $('td[data-index="35"]').after('<td class = "cell black" data-index="36"></td>');
    $('td[data-index="36"]').after('<td class = "cell white" data-index="37"></td>');
    $('td[data-index="37"]').after('<td class = "cell black" data-index="38"></td>');
    $('td[data-index="38"]').after('<td class = "cell white" data-index="39"></td>');
    $('td[data-index="39"]').after('<td class = "cell black" data-index="40"></td>');
    
    $('<td class = "cell black" data-index="41"></td>').appendTo('tr[data-str="6"]');
    $('td[data-index="41"]').after('<td class = "cell white" data-index="42"></td>');
    $('td[data-index="42"]').after('<td class = "cell black" data-index="43"></td>');
    $('td[data-index="43"]').after('<td class = "cell white" data-index="44"></td>');
    $('td[data-index="44"]').after('<td class = "cell black" data-index="45"></td>');
    $('td[data-index="45"]').after('<td class = "cell white" data-index="46"></td>');
    $('td[data-index="46"]').after('<td class = "cell black" data-index="47"></td>');
    $('td[data-index="47"]').after('<td class = "cell white" data-index="48"></td>');
    
    $('<td class = "cell white" data-index="49"></td>').appendTo('tr[data-str="7"]');
    $('td[data-index="49"]').after('<td class = "cell black" data-index="50"></td>');
    $('td[data-index="50"]').after('<td class = "cell white" data-index="51"></td>');
    $('td[data-index="51"]').after('<td class = "cell black" data-index="52"></td>');
    $('td[data-index="52"]').after('<td class = "cell white" data-index="53"></td>');
    $('td[data-index="53"]').after('<td class = "cell black" data-index="54"></td>');
    $('td[data-index="54"]').after('<td class = "cell white" data-index="55"></td>');
    $('td[data-index="55"]').after('<td class = "cell black" data-index="56"></td>');
    
    $('<td class = "cell black" data-index="57"></td>').appendTo('tr[data-str="8"]');
    $('td[data-index="57"]').after('<td class = "cell white" data-index="58"></td>');
    $('td[data-index="58"]').after('<td class = "cell black" data-index="59"></td>');
    $('td[data-index="59"]').after('<td class = "cell white" data-index="60"></td>');
    $('td[data-index="60"]').after('<td class = "cell black" data-index="61"></td>');
    $('td[data-index="61"]').after('<td class = "cell white" data-index="62"></td>');
    $('td[data-index="62"]').after('<td class = "cell black" data-index="63"></td>');
    $('td[data-index="63"]').after('<td class = "cell white" data-index="64"></td>');
    
    for(var i = 0; i < 64; i++){
        
        arr[i] = $('td[data-index='+ (i+1)+']');
    }
    
    var x = 0, y = 0;
    for(var i = 0; i < 64; i++){
        if(i % 8 == 0){
            y++;
        }
        arr[i].attr('y', y);     
    }
    
    for(var i = 0; i < 64; i++){
        if(i % 8 == 0){
            x = 1;
        }
        arr[i].attr('x', x);
        x++;
    }
    for(var i = 0; i < 64; i++){
        arr[i].click(function(){cellClick(event);});
    }
    
    $('<img src="images/black_tour.webp" alt=""> class = "black tour"').appendTo(arr[0]).click(function(){imgClick(event);}).addClass('black').addClass('tour');
    $('<img src="images/black_hourse.webp" alt=""> class = "black hourse"').appendTo(arr[1]).click(function(){imgClick(event);}).addClass('black').addClass("hourse");
    $('<img src="images/black_officer.webp" alt=""> class = "black officer"').appendTo(arr[2]).click(function(){imgClick(event);}).addClass('black').addClass('officer');
    $('<img src="images/black_queen.webp" alt=""> class = "black queen"').appendTo(arr[3]).click(function(){imgClick(event);}).addClass('black').addClass('queen');
    $('<img src="images/black_king.webp" alt=""> class = "black king"').appendTo(arr[4]).click(function(){imgClick(event);}).addClass('black').addClass('king');
    $('<img src="images/black_officer.webp" alt=""> class = "black officer"').appendTo(arr[5]).click(function(){imgClick(event);}).addClass('black').addClass('officer');
    $('<img src="images/black_hourse.webp" alt=""> class = "black hourse"').appendTo(arr[6]).click(function(){imgClick(event);}).addClass('black').addClass('hourse');
    $('<img src="images/black_tour.webp" alt=""> class = "black tour"').appendTo(arr[7]).click(function(){imgClick(event);}).addClass('black').addClass('tour');
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[8]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[9]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[10]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[11]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[12]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[13]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[14]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    $('<img src="images/black_pawn.webp" alt=""> class = "black pawn"').appendTo(arr[15]).click(function(){
        imgClick(event);
    }).addClass('black').addClass('black').addClass("pawn");
    
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[48]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[49]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[50]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[51]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[52]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[53]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[54]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    $('<img src="images/white_pawn.webp" alt=""> class = "white pawn"').appendTo(arr[55]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('pawn');
    
    $('<img src="images/white_tour.webp" alt=""> class = "white tour"').appendTo(arr[56]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('tour');
    $('<img src="images/white_hourse.webp" alt=""> class = "white hourse"').appendTo(arr[57]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('hourse');
    $('<img src="images/white_officer.webp" alt=""> class = "white officer"').appendTo(arr[58]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('officer');
    $('<img src="images/white_queen.webp" alt=""> class = "white queen"').appendTo(arr[59]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('queen');
    $('<img src="images/white_king.webp" alt=""> class = "white king"').appendTo(arr[60]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('king');
    $('<img src="images/white_officer.webp" alt=""> class = "white officer"').appendTo(arr[61]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('officer');
    $('<img src="images/white_hourse.webp" alt=""> class = "white hourse"').appendTo(arr[62]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('hourse');
    $('<img src="images/white_tour.webp" alt=""> class = "white tour"').appendTo(arr[63]).click(function(){
        imgClick(event);
    }).addClass('white').addClass('tour');
    
}
