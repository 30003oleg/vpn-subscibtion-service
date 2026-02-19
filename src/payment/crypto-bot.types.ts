export type PaymentMethod = 'CryptoBot' | 'UKassa';

export type TestFiatCurrencyType = FiatCurrencyType | 'JET';

export type InvoiceStatus = 'active' | 'paid' | 'expired';

export type CurrencyType = 'crypto' | 'fiat';

export interface CryptoResponse<T> {
  ok: boolean;
  result?: T;
  error?: any;
  status: any; // Проверить существует ли вообще
}

export type CryptoAsset =
  | 'USDT'
  | 'TON'
  | 'BTC'
  | 'ETH'
  | 'LTC'
  | 'BNB'
  | 'TRX'
  | 'USDC';

export type TestCryptoAsset = CryptoAsset | 'JET';

export type FiatCurrencyType =
  | 'USD'
  | 'EUR'
  | 'RUB'
  | 'BYN'
  | 'UAH'
  | 'GBP'
  | 'CNY'
  | 'KZT'
  | 'UZS'
  | 'GEL'
  | 'TRY'
  | 'AMD'
  | 'THB'
  | 'INR'
  | 'BRL'
  | 'IDR'
  | 'AZN'
  | 'AED'
  | 'PLN'
  | 'ITS';

export interface InvoiceInterface {
  invoice_id: number; // Unique ID for this invoice
  hash: string; // Hash of the invoice
  currency_type: CurrencyType; // Type of the price, can be “crypto” or “fiat”
  asset?: TestCryptoAsset; // Cryptocurrency code. Available only if the value of the field currency_type is “crypto”
  fiat?: string; // Fiat currency code. Available only if the value of the field currency_type is “fiat”
  amount: string; // Amount of the invoice for which the invoice was created
  paid_asset?: string; // Cryptocurrency alphabetic code for which the invoice was paid. Available only if currency_type is “fiat” and status is “paid”
  paid_amount?: string; // Amount of the invoice for which the invoice was paid. Available only if currency_type is “fiat” and status is “paid”
  paid_fiat_rate?: string; // The rate of the paid_asset valued in the fiat currency. Available only if the value of the field currency_type is “fiat” and the value of the field status is “paid”.
  accepted_assets?: string; // List of assets which can be used to pay the invoice. Available only if currency_type is “fiat”
  fee_asset?: string; // Asset of service fees charged when the invoice was paid. Available only if status is “paid”.
  fee_amount?: number; // Amount of service fees charged when the invoice was paid. Available only if status is “paid”
  fee?: string; // Amount of charged service fees. Available only in the payload of the webhook update
  pay_url?: string; //  Deprecated. URL should be provided to the user to pay the invoice
  bot_invoice_url: string; // URL should be provided to the user to pay the invoice
  mini_app_invoice_url: string; // Use this URL to pay an invoice to the Telegram Mini App version
  web_app_invoice_url: string; // Use this URL to pay an invoice to the Web version of Crypto Bot
  description?: string; // Description for this invoice
  status: InvoiceStatus; // Status of the transfer, can be “active”, “paid” or “expired”.
  swap_to?: string; // The asset that will be attempted to be swapped into after the user makes a payment (the swap is not guaranteed)
  is_swapped?: boolean; // For invoices with the "paid" status, this flag indicates whether the swap was successful (only applicable if swap_to is set)
  swapped_uid?: string; // If is_swapped is true, stores the unique identifier of the swap
  swapped_to?: string; // If is_swapped is true, stores the asset into which the swap was made
  swapped_rate?: string; // If is_swapped is true, stores the exchange rate at which the swap was executed
  swapped_output?: string; // If is_swapped is true, stores the amount received as a result of the swap (in the swapped_to asset)
  swapped_usd_amount?: string; // If is_swapped is true, stores the resulting swap amount in USD
  swapped_usd_rate?: string; // If is_swapped is true, stores the USD exchange rate of the currency from swapped_to.
  created_at: string; // Date the invoice was created in ISO 8601 format
  paid_usd_rate?: string; // Price of the asset in USD. Available only if status is “paid”
  usd_rate?: string; // Price of the asset in USD. Available only in the Webhook update payload
  allow_comments: boolean; // True, if the user can add comment to the payment
  allow_anonymous: boolean; // True, if the user can pay the invoice anonymously
  expiration_date?: string; // Date the invoice expires in ISO 8601 format.
  paid_at?: string; // Date the invoice was paid in ISO 8601 format.
  paid_anonymously: boolean; // True, if the invoice was paid anonymously
  comment?: string; // Comment to the payment from the user.
  hidden_message?: string; // Text of the hidden message for this invoice
  payload?: string; // Previously provided data for this invoice.
  paid_btn_name?: string; // Label of the button, can be “viewItem”, “openChannel”, “openBot” or “callback”.
  paid_btn_url?: string; // URL opened using the button
}

export interface Transfer {
  transfer_id: number; // Unique ID for this transfer
  spend_id: string; // Unique UTF-8 string.
  user_id: string; // elegram user ID the transfer was sent to
  asset: string; // Cryptocurrency alphabetic code. Currently, can be “USDT”, “TON”, “BTC”, “ETH”, “LTC”, “BNB”, “TRX” and “USDC” (and “JET” for testnet).
  amount: string; // Amount of the transfer in float
  status: 'completed'; // Status of the transfer, can only be “completed”.
  completed_at: string; // Date the transfer was completed in ISO 8601 format
  comment?: string; // Comment for this transfer
}

