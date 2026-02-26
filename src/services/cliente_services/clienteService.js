export const enviarCliente = async (data) => {

    // 🔹 1️⃣ Validar qué se está enviando
    console.log("📤 Datos enviados al backend:", JSON.stringify(data, null, 2));

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzEWxM-Cyo24m-hJvXqWGKE98beDjG0LQXLZU0r5jzZjmvgZX99o7c_i7kH1tKmtOrn/exec",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    console.log("📡 Status HTTP:", response.status);

    if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
    }

    const result = await response.json();

    // 🔹 2️⃣ Validar qué respondió el backend
    console.log("📥 Respuesta del backend:", result);

    return result;
};