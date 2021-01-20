import { labelObjs } from './segregation.js';


var averageIntensityArray = new Array(labelObjs.length);

const numberOfSectors = labelObjs.length;

for(var i = 0; i < numberOfSectors; ++i) {
    averageIntensityArray[i] = 0;

    //parsing through array of each sector and summing the intensities
    labelObjs[i].map(obj => {
        if(obj.intensity !== "") {
            averageIntensityArray[i] += obj.intensity;
        }
    });

    //calcualting the mean;
    averageIntensityArray[i] = 
        (averageIntensityArray[i] / labelObjs[i].length).toFixed(2);
    
}

export default averageIntensityArray;
