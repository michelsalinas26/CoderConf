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