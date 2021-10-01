// let promise = fetch(url, [options])


// Replace ./data.json with your JSON feed
fetch('./data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })


//   OMDB API
// http://www.omdbapi.com/

// Send all data requests to:

// data example:
// http://www.omdbapi.com/?i=tt3896198&apikey=975308d0

// poster example
// Poster API: http://img.omdbapi.com/?i=tt3896198&h=600&apikey=975308d0