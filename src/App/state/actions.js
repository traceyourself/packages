export const CALL_API = 'CALL_API'
export const callApi = (config) => ({ [CALL_API]: config })

export const VIEWPORT_SIZE_UPDATE = 'VIEWPORT_SIZE_UPDATE'
export const updateViewportSize = (size) => ({
  type: VIEWPORT_SIZE_UPDATE,
  payload: { size }
})
