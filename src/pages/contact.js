import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"


export default () => (
  <div >
    <Link style={{color:`magenta`}} to="/">Home</Link>
    <Header  headerText="Contact Page"/>
    <p style={{color:`red`}}>Send us a message!</p>
  </div>
)