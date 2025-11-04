
const API_AVATAR=import.meta.env.VITE_API_AVATAR;

/**
 * @param {String} nombre 
 * @param {Number} size 
 * @param {String} background 
 * @param {String} color 
 * @returns {String}
 */

export function generarAvatar(nombre, size = 65, background = "fffff", color = "ffffff") {
    const parametros = new URLSearchParams({
        name: nombre,
        size: size.toString(),
        background,
        color
    });

    return `${API_AVATAR}?${parametros.toString()}`;
}