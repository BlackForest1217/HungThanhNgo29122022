import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Card from "../../components/card2"

const HomeLayout = (props) => {
  return <>
    <Header />
    <Card />
    <Footer />
  </>
}

export default HomeLayout


// {props.children}