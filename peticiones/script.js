document.getElementById("btn").addEventListener("click", fetchData);
const user = ["name", "email", "street", "address", "city", "phone"];
function fetchData(){
    
    const resultDiv = document.getElementById("fetch");
    const usuario = document.getElementById("usuario");
    var url = "https://jsonplaceholder.typicode.com/users/"+usuario.value;
    console.log(usuario.value);
    //limpiar resultado
    resultDiv.textContent = "Cargando Datos...";

    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Error: ${response.status}${response.statusText}`);

        }
        return response.json();//convertir la respuesta a json

    })
    .then(data =>{
        resultDiv.textContent = JSON.stringify(data,user,2);//mostrar nuestros datos
  

    })
    .catch(error => {
        resultDiv.textContent = `Error:${error.message}`;
    })
}