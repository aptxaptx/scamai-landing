// Pricing constants
export const FREE_CHECKS = 200;
export const BASE_PRICE = 0.15;
export const ADAPTIVE_DEFENSE_PRICE = 0.20;
export const ACTIVE_LIVENESS_PRICE = 0.10;
export const EXPRESS_LANE_PRICE = 0.10;
export const FORENSIC_REPORT_PRICE = 500;
export const VOLUME_DISCOUNT_THRESHOLD = 5000;
export const MAX_VOLUME = 5000;

// Currency rates (relative to USD)
export const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  SGD: 1.34,
  HKD: 7.80,
  JPY: 149.50,
  KRW: 1340.00,
} as const;

// Currency symbols
export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  SGD: 'S$',
  HKD: 'HK$',
  JPY: '¥',
  KRW: '₩',
} as const;

// Currencies without decimal places
export const NO_DECIMAL_CURRENCIES = ['JPY', 'KRW'];

export type Currency = keyof typeof CURRENCY_RATES;
