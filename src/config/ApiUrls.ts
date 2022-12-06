// Api urls for client
export const API_URLS = {
  // Token
  URL_TOKEN_AUTH: `/api/auth`,
  URL_TOKEN_REFRESH: `/api/auth/refresh`,
  URL_TOKEN_VERIFY: `/api/auth/verify`,
  URL_TOKEN_REVOKE: `/api/auth/revoke`,

  // User
  URL_USER_REGISTER: `/user/register/`,
  URL_USER_PROFILE: `/user/profile/`,
  URL_USER_ADDRESSES: `/user/addresses/`,
  URL_PASSWORD_RESET: `/user/password-reset/`,
  URL_PASSWORD_RESET_CONFIRM: `/user/password-reset/confirm/[uidb64]/[token]/`,
  URL_CHANGE_EMAIL: `/user/change-email/`,
  URL_CHANGE_PASSWORD: `/user/change-password/`,
  URL_OTP_REQUEST: `/user/generate-otp/`,

  // Address
  URL_COUNTRIES: `/addresses/countries/`,
  URL_CONTINENTS: `/addresses/continents/`,
  URL_STATES: '/addresses/states/',
  URL_CITIES: '/addresses/cities/',

  //Vehicles
  URL_BRANDS: `/vehicles/brands/`,
  URL_MODELS: `/vehicles/models/`,
  URL_YEARS: `/vehicles/years/`,
  URL_VEHICLES: `/vehicles/`,

  //Contact
  URL_CONTACT_US: `/about/contact-me/`,
  URL_MY_BUSINESS_INFO: `/about/page-setting/`,

  //Contact Seller
  URL_CONTACT_SELLER: `/posts/contact-seller/`,

  //Natural Person
  URL_NATURAL_PERSON_REGISTER: `/natural-persons/register/`,

  // Business
  URL_BUSINESS_REGISTER: `/businesses/register/`,

  // Posts
  URL_POSTS_VEHICLES: `/posts/vehicle/`,
  URL_POST_VEHICLE: `/posts/vehicle/[id]/`,

  // Days options
  URL_DAY_OPTIONS: `/posts/day-options/`,

  // Media
  URL_MEDIA: `/media/`,
};
