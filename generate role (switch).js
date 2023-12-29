let debug = 1

let Setting = {
    IsVillagerInGame:  false,
    IsNitralsInGame: false,
    IsMyOwnRoleeAdded: false,
    Players: 4,
}
let Kill = 0
let pool ={
    Vilager: 0,
    Neitrals: 0,
    Peace: 0 ,
    Shooter: 0 ,
    number: NaN, 
    Sherif: 0,
    Veteran: 0, 
    Doctor: 0, 
    Escort: 0,
    Mayor: 0, 
    Lookout:0,
    Maf: 0,
    EvilSide: 0, 
    God_father: 0 ,
    Sk: 0,
    Jester: 0, 
    Surv: 0, 
    amni: 0,
    Jani: 0,
};
let Players = [];
//-----------------------SETINGS---------------

let SettingPlayersAdd = document.createElement('button');
SettingPlayersAdd.textContent = '+1';
SettingPlayersAdd.addEventListener('click', function(start) { 
    if (Setting.Players < 19) {
  Setting.Players ++;
  PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
    }
});
document.body.appendChild(SettingPlayersAdd);

let SettingPlayersDeAdd = document.createElement('button');
SettingPlayersDeAdd.textContent = '-1';
SettingPlayersDeAdd.addEventListener('click', function(start) {
    if (Setting.Players > 4) {
  Setting.Players --    ;
  PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
    }
});
document.body.appendChild(SettingPlayersDeAdd);

let PlayersCount = document.createElement('button');
PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
PlayersCount.addEventListener('click', function(start) {
});
document.body.appendChild(PlayersCount);


let SettingOwn = document.createElement('button');
SettingOwn.textContent = 'Будут ли в игре нейтральные: Нет';
SettingOwn.addEventListener('click', function(start) {
   if (Setting.IsMyOwnRoleeAdded == false) { 

    SettingOwn.textContent = 'Будут ли в игре нейтральные: Да';
    Setting.IsMyOwnRoleeAdded = true;

   } 
   else {
    SettingOwn.textContent = 'Будут ли в игре нейтральеные: Нет';
    Setting.IsMyOwnRoleeAdded = false;
   }
});
document.body.appendChild(SettingOwn);


let SettingNitrals = document.createElement('button');
SettingNitrals.textContent = 'Будут ли в игре нейтральные: Нет';
SettingNitrals.addEventListener('click', function(start) {
   if (Setting.IsNitralsInGame == false) { 

    SettingNitrals.textContent = 'Будут ли в игре нейтральные: Да';
    Setting.IsNitralsInGame = true;

   } 
   else {
    SettingNitrals.textContent = 'Будут ли в игре нейтральеные: Нет';
    Setting.IsNitralsInGame = false;
   }
});
document.body.appendChild(SettingNitrals);



let SettingVillager = document.createElement('button');
SettingVillager.textContent = 'Будут ли в игре мирные: Нет';
SettingVillager.addEventListener('click', function(start) {
   if (Setting.IsVillagerInGame == false) { 

    SettingVillager.textContent = 'Будут ли в игре мирные: Да';
    Setting.IsVillagerInGame = true;

   } 
   else {
    SettingVillager.textContent = 'Будут ли в игре мирные: Нет';
    Setting.IsVillagerInGame = false;
   }
});
document.body.appendChild(SettingVillager);



//-----------------------SETINGS---------------


