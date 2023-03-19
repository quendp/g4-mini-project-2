import axios from "./axios";

const fetchUserInfo = async (token, api, controller) => {
  try {
    const response = await axios.get(api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      signal: controller.signal,
    });
    return response;
  } catch (e) {
    console.log(e);
    return { message: "Error loading user data. Try again later." };
  }
};

export default fetchUserInfo;
