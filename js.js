

const mimes=[
    "video/x-msvideo",
    "image/gif",
    "image/x-icon",
    "image/jpeg",
    "video/mpeg",
    "video/ogg",
    "image/webp",
    "image/tiff",
    "image/png"
]

const nuevoArchivo = [];

function validarFile(){

    const inpFile = document.getElementById("inpFile");
    if (mimes.includes(inpFile.files[0].type) )  {

        if (inpFile.files[0].size <= 100000) {
            
        }else{
            inpFile.value =  null;
            alert("el archivo debe pesar menos de 2mb")
        }
        
    }else{
        inpFile.value =  null;
        alert("solo se acepta archivo jpeg, png " )
        
    }
}

function validarMultiple(){
 
    const archivoMultiple = document.getElementById("archivoMultiple");

    for (let index = 0; index < archivoMultiple.files.length; index++) {

        if (archivoMultiple.files[index].type="application/pdf") {
            if (archivoMultiple.files[index].size <= 2000000) {
                nuevoArchivo.push(archivoMultiple.files[index])
            }
        }
    }

    archivoMultiple.value =  null;

    mostrarHtml()
    
}

function mostrarHtml(){
    const constanciasLista = document.getElementById("constanciasLista");
    let html = "";
    for (let index = 0; index < nuevoArchivo.length; index++) {
       html+=`
       <div class="input" >  ${nuevoArchivo[index].name} 
       <a href="">Descargar</a>
       <a href="">Eliminar</a>
       </div>

       `   
    }
    constanciasLista.innerHTML=html;

}

const palabra = "me voy de vacaciones";
const a = "voy";
const b = palabra.includes(a);//true

const array = [
    "me", "voy", "de", "vacaciones"
]
const c = array.includes(a);//true

function funcionesIniciales(){
    addMimes();
}

function addMimes(){
    const inpFile = document.getElementById("inpFile");
    inpFile.setAttribute("accept",mimes)
}

function enviarDatos(){
    enviarFormData()
    // const inpUsuario = document.getElementById("inpUsuario").value;
    // const inpPassword = document.getElementById("inpPassword").value;
    // const inpFile = document.getElementById("inpFile")

    // const objeto = {
    //     usuario: inpUsuario,
    //     password: inpPassword,
    //     file: inpFile.files[0]
    // }




    // const url = "";

    // fetch(url,{
    //     method:"POST",
    //     body: JSON.stringify(objeto)
    // })
}


function enviarFormData(){
    const inpUsuario = document.getElementById("inpUsuario").value;
    const inpPassword = document.getElementById("inpPassword").value;
    const inpFile = document.getElementById("inpFile")

    const formData = new FormData();
    formData.append('usuario', inpUsuario);
    formData.append('password', inpPassword);
    formData.append('file',  inpFile.files[0]);
    for (let index = 0; index < nuevoArchivo.length; index++) {
        formData.append('constancia',  nuevoArchivo[index]);
    }
    console.log(formData)

    const url = "http://www.google.com";

    fetch(url,{
        method:"POST",
        body: formData
    })

}