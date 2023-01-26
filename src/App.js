import Header from "./components/Header";
import Tours from "./components/Tours";
import { useState, useEffect } from "react";

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Use useEffect hook to fetch api inside
  useEffect(() => {
    // Set api to url variable
    const url = 'https://course-api.com/react-tours-project'
    
    // Create an async function called fetchData
    const fetchData = async () => {
      // Use try catch to check for error
      try{
        // Fetch data and set it to res
        const res = await fetch(url)
        setIsLoading(false)
        // use .json() on res to get data
        const data = await res.json()
        // setTours state to data
        setTours(data)

      } catch(err){
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const deleteTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }


  return (
    <div className="app">
      <Header />
      {isLoading ? <h1 className="loading">...Loading</h1> : <Tours tours={tours} deleteTour={deleteTour} />}
    </div>
  );
}

export default App;
