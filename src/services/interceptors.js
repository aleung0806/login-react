import { useStore } from '../store'

export const addDebugInterceptor = (api) => {
  api.interceptors.request.use((config) => {
    useStore.getState().setRequest(
      {
        url: config.url,
        method: config.method,
        body: config.data === undefined ? null : config.data
      }
    )

    return config;
  }, (error) => {
    
    return Promise.reject(error);
  });
  
  api.interceptors.response.use((response) => {
    useStore.getState().setResponse({
      status: response.status,
      statusText: response.statusText,
      body: response.data
    })
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
}

