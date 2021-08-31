function agendaUI(speaker){
    return `<div class="fivePage-divGral-agenda">
        <h2 class="fivePage-divGral-agenda-h2">${speaker.horario}</h2>
        <h3 class="fivePage-divGral-agenda-h3">${speaker.nombre} ${speaker.apellido}</h3>
        <h4 class="fivePage-divGral-agenda-h4">${speaker.posicion} EN ${speaker.empresa}</h4>
        <p class="fivePage-divGral-agenda-p">Charla: ${speaker.charla}</p>
    </div>`
}

function sponsorUI(sponsor) {
    return `<div><img src="${sponsor.logo}" alt="Logo de Mercado libre"></div>`
}