export interface Check {
  check_id: number; // Unique ID for this check.
  hash: string; // Hash of the check
  asset: string; // Cryptocurrency alphabetic code. Currently, can be “USDT”, “TON”, “BTC”, “ETH”, “LTC”, “BNB”, “TRX” and “USDC” (and “JET” for testnet).
  amount: string; // Amount of the check in float.
  bot_check_url: string; // URL should be provided to the user to activate the check
  status: 'active' | 'activated'; // Status of the check, can be “active” or “activated”.
  created_at: string; // Date the check was created in ISO 8601 format.
  activated_at: string; // Date the check was activated in ISO 8601 format.
}

export interface Balance {
  currency_code: string; // Cryptocurrency alphabetic code. Currently, can be “USDT”, “TON”, “BTC”, “ETH”, “LTC”, “BNB”, “TRX” and “USDC” (and “JET” for testnet).
  available: string; // Total available amount in float
  onhold: string; // Unavailable amount currently is on hold in float
}

export interface ExchangeRate {
  is_valid: boolean; // True, if the received rate is up-to-date.
  is_crypto: boolean; // True, if the source is the cryptocurrency.
  is_fiat: boolean; // True, if the source is the fiat currency.
  source: string; // Cryptocurrency alphabetic code. Currently, can be “USDT”, “TON”, “BTC”, “ETH”, “LTC”, “BNB”, “TRX” and “USDC”.
  target: string; // Fiat currency code. Currently, can be “USD”, “EUR”, “RUB”, “BYN”, “UAH”, “GBP”, “CNY”, “KZT”, “UZS”, “GEL”, “TRY”, “AMD”, “THB”, “INR”, “BRL”, “IDR”, “AZN”, “AED”, “PLN” and “ILS".
  rate: string; // The current rate of the source asset valued in the target currency.
}

export interface AppStats {
  volume: number; // Total volume of paid invoices in USD.
  conversion: number; // Conversion of all created invoices
  unique_users_count: number; // The unique number of users who have paid the invoice
  created_invoice_count: number; // Total created invoice count
  paid_invoice_count: number; // Total paid invoice count
  start_at: string; // The date on which the statistics calculation was started in ISO 8601 format.
  end_at: string; // The date on which the statistics calculation was ended in ISO 8601 format.
}

export interface CreateInvoiceBody {
  currency_type?: CurrencyType; // “crypto” or “fiat”. Defaults to crypto.
  asset?: TestCryptoAsset; // Required if currency_type is “crypto”. Cryptocurrency alphabetic code.
  fiat?: FiatCurrencyType; // Required if currency_type is “fiat”. Fiat currency code.
  accepted_assets?: TestFiatCurrencyType; // List of cryptocurrency alphabetic codes separated comma. Assets which can be used to pay the invoice. Available only if currency_type is “fiat”. Supported assets: “USDT”, “TON”, “BTC”, “ETH”, “LTC”, “BNB”, “TRX” and “USDC” (and “JET” for testnet). Defaults to all currencies.
  amount: string; // Amount of the invoice in float. For example: 125.50
  swap_to?: string; // The asset that will be attempted to be swapped into after the user makes a payment (the swap is not guaranteed). Supported assets: "USDT", "TON", "TRX", "ETH", "SOL", "BTC", "LTC".
  description?: string; // Description for the invoice. User will see this description when they pay the invoice. Up to 1024 characters.
  hidden_message?: string; // Text of the message which will be presented to a user after the invoice is paid. Up to 2048 characters.
  paid_btn_name?: 'viewItem' | 'openChannel' | 'openBot' | 'callback'; // Label of the button which will be presented to a user after the invoice is paid. Supported names:viewItem – “View Item”,openChannel – “View Channel”,openBot – “Open Bot”, callback – “Return”
  paid_btn_url?: string; // Required if paid_btn_name is specified. URL opened using the button which will be presented to a user after the invoice is paid. You can set any callback link (for example, a success link or link to homepage). Starts with https or http.
  payload?: string; // Any data you want to attach to the invoice (for example, user ID, payment ID, ect). Up to 4kb.
  allow_comments?: boolean; // Allow a user to add a comment to the payment. Defaults to true.
  allow_anonymous?: boolean; // Allow a user to pay the invoice anonymously. Defaults to true.
  expires_in?: number; // You can set a payment time limit for the invoice in seconds. Values between 1-2678400 are accepted.
}

export interface GetInvoicesBody {
  asset?: TestCryptoAsset; // Required if currency_type is “crypto”. Cryptocurrency alphabetic code.
  fiat?: FiatCurrencyType; // Required if currency_type is “fiat”. Fiat currency code.
  invoice_ids?: string; // List of invoice IDs separated by comma
  status?: Omit<InvoiceStatus, 'expired'>; // Status of invoices to be returned. Available statuses: “active” and “paid”. Defaults to all statuses.
  offset?: number; // Offset needed to return a specific subset of invoices. Defaults to 0.
  count?: number; // Number of invoices to be returned. Values between 1-1000 are accepted. Defaults to 100.
}
