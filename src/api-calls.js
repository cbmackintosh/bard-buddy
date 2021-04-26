
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
    .then(checkForErrors)
    .then(fullTextData => {
      return fullTextData
    })

  let allCharacters = fetch(`${baseURL}/characters/${play}`)
    .then(checkForErrors)
    .then(allCharacterData => {
      return allCharacterData
    })

  let fullTitle = fetch(`${baseURL}/fullTitle/${play}`)
    .then(checkForErrors)
    .then(fullPlayTitle => {
      return fullPlayTitle
    })


  let allChapters = fetch(`${baseURL}/chapters/${play}`)
    .then(checkForErrors)
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

const checkForErrors = (response) => {
  if(!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}

export const getFullTitle = (work) => {
  return fetch(`http://bard-buddy-api.herokuapp.com/fullTitle/${work}`)
  .then(response => response.json())
}

export const getRandomQuote = () => {
  return fetch('https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single')
  .then(response => response.json())
}