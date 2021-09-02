function agendaUI(speaker){
    return `<div class="fivePage-divGral-agenda">
        <h2 class="fivePage-divGral-agenda-h2">${speaker.horario}</h2>
        <h3 class="fivePage-divGral-agenda-h3">${speaker.nombre} ${speaker.apellido}</h3>
        <h4 class="fivePage-divGral-agenda-h4">${speaker.posicion} EN ${speaker.empresa}</h4>
        <p class="fivePage-divGral-agenda-p">Charla: ${speaker.charla}</p>
    </div>`
}

function sponsorUI(sponsor) {
    return `<img src="${sponsor.logo}" alt="Logo de Mercado libre">`
}

function speakerUI(speaker){
    return `<div class="carousel-item">
            <img src="${speaker.avatar}" class="d-block w-100" alt="Foto del speaker">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="carousel-h5">${speaker.nombre} ${speaker.apellido}</h5>
                <h6 class="carousel-h6">${speaker.posicion}</h6>
                <p class="carousel-p">${speaker.empresa}</p>
            </div>
        </div>`
}

function clockUI(tic){
    return `${tic.days} d 
            ${tic.hours} h  
            ${tic.minutes} m 
            ${tic.seconds} s`;
}

function spinnerUI(){
    return `<div id="spinnerForm" class="spinner-grow text-warning mt-4" role="status">
                <span class="visually-hidden">Enviando...</span>
            </div>`
}

function inscripcionUI(email){
    document.querySelector('.sixPage-div-h2').innerHTML = 'INSCRIPCIÓN REALIZADA';
    document.querySelector('.sixPage-div-p').innerHTML = `¡Te estaremos enviado un correo a ${email}!`;
    document.querySelector('.sixPage-div-h3').remove();
    document.querySelector('.sixPage-form').remove();
}

function notificacionUI(email){
    document.querySelector('.eightpage-div-title-h2').innerHTML = 'SOLICITUD ENVIADA';
    document.querySelector('.eightpage-div-title-h3').innerHTML = `¡Te estaremos enviado un correo a ${email}!`;
    document.querySelector('.eightpage-div-form').remove();
}


