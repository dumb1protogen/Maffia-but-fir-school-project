
// let randomNumber = Math.floor(Math.random() * 13) + 1;

let i = 1
let vet = false;  //4
let mayor = false; //7 
let gf = false; //10
let mafioso = 0; //10 9 

random_role = function () {
    



a = Math.floor(Math.random() * 15) + 1;
   // document.writeln (a + "<-- Real number ----      "); // debug

if (a != 4 && a != 7 && a != 10 && a != 9){
    document.writeln (i + " you are " +  a + "<br>");
   i++
   
}
if (a == 4 && vet == false) {
    vet = true;
    document.writeln (i + " you are " +  a + "<br>");
    i++
    } else {
        //document.write ("error<br>");
    } 
    if (a == 7 && mayor == false){
        document.writeln (i + " you are " +  a + "<br>");
        mayor = true;
        i++
      } 
    
    
    else {
        //document.write ("error<br>");
        }
    
        
    
    if (a == 10 && gf == false && mafioso < 3){
            document.writeln (i + " you are " +  a + "<br>");
            gf = true;
            i++ 
            mafioso++
           }
        
        else {
            //document.write ("error<br>")
        }
    
        if (a == 9 && mafioso <3 ) {
            
                document.writeln (i + " you are " +  a + "<br>");
                mafioso++
                i++
            }
            else {
                //document.writeln ("error<br>");
            }
            
        }
        
    
    
   
   
    
    do{
    random_role();
    }while (i < 15 + 1);

//document.writeln (i + " you are " + a)

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