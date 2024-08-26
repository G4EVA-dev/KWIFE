import React from 'react'
import SearchBar from '../components/Searchbar'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import Popular from '../components/Popular'

function  Home  (){
  return (
    <div>
        <SearchBar/>
        <CategoryList/>
        <Popular/>
        <Footer/>
    </div>
  )
}

export default Home