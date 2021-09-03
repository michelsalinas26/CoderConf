function agendaUI(speaker){
    return `<div class="fivePage-divGral-agenda">
    <div class="fivePage-divGral-agenda-divOne">
        <img src="./images/imagenFlechaAgenda.png" alt="Imagen de flecha - agenda">
    </div>
    <div class="fivePage-divGral-agenda-divTwo">
        <h2 class="fivePage-divGral-agenda-h2 agendaColorGris">${speaker.horario}</h2>
        <h3 class="fivePage-divGral-agenda-h3 agendaColorGris">${speaker.nombre} ${speaker.apellido}</h3>
        <h4 class="fivePage-divGral-agenda-h4 agendaColorGris">${speaker.posicion} EN ${speaker.empresa}</h4>
        <p class="fivePage-divGral-agenda-p agendaColorGris">${speaker.charla}</p>
    </div>
</div>`


}

function sponsorUI(sponsor) {
    return `<img src="${sponsor.logo}" alt="Logo de Mercado libre">`
}

function speakerUI(speaker){
    return `<div class="carousel-speakerGral-speaker">
            <img src="${speaker.avatar}" class="carousel-speakerGral-speaker-img rounded-circle" width="220" height="220" alt="Foto del speaker" id="${speaker.identificador}">
            <div class="carousel-speakerGral-speaker-div">
                <div class="carousel-speakerGral-speaker-div-subdiv">
                    <h5 class="carousel-speakerGral-speaker-div-h5">${speaker.nombre} ${speaker.apellido}</h5>
                    <img src="./images/iconoLinkedin.png" alt="Icono de linkedin" class="carousel-speakerGral-speaker-div-img">
                </div>
                <h6 class="carousel-speakerGral-speaker-div-h6">${speaker.posicion}</h6>
                <p class="carousel-speakerGral-speaker-div-p">${speaker.empresa}</p>
            </div>
            </div>`
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

function selectedUI(speaker){
    return `<div class="fourPage-divInvitado-divDatos">
                <div class="fourPage-divInvitado-divDatos-div">
                    <img src="${speaker.avatar}" alt="Foto del invitado especial" class="fourPage-divInvitado-divDatos-div-img rounded-circle" width="220" height="220">
                </div>
                <div class="fourPage-divInvitado-divDatos-div2">
                    <h2 class="fourPage-divInvitado-divDatos-h2">${speaker.nombre} ${speaker.apellido}</h2>
                    <img src="./images/iconoLinkedin.png" alt="Icono de linkedin" class="fourPage-divInvitado-divDatos-img">
                </div>
                <h3 class="fourPage-divInvitado-divDatos-h3">${speaker.posicion}</h3>
                <h4 class="fourPage-divInvitado-divDatos-h4">${speaker.empresa}</h4>
                <p class="fourPage-divInvitado-divDatos-p">${speaker.descripcion}</p>
                <h5 class="fourPage-divInvitado-divDatos-h5">${speaker.contacto}</h5>
            </div>`
}