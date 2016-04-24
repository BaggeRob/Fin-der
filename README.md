# Finder

Open source resources for the project Finder during Fishackathon 2016


# Usage

To make full use of this code you will need an Elasticsearch cluster with the Kibana plugin enabled.

1. Go to cloud.elastic.com
2. Create an account through starting a trial
3. Log on to your account and create a cluster
4. Configure the shield plugin through adding an admin user and then saving
5. Enable the Kibana plugin in the configuration
6. Clone this repository
7. Run the data generation script with

```
node generate-data-and-store-in-elasticsearch.es6 <elasticcloudEndpoint> <username> <password>
```

For example:

```
node generate-data-and-store-in-elasticsearch.es6 aafe860dfd296d3c6794bae5533fc2.eu-west-1.aws.found.io:9243 <username> <password>
```

where the <elasticcloudEndpoint> can be found in 'Overview' in your Elastic Cloud account

8. Open Kibana
9. Go to Settings and enable indexing of the index 'fish'
10. Open the tab object and click Import
11. Import the json file kibana-dashboard-definition.json
12. After opening Dashboard and the file 'fish' you should now see visualisation for the time frame you have selected in the top right corner of the screen.
