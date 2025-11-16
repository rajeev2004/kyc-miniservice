export default function fraudScore(pan, isValid) {
  let score = 0;
  if (!isValid) score += 40;
  if (pan.startsWith("AAAAA")) score += 30;
  const sumDigits = pan.match(/\d/g)?.reduce((a, b) => a + parseInt(b), 0) || 0;
  if (sumDigits % 2 !== 0) score += 10;
  let riskLevel = "low";
  if (score >= 50) riskLevel = "high";
  else if (score >= 20) riskLevel = "medium";
  return { score, riskLevel };
}
