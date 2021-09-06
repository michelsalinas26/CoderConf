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
    speakers.forEach((speaker, index) => {
        if(index == 0){
            divAgenda.innerHTML += agendaUI(speaker);
        }else{
            divAgenda.innerHTML += nextAgendaUI(speaker);
        }
    });
}   

function speakerRender(speakers){
    const divSpeaker = document.getElementById('listaSpeaker');
    divSpeaker.innerHTML ='';
    for (const speaker of speakers) {
        divSpeaker.innerHTML += speakerUI(speaker);
    }

    const avatars = document.querySelectorAll('.carousel-speakerGral-speaker-img');
    avatars.forEach(avatar => { avatar.onclick = selectedHandler });
}   

function clockRender(id,tic){
    document.querySelector('#clockDay').innerHTML = tic.days;
    document.querySelector('#clockHours').innerHTML = tic.hours;
    document.querySelector('#clockMinutes').innerHTML = tic.minutes;
    document.querySelector('#clockSeconds').innerHTML = tic.seconds;
}

function selectedHandler(e){
    const selected = speakers.find(speaker => speaker.identificador == this.id);
    cleanSelected();
    setSelected(this.id)
    selectedRender(selected);
}

function selectedRender(selected){
    const divSpeaker = document.getElementById('selectSpeaker');
    divSpeaker.innerHTML ='';
    divSpeaker.innerHTML = selectedUI(selected);
}