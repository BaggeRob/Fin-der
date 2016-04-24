'use strict'
const moment = require('moment');
const Random = require('random-js');
const Promise = require('bluebird');
const random = new Random(Random.engines.mt19937().autoSeed());

const users = ['Gov Inspector 1', 'Gov Inspector 2', 'Gov inspector 3', 'Gov Inspector 4', 'Gov Inspector 5'];
const locations = [
  {
    lat: 9.974810,
    lon: -83.057275
  },
  {
    lat: 9.595883,
    lon: -82.672754
  },
  {
    lat: 9.962636,
    lon: -84.103723
  },
  {
    lat: 9.923071,
    lon: -84.087244
  },
  {
    lat: 9.934400,
    lon: -84.095655
  },
  {
    lat: 9.851875,
    lon: -83.917127
  },
  {
    lat: 9.597406,
    lon: -84.614759
  },
  {
    lat: 9.972273,
    lon: -84.741102
  },
  {
    lat: 10.001351,
    lon: -84.215132
  },
  {
    lat: 10.088570,
    lon: -84.048277
  }
]

// const latitudes = [9.974810, 9.595883, 9.962636, 9.923071, 9.934400, 9.851875, 9.597406, 9.972273, 10.001351, 10.088570];
// const longitudes = [-83.057275, -82.672754, -84.103723, -84.087244, -84.095655, -83.917127, -84.614759, -84.741102, -84.215132, -84.048277];
const species = ['Tuna', 'Salmon', 'Cod', 'Barracuda'];
const suppliers = ['AngelCorp', 'EvilCorp', 'FunnyCorp', 'DummyCorp'];
const inspectionResultsGood = ["PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "PassedInspection", "FailedInspection"];
const inspectionResultsBad = ["PassedInspection", "PassedInspection", "PassedInspection", "FailedInspection", "FailedInspection"];

function generateTimestamp() {
  const startDate = moment().add(-30, 'd');
  const dates = []
  for (var i = -30; i < 0; i++){
    dates.push(moment().add(i, 'd').format());
  }
  return dates;
}


function createRandomObject(entryDate){
  const document = {
    user: users[random.integer(0, users.length - 1)],
    supplier: suppliers[random.integer(0, suppliers.length - 1)],
    species: species[random.integer(0, species.length - 1)],
    location: locations[random.integer(0, locations.length - 1)],
    timestamp: entryDate,
    version: 3
  }

  if (document.supplier == 'EvilCorp') {
    document.inspectionResult = inspectionResultsBad[random.integer(0, inspectionResultsBad.length - 1)]
  } else {
    document.inspectionResult = inspectionResultsGood[random.integer(0, inspectionResultsGood.length - 1)]
  }

  return document;
}

function createRandomObjectForDays(){

  const dates = generateTimestamp();

  const data = dates.map(date => {
    const documents = [];
    const numberOfObjectsForDay = random.integer(7, 13);
    // console.log(`object for day ${numberOfObjectsForDay}`);
    for( var i = 0; i < numberOfObjectsForDay; i++) {
      // console.log('pushing');
      documents.push(createRandomObject(date));
    }

    return documents;
  });

  const flattenedData = [].concat.apply([], data);
  return flattenedData;
}

module.exports = {
  createRandomObjectForDays
}
