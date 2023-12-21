const searchInput = document.getElementById("search_item");
// Agregando el evento listener al campo de entrada (searchInput) y
// escucha el evento "input", cada vez que se modifique el contenido del campo.
searchInput.addEventListener("input", function () {
  /**
   * Se obtiene el valor actual del campo de entrada searchInput y convierte a minúsculas utilizando toLowerCase(),
   *  lo que significa que la búsqueda no será sensible a mayúsculas y minúsculas.
   */
 
  const searchText = searchInput.value.toLowerCase().trim();
  console.log("searchText: ",searchText)
  /**
   * Obteniendo todos los elementos del DOM que tienen la clase "lista_amigo",
   * cada elemento representan a los amigos en la lista que se desea buscar.
   */

  const contactList = document.getElementsByClassName("list_product");
  // Variable para rastrear si se encontró al menos un amigo
  let amigo_encontrado = false;
  // Un for para iterar sobre cada elemento en la lista de amigos:
  for (let i = 0; i < contactList.length; i++) {
    /**
     * En cada iteración, se toma un elemento de la lista y se almacena en contact,
     *  esto representa un amigo en particular
     */
    const contact = contactList[i];
    //Almacenando información adicional sobre el amigo que se utilizará para la búsqueda
    const searchData = contact.getAttribute("data-search").toLowerCase();
    console.log("search-data: ", searchData)
    /**
     * Se compara el texto de búsqueda searchText con el valor del atributo,"data-search" de cada amigo searchData
     */
    if (searchData.includes(searchText)) {
      contact.style.display = "inlineblock";
      amigo_encontrado = true; // Se encontró al menos un amigo
    } else {
      contact.style.display = "none";
    }
  }

  let mensaje = document.querySelector(".mensaje");
  if (!amigo_encontrado) {
    if (!mensaje) {
      mensaje = document.createElement("p");
      //mensaje = document.createElement("div")
      mensaje.textContent = "   Producto no encontrado 😭";
      mensaje.classList.add("mensaje");
      //list__product.appendchid(mensaje)
      console.log(mensaje)
      let buscadorAmigo = document.querySelector("#search_item");
      buscadorAmigo.parentNode.insertBefore(mensaje, buscadorAmigo.nextSibling);
    }
    console.log("No se encontró ningún amigo");
  } else {
    // Si hay amigos encontrados, eliminamos el mensaje si existe
    if (mensaje) {
      mensaje.remove();
    }
  }  
});

