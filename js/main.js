// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, onValue,set} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";

function generarSpeaker(data){
    for (const objeto of data) {
        speakers.push(new Speaker(
            objeto.apellido,
            objeto.nombre,
            objeto.empresa,
            objeto.posicion,
            objeto.charla,
            objeto.horario,
            objeto.avatar,
            objeto.contacto,
            objeto.descripcion
        ));
    }
    const ordenados = speakers.sort(function(a,b){
        if (a.horario > b.horario) return 1;
        if (a.horario < b.horario) return -1;
        return 0;
    })

    agendaRender(ordenados);
    //speakerRender(speakers);
}

function generarSponsor(data){
    for (const objeto of data) {
        sponsors.push(new Sponsor(
            objeto.apellido,
            objeto.nombre,
            objeto.email,
            objeto.celular,
            objeto.empresa,
            objeto.logo            
        ));
    }        
    sponsorRender(sponsors);
}

fetch(GETSPEAKERS)
  .then(response => response.json())
  .then(json => generarSpeaker(json))
  .catch(e => console.log("ERROR"))

fetch(GETSPONSORS)
  .then(response => response.json())
  .then(json => generarSponsor(json))
  .catch(e => console.log("ERROR"))


fetch(GETCONFIG)
  .then(response => response.json())
  .then(json => setConfig(json))
  .catch(e => console.log("ERROR"))


//OBTENER FOMULARIO
document.getElementById('formInscripcion').addEventListener('submit',function(e){
    e.preventDefault();
    const data = {
        nombre: e.target[0].value,
        apellido: e.target[1].value,
        telefono: e.target[2].value,
        email:e.target[3].value,
        pais: e.target[4].value,
        esCoder: e.target[5].value
    }
    const app = initializeApp(appconfig);
    const db = getDatabase();
    set(ref(db, POSTPARTICIPANTES+data.telefono), data).then(()=>{
        console.log("WRITE");
    });
})

document.getElementById('formSponsor').addEventListener('submit',function(e){
    //PREVINIR EL REFRESCO
    e.preventDefault();
    //LOS INPUT
    const data = {
        nombre: e.target[0].value,
        email: e.target[1].value,
        celular: e.target[2].value        
    }
    const app = initializeApp(appconfig);
    const db = getDatabase();
    set(ref(db, POSTSPONSORS+data.celular), data).then(()=>{
        console.log("WRITE");
    });
})

if(isEvent(new Date(), eventday)){
    clockRender('clock', getTic(0));
}else{
    clockRender('clock',getTic(getDistance(new Date(),eventday)));
    var clock = setInterval(function() {
        const distance = getDistance(new Date(),eventday);
        // Time calculations for days, hours, minutes and seconds
        const tic = getTic(distance);
        // Output the result in an element with id="demo"
        console.log(tic);
        clockRender('clock', tic);
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(clock);
          clockRender('clock', getTic(0));
        }
      }, 1000);
}