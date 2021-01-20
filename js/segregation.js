import data from './data.js';

let sectorLabels = new Set();

data.map(obj => {

    if(!sectorLabels.has(obj.sector) && obj.sector !== "") {
        sectorLabels.add(obj.sector);
    }
});

//converting labels set into array
let sectorLabelsArray = new Array();
sectorLabels.forEach(sector => sectorLabelsArray.push(sector));

//filtering the data based on the secotor labels
let labelObjs = new Array(sectorLabelsArray.length);

for(var i = 0; i < sectorLabelsArray.length; ++i) {
    labelObjs[i] = data.filter(obj => obj.sector === sectorLabelsArray[i]);
}

export { labelObjs, sectorLabelsArray };