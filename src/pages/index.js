import * as React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import "../../style/app.css"
// import { Link } from "gatsby"

const Home = () => {
  return (
    <div class="app">
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default Home

export const Head = () => <title>Tech Blog</title>
