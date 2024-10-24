// Función que se llama al hacer clic en el botón
        function calcularFactorial() {
            num = prompt("Ingresa un número para calcular el factorial:");

            // Validación del dato ingresado, debe ser un número no negativo
            while (!esNumeroValido(num)) {
                alert("Error: Por favor ingresa un número válido mayor o igual a cero.");
                num = prompt("Ingresa un número válido para calcular el factorial:");
            }

            // Convertimos el número a entero para el cálculo
            num = parseInt(num);

            // definimos variable resultado y la igualamos al factorial del número ingresado
            const resultado = factorial(num);

            // Mostramos el resultado tanto en consola como en el html
            console.log("El factorial de " + num +" es " + resultado + ".");
            document.getElementById("impresion").innerHTML = "El factorial de " +num +" es "+resultado+".";
        }

        // Función que valida si es un numero mayor o igual a cero y no permite espacios o null
        function esNumeroValido(valor) {
            return !isNaN(valor) && valor !== '' && valor !== null && valor >= 0;
        }

        // Función para calcular el factorial usando condicional y ciclo for 
        function factorial(numero) {

            // Definimos variable resultado y la inicializamos a 1
            let resultado = 1;

            // Si el número es 0 o 1, el factorial es 1
            if (numero === 0 || numero === 1) {
                return resultado;
            } else { 
                // Bucle for que multiplica los números del 1 al n
                for (let i = 1; i <= numero; i++) {
                    resultado *= i;
                }
            }

            return resultado;
        }