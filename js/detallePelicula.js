// como extraemos el parametro de la URL
// console.log (window.location.search);

//instancia para trabajar con los parametros
const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
console.log(parametroCodigo.get("codigo"));

//aqui hacemos el READ

let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];

//busco la peli q me interesa
const peliculaBuscada = listaPeliculas.find(
  (pelicula) => pelicula.codigo === parametroCodigo.get("codigo")
);

console.log(peliculaBuscada);

//dibujar la card
let seccion = document.getElementById("seccionDetalle");
seccion.innerHTML = `
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${peliculaBuscada.imagen}"
          class="img-fluid rounded-start"
          alt="${peliculaBuscada.titulo}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${peliculaBuscada.titulo}</h5>
          <p class="card-text">
          ${peliculaBuscada.descripcion}
          </p>
          <p class="card-text">
            Genero:
            <span class="badge rounded-pill bg-info"> ${peliculaBuscada.genero}</span>
          </p>
          <p class="card-text">${peliculaBuscada.anio}</p>
          <p class="card-text">${peliculaBuscada.duracion}</p>
          <p class="card-text">${peliculaBuscada.pais}</p>
          <p class="card-text">
          ${peliculaBuscada.reparto}
          </p>
          <p class="card-text">${peliculaBuscada.director}</p>
        </div>
      </div>
    </div>
  </div>
  `;
