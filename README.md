![alt tag](https://github.com/BaggeRob/Fin-der/blob/master/logo.png)
# Fin-der

Open source resources for the project Finder during Fishackathon 2016
Link to the live dashboard: [I'm an inline-style link with title](https://c0746c228e7c9263ac770c7b3343112a.eu-west-1.aws.found.io/app/kibana#/dashboard/fish?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:7,id:Number-of-Inspections-Passed-slash-Failed,panelIndex:6,row:1,size_x:6,size_y:4,type:visualization),(col:1,id:'Number-of-inspections-carried-out-in-an-area-(Darker-colour-equal-Higher-density)',panelIndex:7,row:1,size_x:6,size_y:5,type:visualization),(col:7,id:Number-of-Passed-slash-Failed-Inspection-per-Supplier,panelIndex:9,row:5,size_x:6,size_y:4,type:visualization),(col:1,id:'Number-of-Passed-slash-Failed-Inspections-over-Time-(Passed-in-Blue,-Failed-in-Red)',panelIndex:10,row:6,size_x:6,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'*')),title:fish,uiState:(P-6:(vis:(colors:(failedinspection:%23EA6460,passedinspection:%231F78C1),legendOpen:!f)),P-9:(vis:(legendOpen:!f)))) "Fin-der data dashboard")


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
