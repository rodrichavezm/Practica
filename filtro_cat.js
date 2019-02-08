function filtro()
{
  let ropa = document.getElementsByClassName('Ropa');
  let coleccionable = document.getElementsByClassName('Coleccionables');
  let cocina = document.getElementsByClassName('Cocina');
  let casa = document.getElementsByClassName('Casa');
  switch (document.getElementById('filtro').value) {
    case "Todo":
    for (var i=0;i<ropa.length;i+=1){
      ropa[i].style.display = 'block';
    }
    for (var i=0;i<cocina.length;i+=1){
      cocina[i].style.display = 'block';
    }
    for (var i=0;i<coleccionable.length;i+=1){
      coleccionable[i].style.display = 'block';
    }
    for (var i=0;i<casa.length;i+=1){
      casa[i].style.display = 'block';
    }

      break;
    case "Ropa":
    for (var i=0;i<ropa.length;i+=1){
      ropa[i].style.display = 'block';
    }
    for (var i=0;i<cocina.length;i+=1){
      cocina[i].style.display = 'none';
    }
    for (var i=0;i<coleccionable.length;i+=1){
      coleccionable[i].style.display = 'none';
    }
    for (var i=0;i<casa.length;i+=1){
      casa[i].style.display = 'none';
    }

      break;
    case "Coleccionables":
    for (var i=0;i<ropa.length;i+=1){
      ropa[i].style.display = 'none';
    }
    for (var i=0;i<cocina.length;i+=1){
      cocina[i].style.display = 'none';
    }
    for (var i=0;i<coleccionable.length;i+=1){
      coleccionable[i].style.display = 'block';
    }
    for (var i=0;i<casa.length;i+=1){
      casa[i].style.display = 'none';
    }
      break;
    case "Cocina":
    for (var i=0;i<ropa.length;i+=1){
      ropa[i].style.display = 'none';
    }
    for (var i=0;i<cocina.length;i+=1){
      cocina[i].style.display = 'block';
    }
    for (var i=0;i<coleccionable.length;i+=1){
      coleccionable[i].style.display = 'none';
    }
    for (var i=0;i<casa.length;i+=1){
      casa[i].style.display = 'none';
    }

      break;
    case "Casa":
    for (var i=0;i<ropa.length;i+=1){
      ropa[i].style.display = 'none';
    }
    for (var i=0;i<cocina.length;i+=1){
      cocina[i].style.display = 'none';
    }
    for (var i=0;i<coleccionable.length;i+=1){
      coleccionable[i].style.display = 'none';
    }
    for (var i=0;i<casa.length;i+=1){
      casa[i].style.display = 'block';
    }
      break;
    default:

  }
}
