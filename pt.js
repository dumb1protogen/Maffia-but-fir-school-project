
// let randomNumber = Math.floor(Math.random() * 13) + 1;

let vet = false; 
//4

let mayor = 0;
//7
let gf = 0;
//

let i = 0;
let a = 0;

let random_role = function () {
a = Math.floor(Math.random() * 7) + 1;
if (a != 4 && a != 7){
   console.log (a);
   i++
   return i;
}
if (a == 4 ) {
    if (vet == false){
    vet = true;
    i++
    console.log (a);
    return vet;
    return i;}
    } else if (vet == true){
        console.log ("agian");
    } 
    if (a == 7){
    if (mayor == false){
        mayor= true;
        i++
        console.log (a)
        return mayor;
        return i;
    }
    }
   
   
    }
    do{
    random_role();
    }while (i<20);
    console.log ("test");
    console.log (vet);
