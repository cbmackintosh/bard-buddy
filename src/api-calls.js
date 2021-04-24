
const baseURL = `https://bard-buddy-api.herokuapp.com`

export const getPlayData = (data, play) => {
  return fetch(`${baseURL}/${data}/${play}`)
  .then(response => response.json())
}