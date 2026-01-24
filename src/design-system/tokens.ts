import tokensData from './tokens.json';
import type { DesignTokens } from './types';

export const tokens: DesignTokens = tokensData as DesignTokens;

/**
 * Get a color token value
 */
export function getColorToken(
  category: keyof DesignTokens['colors'],
  shade?: string | number
): string {
  const colorCategory = tokens.colors[category];
  
  if (typeof colorCategory === 'object' && 'DEFAULT' in colorCategory) {
    if (shade) {
      return (colorCategory as any)[shade] || (colorCategory as any).DEFAULT;
    }
    return (colorCategory as any).DEFAULT;
  }
  
  if (typeof colorCategory === 'object' && shade) {
    return (colorCategory as any)[shade] || '';
  }
  
  return '';
}

/**
 * Get a typography token value
 */
export function getTypographyToken(
  category: keyof DesignTokens['typography'],
  key: string
): string {
  return (tokens.typography[category] as any)[key] || '';
}

/**
 * Get a spacing token value
 */
export function getSpacingToken(size: string | number): string {
  return tokens.spacing[String(size)] || '';
}

/**
 * Get a border radius token value
 */
export function getBorderRadiusToken(size: string): string {
  return tokens.borderRadius[size] || '';
}

/**
 * Get a shadow token value
 */
export function getShadowToken(size: string): string {
  return tokens.shadows[size] || '';
}

export default tokens;
