var isSec = false; //пременная для отслеживания кто ходит 
var isStroke = true; //переменная для event что б отследить какой элемент мы нажимаем первым
var isbl = false; // Is black lose
var iswl = false; // Is white lose
var isbc = false; // Is black check
var iswc = false; // Is white check

var figure; // фигура которую предвигаем
var before; // клетка доски до передвежения
var after; // клетка доски после передвежения

function imgClick(event){
    event.stopPropagation();
    
    if(!isSec){
        figure = event.target;
        before = figure.parentNode;
        isSec = true;
        
    }
    else{
        after = event.target.parentNode 
        isSec = false;  
        Logic(figure, before, after);
    }
}
function tdClick(event){
    if(isSec){
        after = event.target;
        isSec = false;
        Logic(figure, before, after);
    }
}
function Logic(f, b, a){
    if(!iswl && !isbl){
        if(isStroke){
            $(a).html(' ');
            $(f).appendTo($(a));
            $(b).html(' ');
            isStroke = !isStroke;

        }
        else if(!isStroke){
            $(a).html(' ');
            $(f).appendTo($(a));
            $(b).html(' ');
            isStroke = !isStroke;
        }
    }
}