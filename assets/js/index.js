
// CLASE PROPIERTARIO
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es ${this.nombre}. Su domicilio es: ${this.direccion}. El numero de contacto es: ${this.telefono}
        `;
    }
}

// CLASE ANIMAL
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }

    get tipo() {
        return `El tipo de animal es un ${this._tipo},`;
    }
}

// CLASE MASCOTA
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return ` mientras que el nombre de la mascota es ${this._nombreMascota} `;
    }
    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }

    get enfermedad() {
        return `y la enfermedad es ${this._enfermedad}.`;
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }

}

/*
console.log(tipo.nombre);
console.log(tipo.direccion);
console.log(tipo.telefono);
console.log(tipo._tipo);
console.log(tipo.tipo) //El tipo de animal es un perro
console.log(tipo._nombreMascota);
console.log(tipo.nombreMascota)//y la enfermedad es parasitos
console.log(tipo._enfermedad);
console.log(tipo.enfermedad); //y la enfermedad es parasitos
console.log(tipo.datosPropietario());
console.log((tipo.tipo), (tipo.nombreMascota), (tipo.enfermedad));
*/


let formulario = document.querySelector('form')

let agregando = (event) => {
    event.preventDefault()
    let propietario = document.getElementById('propietario').value
    let direccion = document.getElementById('direccion').value
    let telefono = document.getElementById('telefono').value
    let tipo = document.getElementById('tipo').value  
    let nombreMascota = document.getElementById('nombreMascota').value
    let enfermedad = document.getElementById('enfermedad').value

    switch(tipo){
        case 'perro':
            let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad)
            mostrarResultado(perro)
            break
        case 'gato':
            let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad )
            mostrarResultado(gato)
            break
        case 'conejo':
            let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad )
            mostrarResultado(conejo)
            break
        default:  
            break
    }
}



let mostrarResultado = (valor_switch) => {
    let resultado = document.querySelector('#resultado ul')
    resultado.innerHTML = "";

    let li1 = document.createElement('li')
    li1.innerHTML = `${valor_switch.datosPropietario()}`;
    
    let li2 = document.createElement('li')
    //li2.innerHTML = `El tipo de animal es un ${valor_switch._tipo}, mientras que el nombre de la mascota es: ${valor_switch._nombreMascota} y las enfermedad es: ${valor_switch._enfermedad}`
    li2.innerHTML = `${valor_switch.tipo} ${valor_switch.nombreMascota} ${valor_switch.enfermedad}`
    resultado.appendChild(li1)
    resultado.appendChild(li2)

}

formulario.addEventListener('submit', agregando)





    


