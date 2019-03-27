var musicians = ['John Lennon', 'Paul McCartney', 'Georger Harrison', 'Ringo Star']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums];']

function theBeatlesPlay(musicians, instruments){
  var combinedArrays = [];

 for (let i = 0; i < musicians.length; i++){
  combinedArrays.push(musicians[i] + ' plays ' + instruments[i])
}return combinedArrays;
}
console.log(theBeatlesPlay(musicians, instruments));

function johnLennonFacts(array){
  const facts = [
    "He was the last Beatle to drive",
    "He was never a vegetarian",
    "He was a choir boy and a boy scout",
    "He hated the sound of his own voice"];
    
}