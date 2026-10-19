import {useEffect, useState} from "react";


function App() {

  const [data, setData] = useState("");

  const retrieveData = async () => {
    const response = await fetch("http://localhost:8000/api/test/")
    if (!response.ok)
    {
      throw new Error(`${response.status}`)
    }

    const result = await response.json()

    console.log(result)
  }

  useEffect(() => {
    retrieveData()
  }, []);

  return (
      <div>Ванька люимий перожочек ригачек</div>
  )
}

export default App
