let pool ={
    Peace: 0 ,
    Maf: 0 ,
    number: NaN, 
};
let counter = 0

while (counter < 3) {

pool.number = Math.floor(Math.random() * 3) + 1;
console.log (pool.number + " number"); // debug

switch(pool.number) 

{
    case 1: 
    if (pool.Peace < 3)
    {
        console.log ( counter + "you are Peace")
        pool.Peace++
        counter++
    }
    break; 
    case 2:
        if (pool.Maf < 3) 
        {
            console.log ( counter + "you are maf")
            pool.Maf++
            counter++
        }
        break
}

}



//console.log (pool.Peace + "peace") // debug
//console.log (pool.Maf + "maf") // debug
//console.log (counter + "counter") // debug