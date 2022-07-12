import React from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar.jsx"

function App() {
    return (
        <div>
            <h1>This h1 is from index.jsx</h1>
            {<NavBar/>}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>   
)