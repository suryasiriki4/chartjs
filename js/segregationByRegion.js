import data from './data.js';

let sectorLabels = new Set();

data.map(obj => {

    if(!sectorLabels.has(obj.region) && obj.region !== "") {
        sectorLabels.add(obj.region);
    }
});

//converting labels set into array
let regionLabelsArray = new Array();
regionLabels.forEach(region => regionLabelsArray.push(region));

//filtering the data based on the secotor labels
let labelObjs = new Array(regionLabelsArray.length);

for(var i = 0; i < regionLabelsArray.length; ++i) {
    labelObjs[i] = data.filter(obj => obj.region === regionLabelsArray[i]);
}

export { labelObjs, regionLabelsArray };