import React from 'react'
import "./styles/HomePage.css"
import PageHeading from './pageHeading/PageHeading'
import PageContents from './pageContents/PageContents'

export default function HomePage() {
    return (
        <div className="HomePageBG">
            {/* <PageHeading/> */}
            {/* <div></div> */}
            <PageContents/>
        </div>
    )
}
