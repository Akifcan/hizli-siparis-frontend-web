const apiUrl = "http://localhost:3000";

export const restaurantUrl = `${apiUrl}/restaurant`;
export const tableUrl = `${apiUrl}/table`;
export const menuUrl = `${apiUrl}/menu`;
export const userUrl = `${apiUrl}/user`;
export const orderUrl = `${apiUrl}/order`;

export const headerForPostRequestWithoutToken = {
  "Content-Type": "application/json",
};

export const headerForRequest = {
  "Content-Type": "application/json",
  Authorization: localStorage.userToken,
};
