import { panDB } from "../../mockData.js";
export const verifyPANService = (pan) => {
  if (panDB[pan]) {
    return { valid: true, name: panDB[pan].name };
  }
  return { valid: false, name: null };
};
export const getPANInsightsService = (pan) => {
  if (panDB[pan]) {
    return {
      valid: true,
      attempts: panDB[pan].attempts || 1,
      lastChecked: panDB[pan].lastChecked || "2025-01-10",
    };
  }
  return {
    valid: false,
    attempts: 0,
  };
};
