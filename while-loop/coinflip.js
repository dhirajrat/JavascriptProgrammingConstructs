const HEAD = 1;

let headCount = 0;

let tailCount = 0;


while (true) {

    let flipCoin = Math.floor(Math.random() * 10) % 2 + 1;
    if ( flipCoin == HEAD){
        
        headCount++;
        if(headCount == 11) 
        break;
    }

    else{

        tailCount++;
        if (tailCount == 11)
         break;

    }

}
console.log("Total time HEAD  : "+headCount);

console.log("Total time TAIL  :"+tailCount);