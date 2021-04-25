
const baseURL = `https://bard-buddy-api.herokuapp.com`

export const fetchAllPoetry = () => {

  const allSonnets = fetch(`${baseURL}/sonnets`)
    .then(response => response.json())
    .then(allSonnetData => {
      return allSonnetData
    })

  const allPoems = fetch(`${baseURL}/poems`)
    .then(response => response.json())
    .then(allPoemData => {
      return allPoemData
    })

  return Promise.all([allSonnets, allPoems])
  .then(data => {
    let poetryData = {}
    poetryData.sonnets = data[0]
    poetryData.poems = data[1]
    return poetryData
  })

}

export const fetchPlayData = (play) => {

  let fullText = fetch(`${baseURL}/play/${play}`)
    .then(response => response.json())
    .then(fullTextData => {
      return fullTextData
    })

  let allCharacters = fetch(`${baseURL}/characters/${play}`)
    .then(response => response.json())
    .then(allCharacterData => {
      return allCharacterData
    })

  let fullTitle = fetch(`${baseURL}/fullTitle/${play}`)
    .then(response => response.json())
    .then(fullPlayTitle => {
      return fullPlayTitle
    })

  let allChapters = fetch(`${baseURL}/chapters/${play}`)
    .then(response => response.json())
    .then(allPlayChapters => {
      return allPlayChapters
    })

  return Promise.all([fullText, allCharacters, fullTitle, allChapters])
  .then(data => {
    let playData = {}
    playData.fullText = data[0]
    playData.allCharacters = data[1]
    playData.fullTitle = data[2]
    playData.allChapters = data[3]
    return playData;
  })

}