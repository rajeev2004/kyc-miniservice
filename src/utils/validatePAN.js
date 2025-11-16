const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
export default function validatePAN(pan) {
  return panRegex.test(pan.toUpperCase());
}
