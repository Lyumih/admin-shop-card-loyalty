import { BACKEND_URL } from "./contants";

interface UserFetchData {
  email: string
  phone: string
  password: string
}

export async function userPostFetchHelper(user: UserFetchData) {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({...user, isShop:true})
    }

    const response = await fetch(`${BACKEND_URL}/user`, options)
    console.log(response)
    return response.json()
  } catch (e) {
    console.log(e);
    return { message: e };
  }
}