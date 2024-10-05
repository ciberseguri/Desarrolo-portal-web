<script>
    // Filtrar usuarios
    document.getElementById("Buscar").addEventListener("click", function() {
        const filtro = document.getElementById("filtro").value.toLowerCase();
        const filasUsuarios = document.querySelectorAll("table tr");

        filasUsuarios.forEach(function(fila, index) {
            if (index === 0) return; // Omitir la cabecera de la tabla
            const nombreUsuario = fila.cells[0].textContent.toLowerCase();
            if (nombreUsuario.includes(filtro)) {
                fila.style.display = ""; // Mostrar si coincide
            } else {
                fila.style.display = "none"; // Ocultar si no coincide
            }
        });
    });

    // Simulación de chat de soporte
    document.getElementById("enviar").addEventListener("click", function() {
        const mensajeInput = document.getElementById("mensaje").value;
        const mensajeDiv = document.createElement("div");
        mensajeDiv.textContent = "Tú: " + mensajeInput;
        document.body.appendChild(mensajeDiv);
        document.getElementById("mensaje").value = ""; // Limpiar el input
    });
</script>
