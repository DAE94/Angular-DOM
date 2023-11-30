
export function yellowSubmarine(idEtiqueta) {
  let array = document.getElementsByTagName(idEtiqueta)

  for (let element of array){
    element.style.color = "yellow";
  }
}

export function changeSize() {

  let array = document.getElementsByTagName("table")

  for (let element of array) {
    element.style.width = "400px";
  }

}

// export function firstChar (){
//
//   let array = document.getElementsByClassName("llista").innerHTML;
//
//   for(let i=0;i<array.length;i++){
//     let buildString = '<span class="customStyle">';
//     buildString += array[i].subString(0,1);
//     buildString += '</span>';
//     buildString += array[i].subString(1);
//     array[i].innerHTML = buildString;
//   }
// }

export function countWords(ID){
  let array = document.getElementById(ID).innerText.split(' ')
  return array.length
}

export function changeBackground (){

 let image = document.getElementById("image");
 image.src = "../assets/vaquitaMarina.jpg";
}
