document.getElementById("calculadora").addEventListener("submit", function(event) {  /* busca, escucha y ejecuta*/
     event.preventDefault();  /* Evita que se refresque la pagina*/

    let precio = parseFloat(document.getElementById("producto").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    let totalsinIVA = precio * cantidad;
    let totalConIVA = totalsinIVA * 1.21;

    document.getElementById("resultado").textContent = 
        "Suma base: " + totalsinIVA.toFixed(2) + "€ | Total con IVA (21%): " + totalConIVA.toFixed(2) + "€";
});