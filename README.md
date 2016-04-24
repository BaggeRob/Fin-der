# Finder

Open source resources for the project Finder during Fishackathon 2016


# Usage
## Setup
To make full use of this code you will need an Elasticsearch cluster with the Kibana plugin enabled.

1. Go to cloud.elastic.com
2. Create an account through starting a trial
3. Log on to your account and create a cluster
4. Configure the shield plugin through adding an admin user and then saving
5. Enable the Kibana plugin in the configuration
6. Clone this repository


## Data generation
Run the data generation script with

```
node generate-data-and-store-in-elasticsearch.es6 <elasticcloudEndpoint> <username> <password>
```

For example:

```
node generate-data-and-store-in-elasticsearch.es6 aafsf2.eu-west-1.aws.found.io:9243 <username> <password>
```

where the <elasticcloudEndpoint> can be found in 'Overview' in your Elastic Cloud account and the username/password combination is what you created earlier in the setup-phase

## Visualisation

1. Open Kibana
2. Go to Settings and enable indexing of the index 'fish'
3. Open the tab object and click Import
4. Import the json file kibana-dashboard-definition.json
5. After opening Dashboard and the file 'fish' you should now see visualisation for the time frame you have selected in the top right corner of the screen.
