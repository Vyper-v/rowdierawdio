// TODO:consumir stream de musca /song/:name y crear contexto de audio en navegador
// TODO:toma la clase .module
// TODO:muestrala en .module
// document.getElementByClassName
// document.querySelector(query)  => .classname #idname tag
// docuemnt.querySelectorAll(query) => [elements...]
// Element.appendChild
// document.createElement(tag)


// consume la ruta /randomdata y muestrala en consola por ahora
// async/await o .then .catch .finally
function postNumber(numbero = 0) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: numbero,
    }),
  };

  fetch("/api/number", options)
    .then((res) => res.text())
    .then(console.log);
}
// "/number/:index"
function getRandomNumber(index) {
  fetch(`/api/number/${index}`).then( (res)=>{return res.text()} ).then(console.log);
}
//.then().then().catch().finally()



function getArray(){
    fetch("/api/number").then( (res)=>{return res.json()} ).then(console.log)
}

