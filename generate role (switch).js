let Setting = {
    IsVillagerInGame:  true,
    IsNitralsInGame: true,
    IsMyOwnRoleeAdded: true,
}
let Kill = 0
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
    Jani: 0,
};
let counter = 1

while (counter < 5 + 1) {

pool.number = Math.floor(Math.random() * 15) + 1;
console.log (pool.number + " number"); // debug

switch(pool.number) 

{
    case 1: 
    if (pool.Peace < 5 && Setting.IsVillagerInGame == true)
    {
        document.writeln ( counter + " " + "Вы Мирный" + "<br>");
        pool.Peace++
        pool.Vilager++
        counter++
    }
    break; 
    case 2:
        if (pool.Shooter < 1 && Setting.IsMyOwnRoleeAdded == true) 
        {
            document.writeln ( counter + " " + "Вы Стрелок" + "<br>");
            pool.Shooter++
            pool.Vilager++
            counter++
            Kill++
        }
        break;
        case 3:
            if (pool.Sherif < 1)
            {
                document.writeln ( counter + " " + "Вы Шериф" + "<br>");
                pool.Sherif++
                pool.Vilager++
                counter++
            }
            break

        case 4:
            if (pool.Veteran < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                document.writeln ( counter + " " + "Вы Ветеран" + "<br>");
                pool.Veteran++
                pool.Vilager++
                counter++
                Kill++
            }
            break
        case 5:
            if (pool.Doctor < 1)
            {
                document.writeln ( counter + " " + "Вы Доктор" + "<br>");
                pool.Doctor++
                pool.Vilager++
                counter++
            }
            break
        case 6:
            if (pool.Escort < 1)
            {
                document.writeln ( counter + " " + "Вы Модель" + "<br>");
                pool.Escort++
                pool.Vilager++
                counter++
            }
            break
        case 7:
            if (pool.Mayor < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                document.writeln ( counter + " " + "Вы Мэр" + "<br>");
                pool.Mayor++
                pool.Vilager++
                counter++
            }
            break
        case 8:
            if (pool.Lookout < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                document.writeln ( counter + " " + "Вы Судья" + "<br>");
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
                Kill++
            }
            break
        case 10:
            if (pool.God_father < 1 && pool.Maf < 3 && Setting.IsMyOwnRoleeAdded == true) 
            {
                document.writeln ( counter + " " + "Вы Крестный отец"+ "<br>" );
                pool.God_father++
                pool.Maf++
                counter++
                Kill++
            }
            break
        case 11:
            if (pool.Sk < 1 && Setting.IsNitralsInGame == true)
            {
                document.writeln ( counter + " " + "Вы Сериный убийца"+ "<br>");
                pool.Sk++
                pool.Neitrals
                counter++
                Kill++
            }
            break
         case 12:
            if (pool.Jester < 1 && Setting.IsNitralsInGame == true)
            {
                document.writeln ( counter + " " + "Вы Шут"+ "<br>");
                pool.Jester++
                pool.Neitrals++
                counter++
            }
            break
         case 13:
            if (pool.Surv < 1 && Setting.IsNitralsInGame == true)
            {
                document.writeln ( counter + " " + "Вы Выживший "+ "<br>");
                pool.Surv++
                pool.Neitrals++
                counter++
            }
            break
         case 14:
            if (pool.amni < 1 && Setting.IsNitralsInGame == true)
            {
                document.writeln ( counter + " " + "Вы Забытый" + "<br>");
                pool.amni++
                pool.Neitrals++
                counter++
            }
            break
            case 15:
                if (pool.Maf >= 1 && Setting.IsMyOwnRoleeAdded == true)
                { document.writeln (counter + " " + "Вы Уборщик" + "<br>") 
                counter++
            }
                else if (pool.God_father == 0) {
                    document.writeln ( counter + " " + "Вы Крестный отец"+ "<br>" );
                pool.God_father++
                pool.Maf++
                counter++
                Kill++
                }
                else {
                document.writeln ( counter + " " + "Вы мафиозник"+ "<br>" );
                pool.Maf++
                counter++
                Kill++
                }
                
                break

}


}// loop end


if (pool.Maf == 0 )  
{
    document.writeln ("НЕТ МАФИИ ДАВАЙ ПО НОВОЙ МИЩА");
    location.reload()
}




document.writeln (" " + "<br>");
document.writeln ("Всего мирных " + " " + pool.Vilager++ + "<br>");
document.writeln ("Всего мафии" + " " + pool.Maf + "<br>");
document.writeln ("Всего нейтралных ролей" + " " + pool.Neitrals + "<br>");
document.writeln ("Всего роллей способных убивать ночью" + " " + Kill );