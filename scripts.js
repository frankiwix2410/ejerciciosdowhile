
function confirmacion() {
    let respuesta = prompt("¿Entiendes el mensaje mostrado? (si/no): ").toLowerCase();
    while (respuesta !== "si") {
        respuesta = prompt("Por favor, confirma que entiendes el mensaje (si/no): ").toLowerCase();
    }
    document.getElementById("output").innerText = "¡Confirmación exitosa!";
}

function adivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let adivinanza;
    do {
        adivinanza = parseInt(prompt("Adivina el número secreto entre 1 y 10: "));
    } while (adivinanza !== numeroSecreto);
    
    document.getElementById("output").innerText = "¡Felicidades! Adivinaste el número secreto.";
}


function juegoDados() {
    let continuar = true;
    while (continuar) {
        const dado = Math.floor(Math.random() * 6) + 1;
        alert("El número del dado es: " + dado);
        continuar = prompt("¿Deseas lanzar de nuevo? (si/no): ").toLowerCase() === "si";
    }
    document.getElementById("output").innerText = "¡Gracias por jugar!";
}


function calculadoraSuma() {
    let continuar = true;
    while (continuar) {
        const num1 = parseFloat(prompt("Ingresa el primer número: "));
        const num2 = parseFloat(prompt("Ingresa el segundo número: "));
        const suma = num1 + num2;
        alert("La suma es: " + suma);
        continuar = prompt("¿Deseas realizar otra suma? (si/no): ").toLowerCase() === "si";
    }
    document.getElementById("output").innerText = "¡Gracias por usar la calculadora!";
}


function acumuladorNotas() {
    let acumulado = 0;
    let continuar = true;
    while (continuar) {
        let calificacion = parseFloat(prompt("Ingresa una calificación entre 0 y 100: "));
        while (calificacion < 0 || calificacion > 100) {
            alert("Calificación fuera de rango. Intenta nuevamente.");
            calificacion = parseFloat(prompt("Ingresa una calificación entre 0 y 100: "));
        }
        acumulado += calificacion;
        continuar = prompt("¿Deseas ingresar otra calificación? (si/no): ").toLowerCase() === "si";
    }
    document.getElementById("output").innerText = "El total acumulado de las calificaciones es: " + acumulado;
}


