function addElement() {
    const lista = document.getElementById('lista');
  
    const numeroElementos = lista.children.length;
  
    const nuevoElemento = document.createElement('li');
  
    nuevoElemento.classList.add('list-group-item');
  
    nuevoElemento.textContent = `Elemento ${numeroElementos + 1}`;
  
    lista.appendChild(nuevoElemento);
  }
  