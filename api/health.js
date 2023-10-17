export default function handler(req, res) {
  console.log("Hi");
  res.status(200).json({ status: "OK" });
}
