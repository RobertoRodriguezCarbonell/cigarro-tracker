// scripts/test-ip.cjs
const fetch = require("cross-fetch");
globalThis.fetch = fetch;

(async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const json = await response.json();
    console.log("IP pública:", json);
  } catch (error) {
    console.error("Error en fetch:", error);
  }
})();
