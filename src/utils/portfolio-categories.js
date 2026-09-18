export const portfolioCategories = [
  { value: 'all', label: 'All' },
  { value: 'apps', label: 'React & JS Apps' },
  { value: 'wps', label: 'WordPress' },
  { value: 'shopify', label: 'Shopify' },
  { value: 'temp', label: 'Templates' },
  { value: 'games', label: 'Games' },
  { value: 'anime', label: 'Animation' },
];

export const categoryLabel = (value) =>
  portfolioCategories.find((category) => category.value === value)?.label ?? '';
