import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Replace 'process.env.JWT_SECRET' with your actual secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; // Add the decoded token data to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
