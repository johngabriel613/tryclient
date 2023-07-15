import { Outlet, Link } from "react-router-dom"
import { navLinks } from "../constant/constant"
import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"
import { fetchUser } from "../api/user"

const Components = () => {
  const {userData, setUserData} = useAuth();
  const [isFilterActive, setIsFilterActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('')
  const [searchData, setSearchData] = useState('')
  const navigate = useNavigate()
  const location = useLocation();
  const pathName = location.pathname;
  const componentName = pathName.split('/components/')[1];


  const auth = async() => {
    const user = await fetchUser()
    if(user){
      setUserData(user)
    }
  }

  useEffect(() => {
    auth()
  },[])

  const handleFilter = () => {
    setIsFilterActive(!isFilterActive)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(searchQuery)
  }

  let componentTypeName;

  switch (componentName) {
  case "cpu":
    componentTypeName = "CPU";
    break;
  case "motherboard":
    componentTypeName = "Motherboard";
    break;
  case "memory":
    componentTypeName = "Memory";
    break;
  case "gpu":
    componentTypeName = "GPU";
    break;
  case "psu":
    componentTypeName = "PSU";
    break;
  default:
    componentTypeName = null;
    break;
  }

  
  return (
    <div className='pt-14 md:pt-16 pb-10'>
      <section className='bg-gradient-to-br from-transparent to-purple-200 py-10'>
        <div className="container relative grid gap-2">
          <h2 className='text-2xl font-bold text-slate-800 mb-2 md:text-3xl'>{componentTypeName}'s</h2>
          <form className="flex" onSubmit={handleSearch}>
            <div className="flex w-full" >
              <select className="py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" name="components" onChange={(e) => navigate(`/components/${e.target.value.toLowerCase()}`)} value={componentTypeName}>
                {navLinks.map(link => (
                  link.dropdowns && link.dropdowns.map((dropdown, index) => (
                    <option key={index} value={dropdown.name}>{dropdown.name}</option>  
                  ))
                ))}
              </select>
              
              <input className="w-full p-2 border text-sm md:text-base" type="search" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search component here..."/>
            </div>
            <button className="rounded-r-lg primary flex items-center gap-1 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg>
              <p className='hidden lg:inline-block'>Search</p>
              </button>
          </form>
          <div className="flex w-full">
              <label htmlFor="filter" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" onChange={handleFilter} id="filter" className="sr-only" checked={isFilterActive}/>
                  <div className="toggle block bg-gray-200 w-10 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">
                  Compatibility
                </div>
              </label>

            </div>
        </div>
      </section>
      <Outlet context={[isFilterActive, setIsFilterActive, userData, searchData]}/>
    </div>
  )
}

export default Components
