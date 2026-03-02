export const enviarCliente = async (data) => {

    console.log("📤 Datos enviados al backend:", JSON.stringify(data, null, 2));

    await fetch(
        "https://script.google.com/macros/s/AKfycbzEWxM-Cyo24m-hJvXqWGKE98beDjG0LQXLZU0r5jzZjmvgZX99o7c_i7kH1tKmtOrn/exec",
        {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
        }
    );

    console.log("✅ Petición enviada (no-cors, sin respuesta legible)");

    return { success: true };
};