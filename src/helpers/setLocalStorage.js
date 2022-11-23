export const isLoggedIn = () => JSON.parse(localStorage.getItem('authenticated'));

export const setLogin = () => {
  localStorage.setItem('authenticated', 'true');
};

export const setLogout = () => {
  localStorage.setItem('authenticated', 'false');
};
