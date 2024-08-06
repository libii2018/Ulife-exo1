import { ChatMessage } from "./types/ChatMessage";

export async function postData(
  prompts: ChatMessage[],
  path: string = ""
): Promise<string> {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        prompts: prompts,
      }),
    }).then((res) => {
      console.log(res);
      return res.json();
    });
    if (prompts.length === 0) {
      return response.error;
    }
    console.log(response.response);
    return response.response;
  } catch (e) {
    console.error("Error ", e);
  }
}

export async function postDataBackend(
  obj: { username: string; password: string } = null,
  path: string = ""
) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      obj: obj,
    }),
  }).then((res) => {
    return res;
  });
}
