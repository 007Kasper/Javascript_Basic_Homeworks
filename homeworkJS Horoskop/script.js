console.log("Conected");


/*Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */

                        
//                     Nacin 1 (ce funkcionira ako user-ot vnese validna godina)

// prvo ni treba konstantni vrednosti od kineskiot horoskop po redosled 0-11
// pocnuvame od 0 zasto arrays se zero-based.
const zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "rooster", "Dog", "Pig"];

// Baranje od Userot da vnese Godina
let year = prompt("Vnesete Godina na Ragjanje");


// formula za presmetka na kineskiot horoskop
let zodiacIndex = (year - 4) % 12;

// Dodeluvanje na kineski horoskop
alert(`Spored godinata ${year} vo kineski horoskop ste ${zodiac[zodiacIndex]}`); 




//                      Nacin 2 (nesto slicno kako vezbata na cas)

/*let userYear  = prompt("Enter a Year");
let parsedYear = parseInt(userYear);
if (!Number.isNaN(parsedYear)){

  if (((parsedYear - 4) % 12) === 0){
  console.log(`The year ${parsedYear} is the year of the "Rat"`);
  } else if(((parsedYear - 4) % 12) === 1){
  console.log(`The year ${parsedYear} is the year of the "Ox"`);
 }else if(((parsedYear - 4) % 12) === 2){
  console.log(`The year ${parsedYear} is the year of the "Tiger"`);
 }else if(((parsedYear - 4) % 12) === 3){
  console.log(`The year ${parsedYear} is the year of the "Rabit"`);
 } else if(((parsedYear - 4) % 12) === 4){
  console.log(`The year ${parsedYear} is the year of the "Dragon"`);
 }else if(((parsedYear - 4) % 12) === 5){
  console.log(`The year ${parsedYear} is the year of the "Snake"`);
 }else if(((parsedYear - 4) % 12) === 6){
  console.log(`The year ${parsedYear} is the year of the "Horse"`);
 }else if(((parsedYear - 4) % 12) === 7){
  console.log(`The year ${parsedYear} is the year of the "Goat"`);
 }else if(((parsedYear - 4) % 12) === 8){
  console.log(`The year ${parsedYear} is the year of the "Monkey"`);
 }else if(((parsedYear - 4) % 12) === 9){
  console.log(`The year ${parsedYear} is the year of the "Rooseter"`);
 }else if(((parsedYear - 4) % 12) === 10){
  console.log(`The year ${parsedYear} is the year of the "Dog"`);
 }else if(((parsedYear - 4) % 12) === 11){
  console.log(`The year ${parsedYear} is the year of the "Pig"`);
 }
}
else{
  console.log("It Is Not a Year");
} */