import React from "react"
import ReactDOM from "react-dom/client"
import LogoSvg from "./logo.svg"

// const samePage = (
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

// const factPage = (
//     <nav>
//         <img src={LogoSvg} height="40px" />
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>Was First Released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained By FaceBook</li>
//             <li>Powers Thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </nav>
// )


    
// 13.

function Page() {
    return (
    <ol>
        <li>Make An App</li>
        <li>I Can Be Pround To Build An App And Be An Advanced Coder</li>
        <li>MAKE SOME $!!!</li>
        <li>Cuz My Dad Wants Me To</li>
    </ol>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Page/>
)