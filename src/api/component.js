import axios from "axios"

const apiUrl = 'http://localhost:3000/api' || 'https://api.pccheckr.tech/api';

export const addComponent = async(componentType, itemId, navigate, setToastMessage) => {
  const data = {type: componentType,
                id: itemId}
  try{
    const response = await axios.post(`${apiUrl}/add`, {data}, {
    withCredentials: true
    })
    if(response){
      setToastMessage(`${componentType} added successfully`)
      navigate('/builder')
    }
  }catch(error){
    console.log(error.message)
  }
}

export const deleteComponent = async(componentType, setUserData) => {
  try{
    const response = await axios.delete(`${apiUrl}/delete/${componentType}`, {
    withCredentials: true
    })

    if(response){
      setUserData(response.data)
    }
  }catch(error){
    console.error(error.message)
  }
}

export const getComponentById = async(componentType, id) => {
  try{
    const response = await axios.get(`${apiUrl}/${componentType}/${id}`)
    return response.data
  }catch(error){
    console.error(error.message)
  }
}

export const fetchData = async(componentType, queryParams) => {
  try{
    const queryString = Object.entries(queryParams)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

    const response = await axios.get(`${apiUrl}/${componentType}?${queryString}`);
    return response.data
  }catch(error){
    console.log(error.message)
  }
}

