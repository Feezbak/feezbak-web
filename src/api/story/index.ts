import axiosClient from "@/api/axiosClient";

export function createStory() {
  return axiosClient.post("/story").then((response) => response);
}

export function getStoryById(id: string) {
  return axiosClient.get(`/story/${id}`).then((response) => response);
}

export function saveStoryFields(payload: any) {
  return axiosClient
    .post("/story/add-fields", payload)
    .then((response) => response);
}

export function getStories() {
  return axiosClient.get(`/story`).then((response) => response);
}
