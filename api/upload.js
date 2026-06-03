export default function handler(req, res) {
  console.log("API works!");
  res.status(200).json({
    success: true,
    message: "upload.js is working"
  });
}
