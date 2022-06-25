class Libros {
    constructor(autor, nombre, numeropaginas) {
        this.autor = autor;
        this.nombre = nombre;
        this.numeropaginas = numeropaginas;
    }
}

let libro1 = new Libros("Gabriel Garcia Marquez", "Cien años de soledad", "350");
console.log(libro1);
let libro2 = new Libros("Homero", "Hiliada", "500");
console.log(libro2);
let libro3 = new Libros("Homero", "La odisea", "500");
console.log(libro3);