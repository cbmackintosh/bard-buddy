
const baseURL = `https://bard-buddy-api.herokuapp.com`

export const getPlay = (play) => {
  fetch(`${baseURL}/play/${play}`)
  .then(res => res.json())
}

export const getPlayCharacters = (play) => {
  fetch(`${baseURL}/characters/${play}`)
  .then(res => res.json())
}

export const getPlayChapters = (play) => {
  fetch(`${baseURL}/chapters/${play}`)
  .then(res => res.json())
}

export const getPlaysByGenre = (genre) => {
  fetch(`${baseURL}/allTitles/${genre}`)
}