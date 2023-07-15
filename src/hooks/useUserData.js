import { useQuery } from "react-query";
import axios from "axios";

export const useUserData = () => useQuery("user", fetchUser)

async function fetchUser(){
  try{
    const response = await axios.get('https://testapi-t46t.onrender.com/api/verify',{
      withCredentials: true
    })
    return response.data
  }catch(error){
    console.error(error)
  }
}