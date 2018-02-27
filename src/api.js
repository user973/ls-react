export const user = (user, token) =>
  fetch(`https://api.github.com/users/${user}?access_token=${token}`, {
    method: 'GET',
    //mode: 'cors'
  })
  .then(response => response.json())
  .then(response => response)

export const followers = (user, token) =>
  fetch(`https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${token}`, {
    method: 'GET',
    //mode: 'cors'
  })
  .then(response => response.json())
  .then(response => response)