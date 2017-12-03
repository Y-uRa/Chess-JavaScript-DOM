var figure, figure2 = 0, before, after;
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
        after = event.target.parentNode;
        
        isSec = false;
        Align();
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
        Align();
    }
}

function Align(){
    if(!iswl && !isbl){
       
        if(isStroke && $(figure).hasClass('white')){
            if(figure2 && $(figure2).hasClass('black')){
                if($(figure).hasClass('tour') && TOUR($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('officer') && OFFICER($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('king') && KING($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('hourse') && HOURSE($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('pawn') && WHITEPAWN_ATACK($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('queen') && QUEEN($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                
                
                
            }
            else if(!figure2){
                if($(figure).hasClass('tour') && TOUR($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('officer') && OFFICER($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('king') && KING($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('hourse') && HOURSE($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('pawn') && WHITEPAWN_STROCKE($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                if($(figure).hasClass('queen') && QUEEN($(before).attr('x'), $(before).attr('y'), $(after).attr('x'), $(after).attr('y'))){
                    console.log('Player1');
                    $(after).html(' ');
                    $(figure).appendTo($(after));
                    $(before).html(' ');
                    isStroke = !isStroke;
                    figure2 = 0;
                }
                
            }
             if($(figure2).hasClass('white')){
            figure2 = 0;
        }
            
        }
            

        
        
        else if(!isStroke && $(figure).hasClass('black')){
            if(figure2 && $(figure2).hasClass('white')){
                console.log('Player2');
                $(after).html(' ');
                $(figure).appendTo($(after));
                $(before).html(' ');
                isStroke = !isStroke;
                figure2 = 0;
            }
            else if(!figure2){
                console.log('Player2');
                $(after).html(' ');
                $(figure).appendTo($(after));
                $(before).html(' ');
                isStroke = !isStroke;
                
            }
             if($(figure2).hasClass('black')){
            figure2 = 0;
        }
            
        }
    }
}

AlignStart();