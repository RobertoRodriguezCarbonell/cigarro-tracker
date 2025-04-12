const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const fetch = require("cross-fetch");
globalThis.fetch = fetch;

(async () => {
  try {
    // Aquí usamos la URL base de Supabase. Recuerda que para una petición de test esto es suficiente.
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) {
      throw new Error("La URL no está definida.");
    }
    const response = await fetch(url);
    const text = await response.text();
    console.log("Respuesta de fetch:", text);
  } catch (error) {
    console.error("Error en fetch:", error);
  }
})();
