const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '.env'), quiet: true });

function requireEnv(name) {
  const value = process.env[name];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Missing required environment variable ${name}. Set SQUIRE_USER and SQUIRE_PASS in the environment or in a .env file (see .env.example).`
    );
  }
  return value;
}

module.exports = { requireEnv };
