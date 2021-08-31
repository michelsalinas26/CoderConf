function sponsorRender(sponsor){
    const divSponsor = document.getElementById('listaSponsor');
    divSponsor.innerHTML ='';
    for (const sponsor of sponsors) {
        divSponsor.innerHTML += sponsorUI(sponsor);
    }
}  

function agendaRender(speakers){
    const divAgenda = document.getElementById('agendaSpeaker');
    divAgenda.innerHTML ='';
    for (const speaker of speakers) {
        divAgenda.innerHTML += agendaUI(speaker);
    }
}   
