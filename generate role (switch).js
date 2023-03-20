let Sitizen = false
let a = 0
let i = 0

random_role = function () {
    a = Math.floor(Math.random() * 2) + 1;}

do {

    random_role() 

    console.log (a + " debug"); 

    switch (a) {
        case 1:
            if (Sitizen < 3 )  
            { 
        Sitizen++
        i++  
        console.log ("given");
    }
    case 2: 
    
    break
        default:
            console.log ("another");
            i++
    }
}
    while (i != 5);
    //TODO доделай, а то прошлый ты заебался