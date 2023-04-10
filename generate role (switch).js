let pool ={
    Peace: 0 ,
    Shooter: 0 ,
    number: NaN, 
    Sherif: 0 ,
    Veteran: 0, 
    Doctor: 0 , 
    Escort: 0 ,
    Mayor: 0 , 
    Lookout:0 ,
    Maf: 0 , 
    God_father: 0 ,
    Sk: 0,
    Jester: 0, 
    Surv: 0, 
    amni: 0,
};
let counter = 1

while (counter < 15 + 1) {

pool.number = Math.floor(Math.random() * 14) + 1;
console.log (pool.number + " number"); // debug

switch(pool.number) 

{
    case 1: 
    if (pool.Peace < 3)
    {
        document.writeln ( counter + " " + "вы мирный" + "<br>");
        pool.Peace++
        counter++
    }
    break; 
    case 2:
        if (pool.Shooter < 3) 
        {
            document.writeln ( counter + " " + "вы стрелок" + "<br>");
            pool.Shooter++
            counter++
        }
        break;
        case 3:
            if (pool.Sherif < 3)
            {
                document.writeln ( counter + " " + "вы шериф" + "<br>");
                pool.Sherif++
                counter++
            }
            break

        case 4:
            if (pool.Veteran < 1)
            {
                document.writeln ( counter + " " + "вы ветеран" + "<br>");
                pool.Veteran++
                counter++
            }
            break
        case 5:
            if (pool.Doctor < 3)
            {
                document.writeln ( counter + " " + "вы Доктор" + "<br>");
                pool.Doctor++
                counter++
            }
            break
        case 6:
            if (pool.Escort < 3)
            {
                document.writeln ( counter + " " + "вы модель" + "<br>");
                pool.Escort++
                counter++
            }
            break
        case 7:
            if (pool.Mayor < 1)
            {
                document.writeln ( counter + " " + "вы Мэр" + "<br>");
                pool.Mayor++
                counter++
            }
            break
        case 8:
            if (pool.Lookout < 3)
            {
                document.writeln ( counter + " " + "вы Смотритель" + "<br>");
                pool.Lookout++
                counter++
            }
            break
        case 9:
            if (pool.Maf < 3)
            {
                document.writeln ( counter + " " + "вы мафиозник" + "<br>");
                pool.Maf++
                counter++
            }
            break
        case 10:
            if (pool.God_father < 1 || pool.Maf < 3) 
            {
                document.writeln ( counter + " " + "вы Крестный отец"+ "<br>");
                pool.God_father++
                pool.Maf++
                counter++
            }
            break
        case 11:
            if (pool.Sk < 3)
            {
                document.writeln ( counter + " " + "вы Сириный убийца"+ "<br>");
                pool.Sk++
                counter++
            }
            break
         case 12:
            if (pool.Jester < 3)
            {
                document.writeln ( counter + " " + "вы шут"+ "<br>");
                pool.Jester++
                counter++
            }
            break
         case 13:
            if (pool.Surv < 3)
            {
                document.writeln ( counter + " " + "вы выживший "+ "<br>");
                pool.Surv++
                counter++
            }
            break
         case 14:
            if (pool.amni < 3)
            {
                document.writeln ( counter + " " + "вы забытый" + "<br>");
                pool.amni++
                counter++
            }
            break

}


}// loop end


if (pool.Maf == 0 )  
{
    document.writeln ("НЕТ МАФИИ ДОВАЙ ПО НОВОЙ МИЩА ВСЮ ХУЙНЯ")
}

document.writeln (" " + "<br>");
document.writeln ( pool);
console.log (pool.Peace + "peace"); // debug
console.log (pool.Shooter + "shoter"); // debug
console.log (counter + "counter"); // debug