const API_KEY = "0c3ebe1f4b81a379ec9f4414bb17d0f4";
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
}

function handleGeoError(position){
    console.log('Can`t access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        
    }
}

function init(){
    loadCoords();
};

init();