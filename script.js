const alumnos = [
    {
        nombre: "angel",
        matricula: "236020088",
        grupo: "6s11"
    },

    {
        nombre: "alexia",
        matricula: "236020128",
        grupo: "6s11"
    },

    {
        nombre: "eduardo ",
        matricula: "236020102",
        grupo: "6s11"
    },

    {
        nombre: "alexander",
        matricula: "236020045",
        grupo: "6s11"
    },

    {
        nombre: "yahir",
        matricula: "236020216",
        grupo: "6s11"
    },

    {
        nombre: "jacobo",
        matricula: "236020025",
        grupo: "6s11"
    },

    {
        nombre: "david",
        matricula: "236020010",
        grupo: "6s12"
    },

    {
        nombre: "alex",
        matricula: "236020011",
        grupo: "6s12"
    },

    {
        nombre: "juan",
        matricula: "236020012",
        grupo: "6s12"
    },

    {
        nombre: "matadamas",
        matricula: "236020013",
        grupo: "6s12"
    },

    {
        nombre: "luis",
        matricula: "236020014",
        grupo: "6s12"
    },

    {
        nombre: "jorge",
        matricula: "236020015",
        grupo: "6s12"
    },
];

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document
    .getElementById("nombre")
    .value.toLowerCase();

    const matricula = document
    .getElementById("matricula")
    .value;

    const grupo = document
    .getElementById("grupo")
    .value.toLowerCase();

    const alumno = alumnos.find(a => 
    a.nombre.toLowerCase().trim() === nombre.trim() &&
    a.matricula === matricula &&
    a.grupo.toLowerCase().trim() === grupo.trim()
);

    if(alumno){

        document.body.innerHTML = `
        
        <div class="horario-container">
        
            <h1 style="color:white; text-align:center;">
                Horario Grupo ${grupo}
            </h1>

            <br>

            <img 
                src="horarios/${grupo}.jpeg" 
                class="horario"
            >

        </div>

        `;

    }else{

        document.getElementById("mensaje")
        .innerText = "Acceso denegado";

    }

});