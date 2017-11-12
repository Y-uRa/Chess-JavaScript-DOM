var figure, before, after;
var isSec = false;
var isStroke = true;
var isbl = false; // Is black lose
var iswl = false; // Is white lose
var isbc = false; // Is black check
var iswc = false; // Is white check

function imgClick(event){
    event.stopPropagation();
    if(!isSec){
        figure = event.target;
        before = figure.parentNode;
        $(before).addClass('active');
        isSec = true;
    }
    else{
        if(before && $(before).hasClass('active')){
            $(before).removeClass('active');
        }
        figure2 = event.target;
        after = event.target.parentNode
        
        isSec = false;
        Align(figure, before, after);
    }
}
function cellClick(event){
    event.stopPropagation();
    if(before && $(before).hasClass('active')){
            $(before).removeClass('active');
        }
    if(isSec){
        after = event.target;
        isSec = false;
        Align(figure, before, after);
    }
}

function Align(f, b, a){
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

AlignStart();