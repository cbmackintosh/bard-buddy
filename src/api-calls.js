
const baseURL = `https://bard-buddy-api.herokuapp.com`

export const getPlayData = (data, play) => {
  fetch(`${baseURL}/${data}/${play}`)
  .then(res => res.json())
}