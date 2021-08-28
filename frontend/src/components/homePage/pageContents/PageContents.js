import { func } from 'prop-types';
import React from 'react'
import "../styles/HomePage.css"
import ContentCards from './contentCards/ContentCards';

// This variable will be edit afterwards by the backend and proper info about the class teacher and the subject will be inserted
window.data=[
    {
        "Teacher_Name":"Teacher Name",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 1",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 2",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 3",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 4",
        "Subject_Name":"ME102",
        "Image":"https://www.gstatic.com/webp/gallery/1.jpg"
    },
    {
        "Teacher_Name":"Sample 5",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 6",
        "Subject_Name":"ME102",
        "Image":""
    },
    {
        "Teacher_Name":"Sample 7",
        "Subject_Name":"ME102",
        "Image":""
    },
]

export default function PageContents(props) {

    function RenderCheck(props){
        if(window.data.length>0){
            return(
                window.data.map(
                    function(element,i){
                        return (
                            <card className="ContentCardDiv"><ContentCards data={window.data[i]}/></card>
                        )
                    }
                )
            )
        }
        else{return <h2 id="HomePageEmptyText">No classes to show at this moment</h2>}
    }

    return (
        <div style={ { overflow:"auto" } }>
            <div id="HomePageContent">
                <RenderCheck/>
            </div>
        </div>
        
    )
}
