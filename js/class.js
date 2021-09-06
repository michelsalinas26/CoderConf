class Speaker{
    constructor(apellido, nombre, empresa, posicion, charla, horario, avatar, contacto, descripcion,identificador){
        this.apellido = apellido;
        this.nombre   = nombre;
        this.empresa  = empresa;
        this.posicion = posicion;
        this.charla   = charla;
        this.horario  = horario;
        this.avatar   = avatar;
        this.contacto = contacto;
        this.descripcion = descripcion;
        this.identificador = identificador;
    }   

    isSpeaking(now, next){
        console.log(this.horario);
        console.log(now);
        console.log(next);
        return (this.horario <= now) && (now < next);
    }
}

class Sponsor{
    constructor(apellido, nombre, email, celular, empresa, logo){
        this.apellido = apellido;
        this.nombre   = nombre;
        this.email = email;
        this.celular = celular;
        this.empresa  = empresa;
        this.logo = logo;
    }   
}