let input = 250;
let cost;
if(input>=0 && input<=100){
    cost = input*3;
}

else if (input>100 && input<=200) {
    cost = input*5;
} 

else if(input>201 && input<=300){
    cost = input*7;
    if(cost>1000){
        cost = cost+cost/10
    }
    
}
else if(input>300){
     cost = input*10;
     if(cost>1000){
        cost = cost+cost/10
    }
    
}


console.log(cost);


