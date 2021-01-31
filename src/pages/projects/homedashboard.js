import React from "react"
import "../../styles/homeDashboard.scss"
import Time from "../../components/time"
import Head from "../../components/head"
import Weather from "../../components/weather"
import ToDo from "../../components/todo"

const HomeDashboardPage = () => {
  return (
    <>
    <Head title="homeDashboard" />
      <Time />
      <ToDo />
      <Weather />
    </>
  )
}

export default HomeDashboardPage
