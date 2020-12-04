import axios from 'axios'

const fetchPlants = () => {
    return axios.get('http://localhost:3333/plants')
    .then((res) => {
        return (res)
    })
    .catch((err) => {
        console.log(err)
    })   
}
  


export default fetchPlants;