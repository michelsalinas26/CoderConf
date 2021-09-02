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

function speakerRender(speakers){
    const divSpeaker = document.getElementById('listaSpeaker');
    divSpeaker.innerHTML ='';
    for (const speaker of speakers) {
        divSpeaker.innerHTML += speakerUI(speaker);
    }
}   

function clockRender(id,tic){
    document.querySelector('#clockDay').innerHTML = tic.days;
    document.querySelector('#clockHours').innerHTML = tic.hours;
    document.querySelector('#clockMinutes').innerHTML = tic.minutes;
    document.querySelector('#clockSeconds').innerHTML = tic.seconds;
}
