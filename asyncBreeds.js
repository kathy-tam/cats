const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE with 'return data': Returning from *inner* callback function, not breedDetailsFromFile.
    //if (!error) return data;
    if (!error) callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const printBreedDetail = function(breed) {
  console.log('Return Value: ', breed); 
};

breedDetailsFromFile('Bombay', printBreedDetail);

// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return value: ', bombay); // => will NOT print out details, instead we will see undefined!