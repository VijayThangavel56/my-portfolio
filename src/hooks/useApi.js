import { useState, useMemo } from "react";
import axiosInstance from "../api/axiosInstance";

export function useApi() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  // define request function outside of api object so "this" is not needed
  const request = async (method, url, body = null, config = {}) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const options = { method, url, ...config };
      if (body && ["post", "put", "patch"].includes(method)) {
        options.data = body;
      }
      const response = await axiosInstance(options);
      setState({ data: response.data, loading: false, error: null });
      return response.data;
    } catch (err) {
      setState(prev => ({ ...prev, error: err, loading: false }));
      throw err;
    }
  };

  // stable API object
  const api = useMemo(
    () => ({
      request,
      get: (url, config) => request("get", url, null, config),
      post: (url, body, config) => request("post", url, body, config),
      put: (url, body, config) => request("put", url, body, config),
      del: (url, config) => request("delete", url, null, config),
    }),
    []
  );

  return { ...state, ...api };
}
