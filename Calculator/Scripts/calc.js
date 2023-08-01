function equivalentCheck(){ //This allows the last value to remain in view until other buttons are pressed
    if(parseInt(document.getElementById('equivalent').value)){
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x){

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if(document.getElementById('decimalVar').value==0){
        x += y*10;

        document.getElementById('result').value = x;
    }
    else{ // if the decimal is true
        let decimalCount = parseInt(document.getElementById('result').value);

        if(decimalCount==1){
            x *= 1/10; // using math to place the decimal point
            y += x;
            document.getElementById('result').value = y;
        }
        else{
            document.getElementById('result').value += x;
        }

        decimalCount++;
        document.getElementById('decimalVar').value=decimalCount;
    }
}

function decimalPoint(){
    if(document.getElementById('decimalVar').value==0){ // prevent from multiple decimal point
        document.getElementById('decimalVar').value=1;
    }

    if(parseInt(document.getElementById('operation').value)){
        document.getElementById('result') = 0;
    }
}

function operandCheck(){
    if(document.getElementById('operand').value == ""){

        document.getElementById('operand').value = document.getElementById('result').value;
        //document.getElementById('result').value=0; //this is temp
        document.getElementById('equivalent').value=1;
    }
    else{
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch(parseInt(document.getElementById('operation').value)){
        case 1:
            a+=b;
            break;
        case 2:
            a-=b;
            break;
        case 3:
            a*=b;
            break;
        case 4:
            a/=b;
            break;
    }
    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value=1;
}

function operators(x){
    switch (x){
        case 1:
            document.getElementById('operation').value = 1;
            break;
        case 2:
            document.getElementById('operation').value = 2;
            break;
        case 3:
            document.getElementById('operation').value = 3;
            break;
        case 4:
        document.getElementById('operation').value = 4;
        break;
    }

    operandCheck();
}

function equals(){
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value=1;
}

function allClear(){
    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value=0;
}

function plusMinus(){
    let x = parseFloat(document.getElementById('result').value);
    x*=-1;
    document.getElementById('result').value = x;
}

function percent(){
    let x = parseFloat(document.getElementById('result').value);
    x*=0.01;
    document.getElementById('result').value = x;
}

function square(){
    let x = parseFloat(document.getElementById('result').value);
    x*=x;
    document.getElementById('result').value = x;
}

