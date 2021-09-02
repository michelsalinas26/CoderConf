import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref,set} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
//------------------------------- GENERADORES-------------------------------
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

function sendData(url,clave,data){
    const app = initializeApp(appconfig);
    const db = getDatabase();
    set(ref(db, url+clave), data).then(()=>{
        submitState(true);
        if(url === POSTPARTICIPANTES){
            inscripcionUI(data.email);
        }else{
            notificacionUI(data.email);
        }
    });
}
//------------------------------- FETCHS-------------------------------
fetch(GETSPEAKERS)
  .then(response => response.json())
  .then(json => generarSpeaker(json))
  .catch(e => console.log("ERROR AL CARGAR SPEAKERS"))

fetch(GETSPONSORS)
  .then(response => response.json())
  .then(json => generarSponsor(json))
  .catch(e => console.log("ERROR AL CARGAR SPONSOR"))

fetch(GETCONFIG)
  .then(response => response.json())
  .then(json => setConfig(json))
  .catch(e => console.log("ERROR AL CARGAR CONFIGURACION"))
//------------------------------- EVENTOS -------------------------------
document.getElementById('formInscripcion').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(grecaptcha.getResponse());
    const data = {
        nombre: e.target[0].value,
        apellido: e.target[1].value,
        telefono: e.target[2].value,
        email:e.target[3].value,
        pais: e.target[4].value,
        esCoder: e.target[5].value
    }
    this.reset();
    this.innerHTML += spinnerUI();
    sendData(POSTPARTICIPANTES,data.telefono, data);
})

document.getElementById('formSponsor').addEventListener('submit',function(e){
    e.preventDefault();
    const data = {
        nombre: e.target[0].value,
        email: e.target[1].value,
        celular: e.target[2].value        
    }
    this.reset();
    this.innerHTML += spinnerUI();
    sendData(POSTSPONSORS,data.celular, data);
})
//------------------------------- MAIN -------------------------------
submitState(true);
if(isEvent(new Date(), eventday)){
    clockRender('clock', getTic(0));
}else{
    clockRender('clock',getTic(getDistance(new Date(),eventday)));
    var clock = setInterval(function() {
        const distance = getDistance(new Date(),eventday);
        const tic = getTic(distance);
        clockRender('clock', tic);
        if (distance < 0) {
          clearInterval(clock);
          clockRender('clock', getTic(0));
        }
    }, 1000);
}