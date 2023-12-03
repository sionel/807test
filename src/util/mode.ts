const dev = process.env.NODE_ENV !== "production";
const ip = dev ? "http://localhost:3000" : "http://113.198.233.57:3000";
module.exports = { dev, ip };
