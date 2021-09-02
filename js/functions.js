function setConfig(json){
    appconfig.apiKey = json.apiKey;
    appconfig.authDomain = json.authDomain;
    appconfig.projectId  =  json.projectId; 
    appconfig.storageBucket =  json.storageBucket;
    appconfig.messagingSenderId = json.messagingSenderId;
    appconfig.appId = json.appId;
}

function isEvent(now, eventday){
    const distance = getDistance(now,eventday);
    return distance < 0;
}

function getTic(distance){
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
}

function getDistance(now,eventday){
  return eventday.getTime() - now.getTime();
}