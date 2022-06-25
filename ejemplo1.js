const _private = new WeakMap();
class Libros {
    constructor(autor, nombre, numeropaginas) {
        const propiedades = {
            _autor: autor,
            _nombre: nombre,
            _numeropaginas: numeropaginas
        }
        _private.set(this, { propiedades })
    }
    set nombrelibro(nombre1) {
        return _private.get(this).propiedades["_nombre"] = nombre1
    }
    get mostrarlibro() {
        return _private.get(this).propiedades['_nombre'];
    }
}

let libro1 = new Libros("Gabriel Garcia Marquez", "Cien años de soledad", "350");
console.log(libro1);
let libro2 = new Libros("Homero", "Hiliada", "500");
console.log(libro2);
let libro3 = new Libros("Homero", "La odisea", "500");
console.log(libro3);