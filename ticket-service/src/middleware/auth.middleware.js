const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log("Auth Header Received:", token);

  if (!token) return res.status(401).json({ error: 'Access denied: No token' });

  try {
    const actualToken = token.replace('Bearer ', '').trim();
    console.log("Verifying with JWT_SECRET:", process.env.JWT_SECRET);
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Verification Failed:", err.message);
    res.status(400).json({ error: 'Invalid token' });
  }
};
