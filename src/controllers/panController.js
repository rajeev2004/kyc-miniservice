import {
  verifyPANService,
  getPANInsightsService,
} from "../services/panService.js";
import validatePAN from "../utils/validatePAN.js";
import fraudScore from "../utils/fraudScore.js";
export const verifyPAN = (req, res) => {
  const { pan } = req.body;
  if (!pan) {
    return res.status(400).json({ error: "PAN is required" });
  }
  if (!validatePAN(pan)) {
    return res.status(400).json({
      valid: false,
      error: "Invalid PAN format",
    });
  }
  const data = verifyPANService(pan);
  const score = fraudScore(pan, data.valid);
  return res.json({
    pan,
    valid: data.valid,
    name: data.name || null,
    fraudScore: score.score,
    riskLevel: score.riskLevel,
  });
};
export const getPANInsights = (req, res) => {
  const { pan } = req.params;
  if (!validatePAN(pan)) {
    return res.status(400).json({
      error: "Invalid PAN format",
    });
  }
  const insights = getPANInsightsService(pan);
  const score = fraudScore(pan, insights.valid);
  return res.json({
    pan,
    masked: `${pan.slice(0, 3)}XXXXX${pan.slice(8)}`,
    ...insights,
    ...score,
  });
};
