// Data
const student = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [ "Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",];
const marks = [4, 5, 5, 3, 4, 5];

// Dividing pople into pairs
function getPeopleInPairs (student) {
    
    const women = [];
    const men = [];
    
    for (let person of student) {
      if (person.endsWith("а") || person.endsWith("я")) {
        women.push(person);
      } else {
        men.push(person);
      }
    }
    
    const ourPairs = [];
    
    for (let i = 0; i < men.length; i++) {
        ourPairs.push([men[i], women[i]]);
      } 
     return ourPairs; 
    
}
const arrayPeopleinPairs = getPeopleInPairs (student);

// Pairs with themes 
function addPairsWithThemes (arrayPeopleinPairs, themes) {

    const pairsWithThemes = [];
  
    for (let i = 0; i < arrayPeopleinPairs.length; i++) {
      let stringPairs = arrayPeopleinPairs[i].join(" та ");
      pairsWithThemes.push([stringPairs," тема - ", themes[i]]);
    }
    return pairsWithThemes;
}

  const arrayPairsWithThemes = addPairsWithThemes(arrayPeopleinPairs, themes);

//get mark for student

function addMarksToStudents(student, marks){

    const arrayMarkStu = [];
  
    for (let i = 0; i < student.length; i++) {
  
      arrayMarkStu.push([student[i],"оцінка -", marks[i]]);
  
    }
  
    return arrayMarkStu;
  
  };
  
  const arrayMarkForStudednts = addMarksToStudents(student, marks);
//get mark for group

function GetMarksCommand(arrayPairsWithThemes){
    const coppyArray = JSON.parse(JSON.stringify(arrayPairsWithThemes));
    
    for (let i = 0; i < arrayPairsWithThemes.length; i++) {
         function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;}
         coppyArray[i].push(" оцінка- ",getRandomInt(1, 5) );
    }

return coppyArray;
    };
  const arrayCommandMark = GetMarksCommand(arrayPairsWithThemes);

console.log("Home work 4");
console.log("Команда 1: ", arrayPeopleinPairs[0] , ";");
console.log("Команда 1 з темами: ", arrayPairsWithThemes[0] , ";");
console.log("Студент оцінка: ", arrayMarkForStudednts[0] , ";");
console.log("Команда 1 та їхня оцінка: ", arrayCommandMark[0] , ";");
