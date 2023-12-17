// import axios from "axios";
import { del, get, post, put } from "./api_helper"

export const demo = {
  list: () => get("/modalities"),
}


// api for MODALITY
export const modality = {
  add: data =>
    post("/modality", data, { headers: { Authorization: `Bearer ${token}` } }),

  edit: (id, data) =>
    post(`/modality/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  list: () => get("/modalities"),
  // list: () => get("/modalities", { headers: { Authorization: `Bearer ${token}` } }),

  details: id =>
    get(`/modality/${id}`, { headers: { Authorization: `Bearer ${token}` } }),

  delete: id =>
    del(`/modality/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}

// api for equipment 
export const equipment= {
  add: (data, token) =>
    post("/equipment", data, { headers: { Authorization: `Bearer ${token}` } }),

  edit: (id, data, token) =>
    post(`/equipment/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  details: (id, token) =>
    get(`/equipment/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
	
  list: () =>
    get("/equipments", ),

  delete: (id, token) =>
    del(`/equipment/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}

// api for BENIFIT
export const benefit = {
  add: (data, token) =>
    post("/benifit", data, { headers: { Authorization: `Bearer ${token}` } }),

  edit: (id, data, token) =>
    post(`/benifit/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  details: (id, token) =>
    get(`/benifit/${id}`, { headers: { Authorization: `Bearer ${token}` } }),

  list: () =>
    get("/benifits"),

  delete: (id, token) =>
    del(`/benifit/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}

// api for muscle
export const muscle = {
  add: (data, token) =>
    post("/muscle", data, { headers: { Authorization: `Bearer ${token}` } }),

  update: (data, token) =>
    post("/muscle/update", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  details: (id, token) =>
    get(`/muscle/${id}`, { headers: { Authorization: `Bearer ${token}` } }),

  list: () => get("/muscles"),

  delete: (id, token) =>
    del(`/muscle/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}

// api for performanceTags
export const performance = {
  add: (data, token) =>
    post("/performancetag", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  update: (data, token) =>
    post("/performancetag/update", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  details: (id, token) =>
    get(`/performancetag/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  list: () =>
    get("/performancetags"),

  delete: (id, token) =>
    del(`/performancetag/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
}

// api for exercises

export const exercise = {
  add: (data, token) =>
    post("/exercise", data, { headers: { Authorization: `Bearer ${token}` } }),

  details: (id, token) =>
    get(`/exercise/${id}`, { headers: { Authorization: `Bearer ${token}` } }),

  list: () => get("/exercises"),

  delete: (id, token) =>
    del(`/exercise/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}


// activity apis

export const activity = {
  add: (data, token) =>
    post("/activity", data, { headers: { Authorization: `Bearer ${token}` } }),

  details: (id, token) =>
    get(`/activity/${id}`, { headers: { Authorization: `Bearer ${token}` } }),

  list: () => get("/activities"),

  delete: (id, token) =>
    del(`/activity/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
}

// competition
export const competition = {
  add: (data, token) =>
    post("/competition", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  details: (id, token) =>
    get(`/competition/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  list: () =>
    get("/competitions"),
	
  delete: (id, token) =>
    del(`/competition/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
}
