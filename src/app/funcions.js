export function yellowSubmarine(idEtiqueta) {
  let array = document.getElementsByTagName(idEtiqueta)

  for (let element of array){
    element.style.color = "yellow";
  }
}
export function changeSize() {

  let array = document.getElementsByTagName("table")

  for (let element of array){
    element.style.width="400px";

  }


}
