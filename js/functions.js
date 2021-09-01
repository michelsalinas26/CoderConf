function setConfig(json){
    appconfig.apiKey = json.apiKey;
    appconfig.authDomain = json.authDomain;
    appconfig.projectId  =  json.projectId; 
    appconfig.storageBucket =  json.storageBucket;
    appconfig.messagingSenderId = json.messagingSenderId;
    appconfig.appId = json.appId;
}