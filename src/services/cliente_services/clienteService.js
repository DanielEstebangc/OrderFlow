export const enviarCliente = async (cliente) => {

    try {
        const response = await fetch("AQUI_VA_TU_URL_DEL_WEBAPP", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();

        console.log("Servidor respondió:", data);

    } catch (error) {
        console.error("Error enviando cliente:", error);
    }
};
