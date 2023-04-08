let pool_role = {     
    Sleeper: 0,  
    Maf: 0        
  };



  let i =  0
do { // here start



//-------------------------------------------
let Number = 0 
Number = Math.floor(Math.random() * 2) + 1;
//------------------------------------------
let Generator = function {
switch (Number) 
{
    case 1:
        if (pool_role.Sleeper < 3)
        {
            pool_role.Sleeper ++
            i++
            break;
        }
        else{
            break;
        }
        case 2: 
        if (pool_role.Maf < 3)
        {
            pool_role.Maf++
            i++
            break;
            
        }
        else {
            break;
        }
}
}
console.log
console.log ( Number + "real was")
console.log ( pool_role.Maf)
console.log ( pool_role.Sleeper)
} while (i < 3 ); // here end

// past you run out of time. do this next time 