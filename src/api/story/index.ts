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

export function deleteStory(id: string) {
  return axiosClient.delete(`/story/${id}`).then((response) => response);
}

export function getStories(page: number) {
  return axiosClient
    .get("/story", {
      params: {
        page,
      },
    })
    .then((response) => response);
}

export function sendLinkByEmailAddresses(id: string, payload: string[]) {
  return axiosClient
    .post(`/story/${id}/send-link`, payload)
    .then((response) => response);
}
