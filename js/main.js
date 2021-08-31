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
}

fetch(GETSPEAKERS)
  .then(response => response.json()) //1 JSON.parse(response)
  .then(json => generarSpeaker(json))
  .catch(e => console.log("ERROR"))


//Sponsors
sponsors.push(new Sponsor('Martinez','Shangela','sha@gmail.com',3764000000,'Google', 'images/Logo-Google.png'));
sponsors.push(new Sponsor('Montrease','Coco A.','coco@gmail.com',3764000000,'Mercado Libre', 'images/Logo-ML.png'));
sponsorRender(sponsors);