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

// const navbar = (
//     <nav>
//         <h1>Levi's Scrumptious Chocolate!</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )



// ReactDOM.createRoot(document.getElementById("root")).render(
//             <div>
//                 <Blah />
//             </div>
// )

// ---------------------------------------------------
// 9.

// const samplePage = (
//     <nav>
//         <h1>My Little Sample Page!</h1>
//         <h3>Coded By: Levi!</h3>
//         <p> tigers are really cool</p>
//         <p>Panther is really cute and sweet</p>
//     </nav>
// )

// // document.getElementById("root").append(
// //     JSON.stringify(samplePage)
// // )

// // fixed to...

// ReactDOM.createRoot(document.getElementById("root")).render(
//     samplePage
// )

// ----------------------------------------------------
// 10.

const factPage = (
    <nav>
        <img src="./logo.svg" alt="" />
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was First Released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained By FaceBook</li>
            <li>Powers Thousands of enterprise apps, including mobile apps</li>
        </ul>
    </nav>
)

ReactDOM.createRoot(document.getElementById("root")).render(
    factPage
)