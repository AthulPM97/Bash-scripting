const fs = require('fs');
const path = require('path');

const { useCases } = require('./usecases');

// Function to update image.src for the first and last elements in the features array
function updateImageSrc(useCasesArray) {
  let returnArray = [];
  for (let i = 3; i < useCasesArray.length; i++) {
    if (useCasesArray[i].features && useCasesArray[i].features.length > 0) {
      // Update the first element's image.src
      useCasesArray[i].features[0].image.src = '/admin-customize-theme.png';

      // Update the last element's image.src
      useCasesArray[i].features[2].image.src = '/creative-design.png';
      returnArray.push(useCasesArray[i]);
    }
  }
  return returnArray;
}

const result = updateImageSrc(useCases);
const updatedFilePath = path.join(__dirname, 'updatedUseCases.js');
const fileContent = `const useCases = ${JSON.stringify(result, null, 2).replace(
  /"([^"]+)":/g,
  '$1:'
)};`;

fs.writeFile(updatedFilePath, fileContent, 'utf8', (err) => {
  if (err) {
    console.error('Error writing updated useCases file:', err);
  } else {
    console.log('Updated useCases file has been saved as updatedUseCases.js');
  }
});
