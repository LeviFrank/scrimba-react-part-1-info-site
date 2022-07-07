import React from "react"
import ReactDOM from "react-dom/client"

// --------------------------------------------------------------------------------------
// 5.


// ReactDOM.createRoot(document.getElementById("root")).render(
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//         <li>Thing 4</li>
//     </ul>
// )
// ReactDOM.createRoot(<ul><li>Thing 1</li> <li>Thing 2</li></ul>)


// --------------------------------------------------
// 6.


// function Blah() {
//     return(
//         <h1>I am a cow mooooooo</h1>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//             <div>
//                 <Blah />
//             </div>
// )


// --------------------------------------------------
// 7.

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
//                   =
// const h1 = document.createElement("h1")
// h1.textContent = "Blah"
// h1.className = "header"
// document.getElementById("root").append(h1)


// --------------------------------------------------
// 8.

// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = (
//     <div> 
//         <h1 className="header">This is JSX</h1>
//         <p>blahblahblah</p> 
//     </div>)
// console.log(element)

const navbar = (
    <nav>
        <h1>Levi's Scrumptious Chocolate!</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.createRoot(document.getElementById("root")).render(
    navbar
)

// ReactDOM.createRoot(document.getElementById("root")).render(
//             <div>
//                 <Blah />
//             </div>
// )

// ---------------------------------------------------
// 9.

// ReactDOM.append()