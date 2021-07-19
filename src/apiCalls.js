export const getApiData = (dataCat) => {
  return fetch(`http://localhost:3001/api/v1/${dataCat}`)
  .then((getResponse) => 
    getResponse.json())
  .catch(error => console.log('fetch error', error))
}; 

// const retrieveData = () => {
//   return Promise 
// };

// const allUsers = new UserRepository(allData)
//this is where everything else that you need to run for DOM manipulation goes

