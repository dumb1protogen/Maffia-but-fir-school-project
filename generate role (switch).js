let pool ={
    Vilager: 0,
    Neitrals: 0,
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

while (counter < 6 + 1) {

pool.number = Math.floor(Math.random() * 14) + 1;
console.log (pool.number + " number"); // debug

switch(pool.number) 

{
    case 1: 
    if (pool.Peace < 3)
    {
        document.writeln ( counter + " " + "Вы Мирный" + "<br>");
        pool.Peace++
        pool.Vilager++
        counter++
    }
    break; 
    case 2:
        if (pool.Shooter < 3) 
        {
            document.writeln ( counter + " " + "Вы Стрелок" + "<br>");
            pool.Shooter++
            pool.Vilager++
            counter++
        }
        break;
        case 3:
            if (pool.Sherif < 3)
            {
                document.writeln ( counter + " " + "Вы Шериф" + "<br>");
                pool.Sherif++
                pool.Vilager++
                counter++
            }
            break

        case 4:
            if (pool.Veteran < 1)
            {
                document.writeln ( counter + " " + "Вы Ветеран" + "<br>");
                pool.Veteran++
                pool.Vilager++
                counter++
            }
            break
        case 5:
            if (pool.Doctor < 3)
            {
                document.writeln ( counter + " " + "Вы Доктор" + "<br>");
                pool.Doctor++
                pool.Vilager++
                counter++
            }
            break
        case 6:
            if (pool.Escort < 3)
            {
                document.writeln ( counter + " " + "Вы Модель" + "<br>");
                pool.Escort++
                pool.Vilager++
                counter++
            }
            break
        case 7:
            if (pool.Mayor < 1)
            {
                document.writeln ( counter + " " + "Вы Мэр" + "<br>");
                pool.Mayor++
                pool.Vilager++
                counter++
            }
            break
        case 8:
            if (pool.Lookout < 3)
            {
                document.writeln ( counter + " " + "Вы Смотритель" + "<br>");
                pool.Lookout++
                pool.Vilager++
                counter++
            }
            break
        case 9:
            if (pool.Maf < 3)
            {
                document.writeln ( counter + " " + "Вы Мафиозник" + "<br>");
                pool.Maf++
                counter++
            }
            break
        case 10:
            if (pool.God_father < 1 && pool.Maf < 3) 
            {
                document.writeln ( counter + " " + "Вы Крестный отец"+ "<br>");
                pool.God_father++
                pool.Maf++
                counter++
            }
            break
        case 11:
            if (pool.Sk < 3)
            {
                document.writeln ( counter + " " + "Вы Сериный убийца"+ "<br>");
                pool.Sk++
                pool.Neitrals
                counter++
            }
            break
         case 12:
            if (pool.Jester < 3)
            {
                document.writeln ( counter + " " + "Вы Шут"+ "<br>");
                pool.Jester++
                pool.Neitrals++
                counter++
            }
            break
         case 13:
            if (pool.Surv < 3)
            {
                document.writeln ( counter + " " + "Вы Выживший "+ "<br>");
                pool.Surv++
                pool.Neitrals++
                counter++
            }
            break
         case 14:
            if (pool.amni < 3)
            {
                document.writeln ( counter + " " + "Вы Забытый" + "<br>");
                pool.amni++
                pool.Neitrals++
                counter++
            }
            break

}


}// loop end


if (pool.Maf == 0 )  
{
    document.writeln ("НЕТ МАФИИ ДОВАЙ ПО НОВОЙ МИЩА ВСЕ ХУЙНЯ")
}
document.writeln (" " + "<br>");
document.writeln ("всего мирных " + " " + pool.Vilager++ + "<br>")
document.writeln ("всего мафии" + " " + pool.Maf + "<br>")
document.writeln ("всего нейтралных ролей" + " " + pool.Neitrals + "<br>")
document.writeln