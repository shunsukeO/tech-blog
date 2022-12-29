import React from "react"
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import "../../style/content.css"

const Content = () => {
  return (
    <div class="content">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  )
}

export default Content