const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");

const GenerarUsuario = async () => {
    try {
        const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    console.log(datos);
    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;

    } catch (error) {
        console.log(error);
    }
}


document.addEventListener("DOMContentLoaded", GenerarUsuario);
