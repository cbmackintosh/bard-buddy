
const baseURL = `https://bard-buddy-api.herokuapp.com`

export const getPlayData = (data, play) => {
  return fetch(`${baseURL}/${data}/${play}`)
  .then(response => response.json())
}

export const getScene = (play, act, scene) => {
  return fetch(`${baseURL}/play/${play}/${act}/${scene}`)
  .then(response => response.json())
}