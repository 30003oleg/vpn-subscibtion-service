import {
  CreateInvoiceBody,
  CryptoResponse,
  GetInvoicesBody,
  InvoiceInterface,
} from './crypto-bot.types.js';

export const getMe = async () => {
  const token = process.env.Crtpto_TEST_BOT_KEY;
  if (!token) {
    throw new Error('NO TOKEN');
  }
  const response = await fetch(`${process.env.Crypto_BOT_TEST_API_URL}getMe`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Crypto-Pay-API-Token': process.env.Crtpto_TEST_BOT_KEY || '',
    },
  });

  if (!response.ok) {
    console.log(response);
    throw new Error(`External API error: ${response.status}`);
  }

  const data = (await response.json()) as CryptoResponse<any>;
  return data;
};

export const createInvoice = async (body: CreateInvoiceBody) => {
  const token = process.env.Crtpto_TEST_BOT_KEY;
  if (!token) {
    throw new Error('NO TOKEN');
  }
  const response = await fetch(
    `${process.env.Crypto_BOT_TEST_API_URL}createInvoice`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Crypto-Pay-API-Token': process.env.Crtpto_TEST_BOT_KEY || '',
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    console.log(response);
    throw new Error(`External API error: ${response.status}`);
  }

  const data = (await response.json()) as CryptoResponse<InvoiceInterface>;
  return data;
};

export const getInvoices = async (body: GetInvoicesBody) => {
  const token = process.env.Crtpto_TEST_BOT_KEY;
  if (!token) {
    throw new Error('NO TOKEN');
  }
  const response = await fetch(
    `${process.env.Crypto_BOT_TEST_API_URL}getInvoices`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Crypto-Pay-API-Token': process.env.Crtpto_TEST_BOT_KEY || '',
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    console.log(response);
    throw new Error(`External API error: ${response.status}`);
  }

  const data = (await response.json()) as CryptoResponse<{
    items: Array<InvoiceInterface>;
  }>;
  return data;
};
