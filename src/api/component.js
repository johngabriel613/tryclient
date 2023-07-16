import axios from "axios"
import toast from "react-hot-toast"

const apiUrl = 'http://localhost:3000/api' || 'https://api.pccheckr.tech/api';

export const addComponent = async (componentType, itemId, navigate) => {
  const data = {
    type: componentType,
    id: itemId
  }
  try {
    toast.promise(
      axios.post(`${apiUrl}/add`, { data }, { withCredentials: true }),
      {
        loading: 'Loading...',
        success: () => {
          navigate('/builder');
          return `${componentType} added successfully`;
        },
        error: (error) => {
          console.log(error.message);
          return 'An error occurred while adding the component';
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteComponent = async(componentType, setUserData) => {
  try{
    toast.promise(
      axios.delete(`${apiUrl}/delete/${componentType}`, {withCredentials: true}),{
        loading: `removing ${componentType} ...`,
        success: (response) => {
          setUserData(response.data)
          return `${componentType} removed`
        },
        error: (error) => {
          console.log(error.message);
          return 'An error occurred while removing the component';
        }
      }
    )
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

export const fetchData = async(componentType,searchData, queryParams) => {
  try{
    const queryString = Object.entries(queryParams)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
    const search = searchData || '';

    const response = await axios.get(`${apiUrl}/${componentType}?search=${search}&${queryString}`);
    return response.data
  }catch(error){
    console.log(error)
  }
}

