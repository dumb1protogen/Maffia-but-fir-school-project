
// let randomNumber = Math.floor(Math.random() * 13) + 1;

let vet = false; 
//4

let mayor = false;
//7
let gf = false;
//10
let mafioso = 0;
//10 and 9

let a = 0;
let i = 0

let random_role = function () {
a = Math.floor(Math.random() * 15) + 1;
if (a != 4 && a != 7 && a != 10 && a != 9){
   console.log (i + " you are " + a);
   i++
   return i;
}
if (a == 4 ) {
    if (vet == false){
    vet = true;
    i++
    console.log (i + " you are " + a);
    return vet, i;}
    } else {
        random_role;
    } 
    if (a == 7){
    if (mayor == false){
        mayor= true;
        i++
        console.log (a)
        return mayor, i;
    }
    if (a == 10);{
        if (gf == false){
            gf = true 

            console.log (i + " you are " + a)
            return gf, i;
        }
    }
    }
   
   
    }
    do{
    random_role();
    }while (i != 16);

//TO DO switch 








/*
let i = 0

let random_role = function () {
    a = Math.floor(Math.random() * 14) + 1;}





random_role 
alert (a);

switch (random_role){
case 4:
    if (vet == false){

vet = true
console.log (a);
i = i + 1
return i;
    }
else random_role;
break;
case 7:
    if (mayor == false) {

mayor = true
console.log (a);
i = i + 1 
}
else random_role
    
break;
case 10:
    if (vet == false){

vet = true
console.log (a);
i = i + 1
return i;
    }
else random_role;
    
break;
default: 
console.log (a);
i = i + 1
return i;
}
*/