import './style.css'
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
  fetch("http://localhost:3000/api/hello")
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-blue-600 mb-4">Frontend React</h1>
    <p className="mb-6 text-lg">{message}</p>
    </div>
  )
}

export default App
