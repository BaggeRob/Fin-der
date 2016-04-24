'use strict';
var superagent = require('superagent');
var Promise = require('bluebird');

function postToElasticcloud(elasticsearchEndpoint, path, authHeader, document) {
    return new Promise(function (resolve, reject) {
        superagent.post('https://' + (elasticsearchEndpoint + path)).set({ Authorization: authHeader }).send(JSON.stringify(document)).end(function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

function storeDocumentsInElasticserach(documents, elasticsearchEndpoint, username, password) {
  const authCredentials = `${username}:${password}`;
  const authHeader = `Basic ${new Buffer(authCredentials).toString('base64')}`;
  const path = '/fish/inspection';

  const runStats = {
    successCount: 0,
    failCount: 0
  }

  return Promise.map(documents, document => {
                return postToElasticcloud(elasticsearchEndpoint, path, authHeader, document)
                    .then(() => {
                            runStats.successCount++;
                        })
                    .catch(
                        (err) => {
                            runStats.failCount++;
                        }
                    );
          }, { concurrency: 20})
          .then(() => {
              console.log(runStats);
          });
}

module.exports = {
  storeDocumentsInElasticserach
}
