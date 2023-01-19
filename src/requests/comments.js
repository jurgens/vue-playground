import { httpGet, httpPost } from "@/services/http-client";

const resource = "https://jsonplaceholder.typicode.com/comments/?_limit=30";

export const getComments = async () => {
  const response = await httpGet(resource);
  console.log(response);

  return response.data;
};

export const addComment = async comment => {
  const response = await httpPost(resource, comment);

  return response.data;
};
