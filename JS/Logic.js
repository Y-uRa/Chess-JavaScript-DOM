function WHITEPAWN_STROCKE(prev_x, prev_y, after_x, after_y){
    if(prev_y == 7){
        if(after_y == 5){
            return true;
        }
    }
    for(var i = prev_y; i >=2; i--){
        if(prev_y -1 == after_y){
            return true;
        }
    }
    return false;
}
function WHITEPAWN_ATACK(prev_x, prev_y, after_x, after_y){
    if(prev_y - 1 == after_y && prev_x + 1 == after_x){
        return true;
    }
    if(prev_y - 1 == after_y && prev_x - 1 == after_y){
        return true;
    }
    return false;
}
function BLACKPAWN_STROKE(prev_x, prev_y, after_x, after_y){
    if(prev_y == 2){
        if(after_y == 4){
            return true;
        }
    }
    for(var i = prev_y; i <= 7; i++){
        if(prev_y + 1 == after_y){
            return true;
        }
    }
    return false;
}
function BLACKPAWN_ATTACK(prev_x, prev_y, after_x, after_y){
    if(prev_x + 1 == after_x && prev_y + 1 == after_y){
        return true;
    }
    if(prev_x - 1 == after_x && prev_y + 1 == after_y){
        return true;
    }
    return false;
}
function OFFICER(prev_x, prev_y, after_x, after_y){
    for(var i = prev_x; i <= 8; i++){
        for(var j = prev_y; j <= 8; j++){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_x; i >= 1; i--){
        for(var j = prev_y; j >=1; j--){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_x; i <=8; i++){
        for(var j = prev_y; j>=1; j--){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_y; i <=8; i++){
        for(var j = prev_x; j>=1; j--){
            if(i == after_y && j == after_x){
                return true;
            }
        }
    }
    return false;
}
function HOURSE(color_fig, prev_x, prev_y, after_x, after_y){
    
    return false;
}
function QUEEN(prev_x, prev_y, after_x, after_y){
    for(var i = prev_x; i <=8; i++){
        if(i == after_x && prev_y == after_y){
            return true;
        }
    }
    for(var i = prev_x; i >= 1; i--){
        if(i == after_x && prev_y == after_y){
            return true;
        }
    }
    for(var i = prev_x; i <= 8; i++){
        for(var j = prev_y; j <=8; j++){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_x; i >= 1; i--){
        for(var j = prev_y; j >=1; j--){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_y; i<=8; i++){
        if(i == after_y && prev_x == after_x){
            return true;
        }
    }
    for(var i = prev_y; i >= 1; i--){
        if(i == after_y && prev_x == after_x){
            return true;
        }
    }
    for(var i = prev_x; i <=8; i++){
        for(var j = prev_y; j>=1; j--){
            if(i == after_x && j == after_y){
                return true;
            }
        }
    }
    for(var i = prev_y; i <=8; i++){
        for(var j = prev_x; j>=1; j--){
            if(i == after_y && j == after_x){
                return true;
            }
        }
    }
    
    return false;
}

function KING(prev_x, prev_y, after_x, after_y){
    if(prev_x + 1 == after_x && prev_y + 1 == after_y){
        return true;
    }
    else if(prev_x - 1 == after_x && prev_y - 1 == after_y){
        return true;
    }
    else if(prev_x + 1 == after_x && prev_y == after_y){
        return true;
    }
    else if(prev_x == after_x && prev_y + 1 == after_y){
        return true;
    }
    else if(prev_x - 1 == after_x && prev_y == after_y){
        return true;
    }
    else if(prev_x == after_x && prev_y - 1 == after_y){
        return true;
    }
    else if(prev_x + 1 == after_x && prev_y - 1 == after_y){
        return true;
    }
    else if(prev_x - 1 == after_x && prev_y + 1 == after_y){
        return true;
    }
    return false;
}

function TOUR(prev_x, prev_y, after_x, after_y){
    
    for(var i = prev_x; i <= 8; i++){
        if(after_x == i && prev_y == after_y){
            return true;
        }
    }
    for(var i = prev_x; i > 0; i--){
        if(after_x == i && prev_y == after_y){
            return true;
        }
    }
    
    for(var i = prev_y; i <= 8; i++){
        if(after_y == i && prev_x == after_x){
            return true;
        }
    }
    for(var i = prev_y; i > 0; i--){
        if(after_y == i && prev_x == after_x){
            return true;
        }
    }
    return false;
}
console.log("Black Pawn Test: ");
console.log(BLACKPAWN_STROKE(2, 2, 2, 4));
console.log(BLACKPAWN_STROKE(2, 2, 2, 3));
console.log(BLACKPAWN_STROKE(2, 2, 2, 1));
console.log(BLACKPAWN_ATTACK(2, 2, 1, 3));
console.log(BLACKPAWN_ATTACK(2, 2, 3, 3));
console.log(BLACKPAWN_ATTACK(2, 2, 1, 4));
console.log('White Pawn Test: ');
console.log(WHITEPAWN_STROCKE(7, 7, 7, 6));
console.log(WHITEPAWN_STROCKE(7, 7, 7, 5));
console.log(WHITEPAWN_STROCKE(7, 7, 7, 4));
console.log(WHITEPAWN_ATACK(7, 7, 8, 6));
console.log(WHITEPAWN_ATACK(7, 7, 3, 6) + ' Problem');



