import { CryptoResponse } from './crypto-bot.types.js';

export const getMe = async () => {
  const token = process.env.Crtpto_TEST_BOT_KEY;
  if (!token) {
    throw new Error('NO TOKEN');
  }
  const response = await fetch(`${process.env.Crypto_BOT_TEST_API_URL}getME`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Crypto-Pay-API-Token': process.env.Crtpto_TEST_BOT_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error(`External API error: ${response.status}`);
  }

  const data = (await response.json()) as CryptoResponse;
  console.log('FFF', data);
  return data;
};
