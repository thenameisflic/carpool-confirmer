import { API } from "../constants";

export const createRide = position => {
  return fetch(`${API.URL}/ride`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      position
    })
  });
};

export const fetchRide = id => {
    return fetch(`${API.URL}/ride/${id}`);
};

export const confirmDriver = (id, position) => {
  return fetch(`${API.URL}/ride/${id}/confirm-driver`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      position
    })
  });
}

export const confirmPassenger = (id, position) => {
  return fetch(`${API.URL}/ride/${id}/confirm-passenger`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      position
    })
  });
}

export const scanPassenger = (id, position) => {
  return fetch(`${API.URL}/ride/${id}/scan-passenger`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      position
    })
  });
}