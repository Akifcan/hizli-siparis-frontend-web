import store from "../";

export const $http = async (url, method, headers, body) => {
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const modalNotification = (title, text, image) => {
  store.commit("setModalData", {
    showModal: true,
    title,
    text,
    image,
  });
};

export const redirectToConfirmDelete = ({ url, text }) => {
  store.commit("ConfirmDelete/setCurrentData", { url, text });
};

export const alertlNotification = (title, className) => {
  store.commit("setAlertData", {
    showAlert: true,
    title,
    class: className,
  });
};
