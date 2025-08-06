// import jwt from 'jsonwebtoken';

// export const generateToken = (userId, res) => {
//     const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//         expiresIn: '7d',
//     });

//     res.cookie("jwt",token,{
//         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//         httpOnly: true, // prevent xss attacks cross-site scripting attacks
//         sameSite: "strict", // prevent cross-site request forgery attacks
//         secure: process.env.NODE_ENV !== "development" // only send cookie over https in production
//     });
//     return token;

// };


import jwt from "jsonwebtoken";

// Function to generate JWT and set it in the cookie
export const generateToken = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token valid for 7 days
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true, // Prevents access from JavaScript (mitigates XSS)
    sameSite: "Strict", // CSRF protection
    secure: process.env.NODE_ENV === "production", // Only use HTTPS in production
  });

  return token;
};
