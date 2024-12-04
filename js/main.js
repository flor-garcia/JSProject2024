
const Users = []

// FUNCIONES DE CREACION DE USUARIO

function emptyFieldValidation(message){
    let dato = prompt(message)
    while(dato === ""){
        alert("El campo no puede estar vacio")
        dato = prompt(message)
    }
    return dato
}


function emailValidation(email){
    let email = prompt(email)
    while(Users.some(user => user.email === email)){
        alert("El correo ingresado ya se encuentra registrado, por favor usa otro correo")
        email = prompt("Ingrese un correo electrónico diferente")
    } 

    return email
}

function passwordValidation(){
    let password = emptyFieldValidation("Ingrese una contraseña");
    let secondPassword = emptyFieldValidation("Ingrese nuevamente la contraseña");


    while(password !== secondPassword){
        alert("Las contraseñas no coinciden")
        password = prompt("Ingrese una contraseña");
        secondPassword = prompt("Ingrese nuevamente la contraseña");
    }

    return password
}

function singIn(){
    let firstName = emptyFieldValidation("Ingrese su nombre");
    let lastName = emptyFieldValidation("Ingrese su apellido");
    let birthDate = emptyFieldValidation("Ingrese la fecha de nacimiento en formado DD/MM/AAAA");
    let email = emailValidation("Ingrese su correo electrónico")
    let password = passwordValidation()

    
    const newUser = {
        firstName,
        lastName,
        birthDate,
        email,
        password
    }

    return newUser
}

function addUser(){
    const User = singIn()
    if(User){
        Users.push(User);
        alert("El usuario se ha registrado correctamente")
    } else{
        alert("No se pudo registrar el usuario")
    }

    return Users
}


console.log(Users)




function menu(){
    let flag = true

    while(flag){
        let menuDesplegable = Number(prompt("Bienvenidos a la vinoteca Vinitus, elija una opción para poder empezar: \n 1-Crear usuario\n 2-Ingresar a la cuenta\n 3-Agregar un producto al carrito\n 4-Eliminar un producto del carrito \n 5-Ir a pagar"))

        switch(menuDesplegable){
            case 0: 
                return
            case 1:
                addUser()
                break;
            case 2:
                alert("Hola")
                break;
            case 3:
                alert("Hola")
                break;
            case 4:
                alert("Hola")
                break;
            case 5:
                alert("Hola")
                break;
            default:
                alert("La opción elegida no es válida")
                break;
        }
    }
}

menu()