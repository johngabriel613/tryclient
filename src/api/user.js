import axios from 'axios'

const apiUrl = 'http://localhost:3000/api' || 'https://api.pccheckr.tech/api';

export const fetchUser = async() => {
  try{
    const response = await axios.get(`${apiUrl}/verify`,{
      withCredentials: true
    })
    return response.data
  }catch(error){
    console.error(error)
  }
}

export const createUser = async() => {
  try{
    const response = await axios.get(`${apiUrl}/create`,{
      withCredentials: true
    })
    return response.data
  }catch(error){
    console.error(error)
  }
}

export const fetchSharedData = async(linkId) => {
  try{
    const response = await axios.get(`${apiUrl}/users/${linkId}`)
    return response.data
  }catch(error){
    console.error(error.message)
  }
}