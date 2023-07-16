import axios from 'axios'
import { toast } from 'react-hot-toast';

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
    const response = await toast.promise(
      axios.get(`${apiUrl}/create`,{withCredentials: true}),
      {
        loading: 'generating link',
        success: () => {
          return 'link generated successfully'
        },
        error: (error) => {
          console.log(error.message);
          return 'An error occurred while creating the link';
        }
      }
    )

    if(response){
      return response.data
    }
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