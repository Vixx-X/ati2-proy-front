// Server routes paths
export const SERVER_URLS = {
  URL_LOGIN: '/user/login',
  URL_REGISTER: '/user/register',
  URL_PASSWORD_RESET: '/user/password-reset',
  URL_PASSWORD_RESET_CONFIRM: '/user/password-reset/confirm/[uidb64]/[token]',
  URL_USER_CHANGE_EMAIL: '/user/change-email',
  URL_USER_CHANGE_PASSWORD: '/user/change-password',
  URL_USER_PROFILE: '/user/profile',

  // home
  URL_LANDING: '/',
  URL_HOME: '/home',

  //contact
  URL_CONTACT_US: '/contactus',

  //vehicles
  URL_VEHICLES: '/vehicles',
  URL_EDIT_VEHICLE: '/vehicles/edit',
  URL_SEARCH_VEHICLE: '/vehicles/search',


  //services
  URL_SERVICES: '/services',

  //employee
  URL_EMPLOYEE: '/employee',
};

export default SERVER_URLS;
