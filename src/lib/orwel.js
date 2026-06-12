import { orwel } from "orwel";

// Single init point for the Orwel analytics SDK.
// The key comes from VITE_ORWEL_KEY (see .env / .env.example) — never inline it.
export function initOrwel() {
  const apiKey = import.meta.env.VITE_ORWEL_KEY;

  if (!apiKey) {
    console.warn(
      "VITE_ORWEL_KEY is not defined. Orwel SDK will not be initialized."
    );
    return;
  }

  orwel.init({
    apiKey,
    debug: import.meta.env.DEV,
  });
}

export { orwel };
