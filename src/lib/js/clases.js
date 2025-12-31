

export class Login{
    correo;
    contrasena;

    /**
     * @param {String} correo
     * @param {String} contrasena
     */

    constructor(correo,contrasena){
        this.correo=correo;
        this.contrasena=contrasena;
    }
}

export class contacto{
    nombre;
    apellidos;
    telefono;
    correo;
    direccion;
    categoria;
    color_avatar;

    /**
     * @param {String} nombre
     * @param {String} apellidos
     * @param {String} telefono
     * @param {String} correo
     * @param {String} direccion
     * @param {String} categoria
     * @param {String} color_avatar
     */

    constructor(nombre, apellidos, telefono, correo, direccion, categoria, color_avatar){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.telefono=telefono;
        this.correo=correo;
        this.direccion=direccion;
        this.categoria=categoria;
        this.color_avatar=color_avatar;
    }
}

export class Usuario{
    nombre;
    apellidos;
    telefono;
    correo;
    contrasena;
    rol_ids;

    /**
     * @param {string} nombre 
     * @param {string} apellidos 
     * @param {string} telefono 
     * @param {string} correo 
     * @param {string} contrasena 
     */

    constructor(nombre, apellidos, telefono, correo, contrasena){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.telefono=telefono;
        this.correo=correo;
        this.contrasena=contrasena;
        this.rol_ids=[2];
    }
}