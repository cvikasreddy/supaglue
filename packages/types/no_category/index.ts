export const SUPPORTED_NO_CATEGORY_PROVIDERS = ['gong', 'intercom'] as const;

export type NoCategoryProviderName = (typeof SUPPORTED_NO_CATEGORY_PROVIDERS)[number];
export type NoCategoryProviderCategory = 'nocategory';