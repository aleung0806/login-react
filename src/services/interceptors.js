import { useStore } from '../hooks/store'

const addDebugInterceptor = (api) => {
  api.interceptors.request.use((config) => {
    console.log('config', config)

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
    console.log('response', response)
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


export default addDebugInterceptor