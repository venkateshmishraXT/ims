// api/health.js

export default (req, res) => {
  res.status(200).json({ status: "ok" });
};
