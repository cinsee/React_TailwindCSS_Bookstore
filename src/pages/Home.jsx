import React from 'react'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
// import toast, { Toaster } from "react-hot-toast";

const Home = () => {
    return (
        <div>
            <SectionOne />
            {/* <SectionTwo fetchURL="https://script.google.com/macros/s/AKfycbzRe4c9nnkZHQOnZcgkZlF4XMyCvGAJ7Roa2qvOmO8W2Ajn3_gnYL3vNrUbNhqRGAb3/exec"/> */}
            <SectionTwo fetchURL="https://sheet.best/api/sheets/6a855f00-0a97-4a8b-8a48-7b53a5fccedb" />
            {/* <SectionThree />
            <SectionFour /> */}
            {/* https://docs.google.com/spreadsheets/d/1528Zi3W8elgnE6rWTXAsAZ6ay7qbcHnl87Hx4amBTSA/edit?usp=sharing */}
        </div>
    )
}

export default Home