// import axios from "axios";
import { del, get, post, put } from "./api_helper"

export const demo = {
  list: () => get("/modalities"),
}

// api for MODALITY
export const modality = {
  add: data => post("/modality", data),

  edit: (id, data) => post(`/modality/${id}`, data),

  list: () => get("/modalities"),
  // list: () => get("/modalities" ),

  details: id => get(`/modality/${id}`),

  delete: id => del(`/modality/${id}`),
}

// api for equipment
export const equipment = {
  add: (data, token) => post("/equipment", data),

  edit: (id, data, token) => post(`/equipment/${id}`, data),

  details: (id, token) => get(`/equipment/${id}`),

  list: () => get("/equipments"),

  delete: (id, token) => del(`/equipment/${id}`),
}

// api for BENIFIT
export const benefit = {
  add: data => post("/benifit", data),

  edit: (id, data, token) => post(`/benifit/${id}`, data),

  details: (id, token) => get(`/benifit/${id}`),

  list: () => get("/benifits"),

  delete: (id, token) => del(`/benifit/${id}`),
}

// api for muscle
export const muscle = {
  add: (data, token) => post("/muscle", data),

  update: (data, token) => post("/muscle/update", data),

  details: (id, token) => get(`/muscle/${id}`),

  list: () => get("/muscles"),

  delete: (id, token) => del(`/muscle/${id}`),
}

// api for performanceTags
export const performance = {
  add: (data, token) => post("/performancetag", data),

  update: (data, token) => post("/performancetag/update", data),

  details: (id, token) => get(`/performancetag/${id}`),

  list: () => get("/performancetags"),

  delete: (id, token) => del(`/performancetag/${id}`),
}

// api for exercises

export const exercise = {
  add: (data, token) => post("/exercise", data),

  details: (id, token) => get(`/exercise/${id}`),

  list: () => get("/exercises"),

  delete: (id) =>del(`/exercise/${id}/delete` ),
}

// activity apis

export const activity = {
  add: (data, token) => post("/activity", data),

  details: (id, token) => get(`/activity/${id}`),

  list: () => get("/activities"),

  delete: (id, token) => del(`/activity/${id}`),
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

  list: () => get("/competitions"),

  delete: (id, token) =>
    del(`/competition/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
}

// export const participator = {
//   listParticipatorRequests: () => get("/participator-requests"),

//   confirmParticipatorRequest: id => get(`/confirm-participator-request/${id}`),

//   removeParticipator: id => get(`/remove-participator/${id}`),

//   listParticipators: () => get("/list-participators"),

//   createParticipator: data => post("/create-participator"),
// }
