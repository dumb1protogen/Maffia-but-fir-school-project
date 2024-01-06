let debug = 1
let lemit = 4
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
    if (Setting.Players < lemit) {
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
SettingPlayersAdd.style.position = 'absolute';
SettingPlayersAdd.style.left = '70%';
SettingPlayersAdd.style.transform = 'translateX(-70%)';


SettingPlayersDeAdd.style.position = 'absolute';
SettingPlayersDeAdd.style.left = '66%';
SettingPlayersDeAdd.style.transform = 'translateX(-66%)';
SettingPlayersDeAdd.style.textAlign = "center"


let PlayersCount = document.createElement('div');
PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
document.body.appendChild(PlayersCount);
PlayersCount.style.position = 'absolute';
PlayersCount.style.left = '50%';
PlayersCount.style.transform = 'translateX(-50%)';
PlayersCount    .style.transform = 'translateX(-50%)';


let SettingOwn = document.createElement('button');
SettingOwn.textContent = 'Будут ли в игре мои роли: Нет';
SettingOwn.addEventListener('click', function(start) {
   if (Setting.IsMyOwnRoleeAdded == false) { 

    SettingOwn.textContent = 'Будут ли в игре мои роли: Да';
    Setting.IsMyOwnRoleeAdded = true;
    lemit = lemit + 5;
    console.log (lemit);

   } 
   else {
    SettingOwn.textContent = 'Будут ли в игре мои роли: Нет';
    Setting.IsMyOwnRoleeAdded = false;
    lemit = lemit - 5;
    if (Setting.Players > lemit) {
    Setting.Players = Setting.Players - 7;
    PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
    }
    console.log (lemit);
   }
});
document.body.appendChild(SettingOwn);
SettingOwn.style.position = 'absolute';
SettingOwn.style.left = '50%';
SettingOwn.style.top = '9%';

let SettingNitrals = document.createElement('button');
SettingNitrals.textContent = 'Будут ли в игре нейтральные: Нет';
SettingNitrals.addEventListener('click', function(start) {
   if (Setting.IsNitralsInGame == false) { 

    SettingNitrals.textContent = 'Будут ли в игре нейтральные: Да';
    Setting.IsNitralsInGame = true;
    lemit = lemit + 3;
    console.log (lemit);

   } 
   else {
    SettingNitrals.textContent = 'Будут ли в игре нейтральеные: Нет';
    Setting.IsNitralsInGame = false;
    lemit = lemit - 3;
    if (Setting.Players > lemit) {
        Setting.Players = Setting.Players - 3;
        PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
    console.log (lemit);
    }
   }
});
document.body.appendChild(SettingNitrals);
document.body.appendChild(SettingOwn);
SettingNitrals.style.position = 'absolute';
SettingNitrals.style.left = '50%';
SettingNitrals.style.top = '12%';


let SettingVillager = document.createElement('button');
SettingVillager.textContent = 'Будут ли в игре мирные: Нет';
SettingVillager.addEventListener('click', function(start) {
   if (Setting.IsVillagerInGame == false) { 

    SettingVillager.textContent = 'Будут ли в игре мирные: Да';
    Setting.IsVillagerInGame = true;
    lemit = lemit + 5;
    console.log (lemit);
   } 
   else {
    SettingVillager.textContent = 'Будут ли в игре мирные: Нет';
    Setting.IsVillagerInGame = false;
    lemit = lemit - 5;
    if (Setting.Players > lemit) {
        Setting.Players = Setting.Players - 5;
        PlayersCount.textContent = 'Количесто игроков:' + " " + Setting.Players;
    }
    console.log (lemit);;
   }
});
document.body.appendChild(SettingVillager);
SettingVillager.style.position = 'absolute';
SettingVillager.style.left = '50%';
SettingVillager.style.top = '15%';


//-----------------------SETINGS END ---------------


let gf = document.createElement('button');
gf.textContent = 'Будут ли в игре мирные: Нет';
gf.addEventListener('click', function() { 
    
})







//--------------------------ROLE BUTTONS END--------------
















let Start = document.createElement('button');
Start.textContent = 'press here to start a game';
Start.addEventListener('click', function(start) {

    Players = [];
    document.querySelectorAll('.player').forEach(function (element) {
        element.remove();
    });
       

Creating();




//---------------------Loop start------------------
function Creating () {
    let counter = 1

    pool ={
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
        Players.push ({role:"Мирный житель", Number: counter, Alive: true, button: "there should be button"})
        console.log (Players[counter - 1].role + "" + Players[counter - 1].Number); // what is this?
        counter++
    }
    break; 
    case 2:
        if (pool.Shooter < 1 && Setting.IsMyOwnRoleeAdded == true) 
        {
            //document.writeln ( counter + " " + "Вы Стрелок" + "<br>");
            Players.push ({role:"Стрелок", Number: counter, Alive: true, button: "there should be button"})
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
                
                Players.push ({role:"Шериф", Number: counter, Alive: true, button: "there should be button"})
                pool.Sherif++
                pool.Vilager++
                counter++
            }
            break

        case 4:
            if (pool.Veteran < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                //document.writeln ( counter + " " + "Вы Ветеран" + "<br>");
                Players.push ({role:"Ветеран", Number: counter, Alive: true, button: "there should be button"})
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
                Players.push ({role:"Доктор", Number: counter, Alive: true, button: "there should be button"})
                pool.Doctor++
                pool.Vilager++
                counter++
            }
            break
        case 6:
            if (pool.Escort < 1)
            {
                Players.push ({role:"Модель", Number: counter, Alive: true, button: "there should be button"})
                pool.Escort++
                pool.Vilager++
                counter++
            }
            break
        case 7:
            if (pool.Mayor < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                Players.push ({role:"Мэр", Number: counter, Alive: true, button: "there should be button"})
                pool.Mayor++
                pool.Vilager++
                counter++
            }
            break
        case 8:
            if (pool.Lookout < 1 && Setting.IsMyOwnRoleeAdded == true)
            {
                Players.push ({role:"Судья", Number: counter, Alive: true, button: "there should be button"})
                pool.Lookout++
                pool.Vilager++
                counter++
            }
            break
        case 9:
            if (pool.Maf < 1 && pool.EvilSide < 3)
            {
                Players.push ({role:"Маффиозник", Number: counter, Alive: true, button: "there should be button"})
                pool.Maf++
                counter++
                Kill++
                pool.EvilSide++
            }
            break
        case 10:
            if (pool.God_father < 1 && pool.EvilSide < 3 && Setting.IsMyOwnRoleeAdded == true) 
            {
                Players.push ({role:"Крестный отец", Number: counter, Alive: true, button: "there should be button"})
                pool.God_father++
                counter++
                Kill++
                pool.EvilSide++
            }
            break
        case 11:
            if (pool.Sk < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Серийный убийца", Number: counter, Alive: true, button: "there should be button"})
                pool.Sk++
                pool.Neitrals
                counter++
                Kill++
            }
            break
         case 12:
            if (pool.Jester < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Шут", Number: counter, Alive: true, button: "there should be button"})
                pool.Jester++
                pool.Neitrals++
                counter++
            }
            break
         case 13:
            if (pool.Surv < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Выживший", Number: counter, Alive: true, button: "there should be button"})
                pool.Surv++
                pool.Neitrals++
                counter++
            }
            break
         case 14:
            if (pool.amni < 1 && Setting.IsNitralsInGame == true)
            {
                Players.push ({role:"Забытый", Number: counter, Alive: true, button: "there should be button"})
                pool.amni++
                pool.Neitrals++
                counter++
            }
            break
            case 15:
                if (pool.Maf >= 1 && Setting.IsMyOwnRoleeAdded == true && pool.Jani < 1 || pool.God_father == 1 && Setting.IsMyOwnRoleeAdded == true && pool.Jani < 1 )
            { 
                Players.push ({role:"Уборщик", Number: counter, Alive: true, button: "there should be button"})
                counter++
                pool.EvilSide++
                pool.Jani++
            }
                else if (pool.God_father == 0) {
                    Players.push ({role:"Крестный отец", Number: counter, Alive: true, button: "there should be button"})
                pool.God_father++
                pool.Maf++
                counter++
                Kill++
                pool.EvilSide++
            }
                else if (pool.Maf == 0)
            {
                Players.push ({role:"Маффиозник", Number: counter, Alive: true, button: "there should be button"})
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
//------------------------------------- loop end----------------------------------








/*if (pool.EvilSide == 0 )  
{
    document.writeln ("НЕТ МАФИИ ДАВАЙ ПО НОВОЙ МИЩА");
    location.reload()
} */





if (pool.EvilSide > 0) {
for (let i = 0; i < Players.length; i++) {
   let pe = document.createElement ("div") ;
    pe.textContent = (Players[i].role +" "+ Players[i].Number);
    pe.style.textDecoration = "none";
    pe.style.fontSize = "30px";
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
    pe.id = 'player' + i;
    pe.className = "player";



  }}
  else {
    console.log ("there was no maf. generate agian");
    Players = [];
    Creating();
  }

}}) ;
Start.style.position = 'absolute';
   Start.style.left = '50%';
   Start.style.top = '6%';
document.body.appendChild(Start);


