// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Array para almacenar los nombres de amigos
    const amigos = [];
  
    // Referencias a elementos del DOM
    const inputAmigo = document.getElementById('amigo');
    const btnAgregar = document.getElementById('btnAgregar');
    const btnSortear = document.getElementById('btnSortear');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
  
    // Función para agregar un amigo a la lista
    function agregarAmigo() {
      const nombre = inputAmigo.value.trim();
      
      // Validar que se ingrese un nombre válido
      if (nombre === '') {
        alert("Por favor, ingrese un nombre válido.");
        return;
      }
      
      amigos.push(nombre);
      actualizarLista();
      inputAmigo.value = '';
      inputAmigo.focus();
    }
  
    // Función para actualizar la visualización de la lista de amigos
    function actualizarLista() {
      listaAmigos.innerHTML = '';
      amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
      });
    }
  
    // Función para realizar el sorteo aleatorio
    function sortearAmigo() {
      if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
      }
      
      const indice = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indice];
      resultado.textContent = "El amigo secreto es: " + amigoSorteado;
    }
  
    // Asociar eventos a los botones
    btnAgregar.addEventListener('click', agregarAmigo);
    btnSortear.addEventListener('click', sortearAmigo);
  });
  