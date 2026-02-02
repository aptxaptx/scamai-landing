import { useState, useMemo } from 'react';
import {
  FREE_CHECKS,
  BASE_PRICE,
  ADAPTIVE_DEFENSE_PRICE,
  ACTIVE_LIVENESS_PRICE,
  EXPRESS_LANE_PRICE,
  CURRENCY_RATES,
  CURRENCY_SYMBOLS,
  NO_DECIMAL_CURRENCIES,
  type Currency,
} from './constants';

export function usePricingCalculator() {
  const [volume, setVolume] = useState(200);
  const [adaptiveDefense, setAdaptiveDefense] = useState(false);
  const [activeLiveness, setActiveLiveness] = useState(false);
  const [expressLane, setExpressLane] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');

  // Calculate price per image
  const pricePerCheck = useMemo(() => {
    let price = BASE_PRICE;
    if (adaptiveDefense) price += ADAPTIVE_DEFENSE_PRICE;
    if (activeLiveness) price += ACTIVE_LIVENESS_PRICE;
    if (expressLane) price += EXPRESS_LANE_PRICE;
    return price;
  }, [adaptiveDefense, activeLiveness, expressLane]);

  // Calculate total monthly estimate (first 200 images are free)
  const monthlyEstimate = useMemo(() => {
    const paidChecks = Math.max(0, volume - FREE_CHECKS);
    return paidChecks * pricePerCheck;
  }, [volume, pricePerCheck]);

  // Currency helpers
  const currencyRate = CURRENCY_RATES[currency];
  const currencySymbol = CURRENCY_SYMBOLS[currency];
  const decimals = NO_DECIMAL_CURRENCIES.includes(currency) ? 0 : 2;

  // Format price based on currency
  const formatPrice = (price: number, forceDecimals?: number) => {
    const convertedPrice = price * currencyRate;
    const decimalPlaces = forceDecimals !== undefined ? forceDecimals : decimals;
    return convertedPrice.toFixed(decimalPlaces);
  };

  return {
    // State
    volume,
    setVolume,
    adaptiveDefense,
    setAdaptiveDefense,
    activeLiveness,
    setActiveLiveness,
    expressLane,
    setExpressLane,
    currency,
    setCurrency,
    // Calculations
    pricePerCheck,
    monthlyEstimate,
    // Currency
    currencyRate,
    currencySymbol,
    decimals,
    formatPrice,
  };
}
