const elasticsearchClient = require('./elasticsearch-client.es6');
const finderDataGenerator = require('./generate-finder-data.es6');


const elasticcloudEndpoint = process.argv[2];
const username = process.argv[3];
const password = process.argv[4];

if(!elasticcloudEndpoint || !username || !password) {
  console.log('Parameters missing. Usage:');
  console.log('node generate-data-and-store-in-elasticsearch.es6 <elasticcloudEndpoint> <username> <password>');
  return Promise.reject('');
}


const data = finderDataGenerator.createRandomObjectForDays();
elasticsearchClient.storeDocumentsInElasticserach(data, elasticcloudEndpoint, username, password);