function conversionTemperatura() {
    let continuar = true;
    while (continuar) {
        let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));
        let fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}°C son ${fahrenheit}°F.`);
        
        continuar = prompt("¿Deseas convertir otra temperatura? (si/no): ").toLowerCase() === "si";
    }
    document.getElementById("output").innerText = "¡Gracias por usar el convertidor de temperatura!";
}

function validacionEdad() {
    let edad;
    do {
        edad = parseInt(prompt("Ingresa tu edad (entre 1 y 120): "));
        if (edad < 1 || edad > 120) {
            alert("Edad no válida. Por favor, ingresa una edad válida.");
        }
    } while (edad < 1 || edad > 120);
    
    document.getElementById("output").innerText = `Edad confirmada: ${edad} años. ¡Gracias!`;
}

function encuestaSatisfaccion() {
    let respuesta;
    do {
        respuesta = prompt("¿Estás satisfecho con el servicio? (s/n): ").toLowerCase();
        if (respuesta !== "s" && respuesta !== "n") {
            alert("Respuesta no válida. Ingresa 's' para sí o 'n' para no.");
        }
    } while (respuesta !== "s" && respuesta !== "n");
    
    document.getElementById("output").innerText = `Respuesta registrada: ${respuesta === 's' ? 'si' : 'No'}. ¡Gracias!`;
}

function conversionMonedas() {
    let continuar = true;
    const tasaDeCambio = 0.85;  
    while (continuar) {
        let dolares = parseFloat(prompt("Ingresa la cantidad en dólares: "));
        let euros = dolares * tasaDeCambio;
        alert(`${dolares} USD son ${euros} EUR.`);
        
        continuar = prompt("¿Deseas realizar otra conversión? (si/no): ").toLowerCase() === "si";
    }
    document.getElementById("output").innerText = "¡Gracias por usar el convertidor de monedas!";
}


function juegoPiedraPapelTijera() {
    let opciones = ["piedra", "papel", "tijera"];
    let continuar = true;

    while (continuar) {
        let eleccionUsuario = prompt("Elige entre piedra, papel o tijera: ").toLowerCase();
        if (!opciones.includes(eleccionUsuario)) {
            alert("Opcion invalida, elige entre piedra, papel o tijera.");
            continue;
        }

        let eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
        alert("Computadora elige: " + eleccionComputadora);

        if (eleccionUsuario === eleccionComputadora) {
            alert("¡Es un empate!");
        } else if (
            (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
            (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
        ) {
            alert("¡Has ganado!");
        } else {
            alert("¡Has perdido!");
        }

        continuar = prompt("¿Quieres jugar de nuevo? (si/no)").toLowerCase() === "si";
    }

    document.getElementById("output").innerText = "¡Gracias por jugar!";
}


function calculadora() {
    let continuar = true;
    while (continuar) {
        let num1 = parseFloat(prompt("Ingresa el primer numero: "));
        let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
        let operacion = prompt("Ingresa la operación (+, -, *, /): ");

        if (["+", "-", "*", "/"].includes(operacion)) {
            let resultado;
            switch (operacion) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "*":
                    resultado = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        alert("No se puede dividir entre 0.");
                        continue;
                    }
                    resultado = num1 / num2;
                    break;
            }
            alert("El resultado es: " + resultado);
        } else {
            alert("Operacion no valida. Usa solo +, -, * o /.");
        }

        continuar = prompt("¿Deseas realizar otra operacion? (si/no)").toLowerCase() === "si";
    }

    document.getElementById("output").innerText = "¡Gracias por usar la calculadora!";
}

function controlInventario() {
    let inventario = [];
    let continuar = true;

    while (continuar) {
        let producto = prompt("Ingresa el nombre del producto: ");
        let cantidad = parseInt(prompt("Ingresa la cantidad: "), 10);

        inventario.push({ producto: producto, cantidad: cantidad });

        continuar = prompt("¿Deseas agregar otro producto? (si/no)").toLowerCase() === "si";
    }

    let inventarioTexto = "Inventario: \n";
    inventario.forEach(item => {
        inventarioTexto += `${item.producto}: ${item.cantidad}\n`;
    });

    alert(inventarioTexto);
    document.getElementById("output").innerText = "Inventario actualizado.";
}

function validadorContraseña() {
    let contraseña;
    let confirmarContraseña;
    
    do {
        contraseña = prompt("Ingresa una contraseña: ");
        confirmarContraseña = prompt("Confirma la contraseña: ");
        
        if (contraseña !== confirmarContraseña) {
            alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        }
    } while (contraseña !== confirmarContraseña);

    alert("Contraseña confirmada.");
    document.getElementById("output").innerText = "Contraseña confirmada con éxito.";
}

function simulacionBanco() {
    let saldo = 1000;
    let continuar = true;

    while (continuar) {
        let accion = prompt("¿Deseas hacer un deposito o retiro? (d/r): ").toLowerCase();
        let monto;

        if (accion === "d") {
            monto = parseFloat(prompt("¿Cuánto deseas depositar?"));
            saldo += monto;
            alert("Depósito exitoso. Saldo actual: $" + saldo);
        } else if (accion === "r") {
            monto = parseFloat(prompt("¿Cuánto deseas retirar?"));
            if (monto > saldo) {
                alert("No tienes suficiente saldo.");
            } else {
                saldo -= monto;
                alert("Retiro exitoso. Saldo actual: $" + saldo);
            }
        } else {
            alert("Opción no valida. Ingresa 'd' para depósito o 'r' para retiro.");
            continue;
        }

        continuar = prompt("¿Deseas hacer otra transacción? (si/no)").toLowerCase() === "si";
    }

    document.getElementById("output").innerText = "Transaccion finalizada. Saldo: $" + saldo;
}
