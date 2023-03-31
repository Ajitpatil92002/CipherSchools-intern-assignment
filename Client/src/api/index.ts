import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

class USER {
  get(token: string | null, _id: string | number) {
    const url = `/users/${_id}`;
    const config = {
      headers: {
        authtoken: `${token}`,
      },
    };
    return api.get(url, config);
  }
  edit(token: string | null, _id: string | number, data: any) {
    const url = `/users/${_id}`;
    const config = {
      headers: {
        authtoken: `${token}`,
      },
    };
    return api.put(url, { ...data }, config);
  }

  resetPassword(token: string | null, _id: string | number, data: any) {
    const url = `/restpassword/${_id}`;
    const config = {
      headers: {
        authtoken: `${token}`,
      },
    };
    return api.put(url, { ...data }, config);
  }
}

export default new USER();
