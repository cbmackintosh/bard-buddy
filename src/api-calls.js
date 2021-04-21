
export const getPlay = () => {
  return fetch('http://localhost:3005/allswell')
  .then(response => response.json())
}