let Start = document.createElement('button');
Start.textContent = 'press here to start a game';
Start.addEventListener('click', function(start) {

   if (Setting.IsMyOwnRoleeAdded == false && Setting.IsNitralsInGame == false && Setting.IsVillagerInGame == false && debug == 0) {
    alert("Притормози, ты выключил все настройки. Я тебе установлю 4 игрока иначе ты будешь в бесконечной петле. Не забуть в следущий раз включить что-то")
    Setting.Players = 4;

    Creating();
   }
   else 
   Creating();
   start.target.parentNode.removeChild(start.target); // потом подумай





//---------------------Loop start------------------
function Creating () {
    let counter = 1
while (counter < Setting.Players + 1) {

pool.number = Math.floor(Math.random() * 15) + 1;
console.log (pool.number + " number"); // debug


switch(pool.number) 

{
    case 1: 
    if (pool.Peace <= 5 && Setting.IsVillagerInGame == true)
    {
        //document.writeln ( counter + " " + "Вы Мирный" + "<br>");
        pool.Peace++
        pool.Vilager++
        Players.push ({role:"Vilager", Number: counter, Alive: true, button: "there should be button"})
        console.log (Players[counter - 1].role + "" + Players[counter - 1].Number);
        counter++
    }
    break; 
    case 2:
        if (pool.Shooter < 1 && Setting.IsMyOwnRoleeAdded == true) 
        {
            //document.writeln ( counter + " " + "Вы Стрелок" + "<br>");
            Players.push ({role:"Shooter", Number: counter, Alive: true, button: "there should be button"})
            pool.Shooter++
            pool.Vilager++
            counter++
            Kill++
        }
        break;
        case 3:
            if (pool.Sherif < 1)
            {
                //document.writeln ( counter + " " + "Вы Шериф" + "<br>");
                
                Players.push ({role:"Sherif", Number: counter, Alive: true, button: "there should be button"})
                pool.Sherif++
                pool.Vilager++
                counter++
            }
            break

        case 4:
            if (pool.Veteran < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                //document.writeln ( counter + " " + "Вы Ветеран" + "<br>");
                Players.push ({role:"Veteran", Number: counter, Alive: true, button: "there should be button"})
                pool.Veteran++
                pool.Vilager++
                counter++
                Kill++
            }
            break
        case 5:
            if (pool.Doctor < 1)
            {
                //document.writeln ( counter + " " + "Вы Доктор" + "<br>");
                Players.push ({role:"Doctor", Number: counter, Alive: true, button: "there should be button"})
                pool.Doctor++
                pool.Vilager++
                counter++
            }
            break
        case 6:
            if (pool.Escort < 1)
            {
                Players.push ({role:"Escort", Number: counter, Alive: true, button: "there should be button"})
                pool.Escort++
                pool.Vilager++
                counter++
            }
            break
        case 7:
            if (pool.Mayor < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                Players.push ({role:"Myor", Number: counter, Alive: true, button: "there should be button"})
                pool.Mayor++
                pool.Vilager++
                counter++
            }
            break
        case 8:
            if (pool.Lookout < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                Players.push ({role:"Judge", Number: counter, Alive: true, button: "there should be button"})
                pool.Lookout++
                pool.Vilager++
                counter++
            }
            break
        case 9:
            if (pool.Maf < 1 && pool.EvilSide < 3)
            {
                Players.push ({role:"Maf", Number: counter, Alive: true, button: "there should be button"})
                pool.Maf++
                counter++
                Kill++
                pool.EvilSide++
            }
            break
        case 10:
            if (pool.God_father < 1 && pool.EvilSide < 3 && Setting.IsMyOwnRoleeAdded == true) 
            {
                Players.push ({role:"Godfather", Number: counter, Alive: true, button: "there should be button"})
                pool.God_father++
                counter++
                Kill++
                pool.EvilSide++
            }
            break
        case 11:
            if (pool.Sk < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Sirial killer", Number: counter, Alive: true, button: "there should be button"})
                pool.Sk++
                pool.Neitrals
                counter++
                Kill++
            }
            break
         case 12:
            if (pool.Jester < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Jester", Number: counter, Alive: true, button: "there should be button"})
                pool.Jester++
                pool.Neitrals++
                counter++
            }
            break
         case 13:
            if (pool.Surv < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Survivor", Number: counter, Alive: true, button: "there should be button"})
                pool.Surv++
                pool.Neitrals++
                counter++
            }
            break
         case 14:
            if (pool.amni < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Amnisiac", Number: counter, Alive: true, button: "there should be button"})
                pool.amni++
                pool.Neitrals++
                counter++
            }
            break
            case 15:
                if (pool.Maf >= 1 && Setting.IsMyOwnRoleeAdded == true && pool.Jani < 1 || pool.God_father == 1 && Setting.IsMyOwnRoleeAdded == true && pool.Jani < 1 )
            { 
                Players.push ({role:"Janitor", Number: counter, Alive: true, button: "there should be button"})
                counter++
                pool.EvilSide++
                pool.Jani++
            }
                else if (pool.God_father == 0) {
                    Players.push ({role:"Godfather", Number: counter, Alive: true, button: "there should be button"})
                pool.God_father++
                pool.Maf++
                counter++
                Kill++
                pool.EvilSide++
            }
                else if (pool.Maf == 0)
            {
                Players.push ({role:"Maf", Number: counter, Alive: true, button: "there should be button"})
                pool.Maf++
                counter++
                Kill++
                pool.EvilSide++
            }
                
                break
                default: 
                    if (debug == 5) {
                        counter = 9999;
                        document.writeln ("Что-то пошло не так. Свяжитесь с создателем");
                        alert ("Что то пошло не так");
                    } 
                    else {
                        debug++
                    }
                    break

}


}
// loop end








/*if (pool.EvilSide == 0 )  
{
    document.writeln ("НЕТ МАФИИ ДАВАЙ ПО НОВОЙ МИЩА");
    location.reload()
} */





let PlayerList = document.getElementById("PlayerList");
for (let i = 0; i < Players.length; i++) {
   //let TI = (Players[i].role +" "+ Players[i].Number + "<br/>");
   let pe = document.createElement ("div") ;
    pe.textContent = (Players[i].role +" "+ Players[i].Number);
    pe.style.textDecoration = "none";
    pe.addEventListener ("click", function() {
        pe.addEventListener ("click", function() {
            if (this.style.textDecoration == "none") {
            this.style.textDecoration = "line-through"
            }
            else 
            this.style.textDecoration = "none";
          }) 
        
    })
    document.body.appendChild(pe);
    let para = document.getElementsByTagName('div')[i]; 
    para.id = 'plaeyr' + i;



  }
//document.writeln (" " + "<br>");
//document.writeln ("Всего мирных " + " " + pool.Vilager++ + "<br>");
//document.writeln ("Всего мафии" + " " + pool.EvilSide + "<br>");
//document.writeln ("Всего нейтралных ролей" + " " + pool.Neitrals + "<br>");
//document.writeln ("Всего роллей способных убивать ночью" + " " + Kill );
//                                                                            FIX BUG!!!
// Just change later it into like role list. 

}}) ;

document.body.appendChild(Start);





