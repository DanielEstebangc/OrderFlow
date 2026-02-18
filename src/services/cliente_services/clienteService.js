export const enviarCliente = async (cliente) => {

    console.log("Enviando:", cliente);

    const response = await fetch("https://script.google.com/macros/s/AKfycbzEWxM-Cyo24m-hJvXqWGKE98beDjG0LQXLZU0r5jzZjmvgZX99o7c_i7kH1tKmtOrn/exec", {
        method: "POST",
        body: JSON.stringify(cliente)
    });

    console.log("Status:", response.status);

    if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    console.log("Respuesta JSON:", data);

    return data;
};
