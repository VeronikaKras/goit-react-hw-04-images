export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '39737153-aa8892536503a6aca7f6f6ce9',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });
