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
  details: id => get(`/modality/${id}`),
  delete: id => del(`/modality/${id}`),
}

// api for equipment
export const equipment = {
  add: (data, token) => post("/equipment", data),
  edit: (id, data) => post(`/equipment/${id}`, data),
  details: (id) => get(`/equipment/${id}`),
  list: () => get("/equipments"),
  delete: (id) => del(`/equipment/${id}`),
}

// api for BENIFIT
export const benefit = {
  add: data => post("/benifit", data),
  edit: (id, data) => post(`/benifit/${id}`, data),
  details: (id) => get(`/benifit/${id}`),
  list: () => get("/benifits"),
  delete: (id) => del(`/benifit/${id}`),
}

// api for muscle
export const muscle = {
  add: (data) => post("/muscle", data),
  update: (data) => post("/muscle/update", data),
  details: (id) => get(`/muscle/${id}`),
  list: () => get("/muscles"),
  delete: (id) => del(`/muscle/${id}`),
}

// api for performanceTags
export const performance = {
  add: (data) => post("/performancetag", data),
  update: (data) => post("/performancetag/update", data),
  details: (id) => get(`/performancetag/${id}`),
  list: () => get("/performancetags"),
  delete: (id) => del(`/performancetag/${id}`),
}

// api for exercises

export const exercise = {
  add: (data) => post("/exercise", data),
  details: (id) => get(`/exercise/${id}`),
  list: () => get("/exercises"),
  delete: (id) =>del(`/exercise/${id}/delete` ),
}

// activity apis

export const activity = {
  add: (data) => post("/activity", data),
  addActivityExercise: (data) => post("/activity/add-exercise", data),
  update: (data) => post("/activity/update", data),
  details: (id) => get(`/activity/${id}`),
  list: () => get("/activities"), 
  delete: (id) => del(`/activity/${id}`),
  deleteActivityExercise: (id1,id2) => del(`/activity/${id1}/remove-exercise/${id2}`),

}

// competition
export const competition = {
  add: data =>
    post("/competition", data, { "Content-Type": "multipart/form-data" }),
  update: data =>
    post("/competition/update", data, {
      "Content-Type": "multipart/form-data",
    }),
  // update: (data) =>{console.log("api call data",data.entries().next())},
  list: () => get("/competitions"),
  delete: id => del(`/competition/${id}`),
  addRound: data => post("/competition/add-round", data),
  removeRoundActivity: data => post("/competition/remove-round-activity", data),
  removeRound: (compId, roundName) => get(`/competition/${compId}/remove-round/${roundName}`),
}

// Condition
export const condition = {
  add: (data) =>post("/condition", data),
  update: (data) =>post(`/condition/update`,data),
  list: () => get("/conditions"),
  delete: (code) => del(`/condition/${code}`),
}

export const participator = {
  listParticipatorRequests: () => get("/participator-requests"),

  confirmParticipatorRequest: (id) => get(`/confirm-participator-request/${id}`),

  removeParticipator: id =>  get(`/remove-participator/${id}`),
  
  listParticipators: () => get("/list-participators"),
  
  addParticipator: data => post("/create-participator",data),
  participatedcommunities:()=>get("/participated-communities"),
  removeParticipatorRequest: id =>  get(`/remove-participated-community/${id}`),
}

// export const roundApi = {
//   add: data => post("/round", data),
//   removeActivity: (competitionId, activityId, roundName) =>
//     post(`/competition/remove-round-activity`, {
//       competition_id: competitionId,
//       activity_id: activityId,
//       round_name: roundName,
//     }),
//   removeRound: (competitionId, roundName) =>
//     get(`/competition/${competitionId}/remove-round/${roundName}`),
// }
