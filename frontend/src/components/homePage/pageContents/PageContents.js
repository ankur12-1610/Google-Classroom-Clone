import React, { useEffect, useState } from 'react'
// import "../styles/HomePage.css"
import ContentCards from './contentCards/ContentCards';
import {myaxios, authorize} from '../../../connections'
// import { CoffeeLoading } from 'react-loadingg';
import { BoxLoading } from 'react-loadingg';
import { Container } from 'react-bootstrap';

// window.data=[
//     {
//         "Teacher_Name":"Teacher Name",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 1
//     },
//     {
//         "Teacher_Name":"Sample 1",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 2
//     },
//     {
//         "Teacher_Name":"Sample 2",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 3
//     },
//     {
//         "Teacher_Name":"Sample 3",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 4
//     },
//     {
//         "Teacher_Name":"Sample 4",
//         "Subject_Name":"ME102",
//         "Image":"https://www.gstatic.com/webp/gallery/1.jpg",
//         "Background_Image": 5
//     },
//     {
//         "Teacher_Name":"Sample 5",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 6
//     },
//     {
//         "Teacher_Name":"Sample 6",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 7
//     },
//     {
//         "Teacher_Name":"Sample 7",
//         "Subject_Name":"ME102",
//         "Image":"",
//         "Background_Image": 8
//     },
// ]

export default function PageContents(props) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [cards, setCards] = useState(null)
    useEffect(() => {
        const getClasses = async function() {
            setIsLoaded(false)
            try {
                const res = await myaxios({
                    method: "GET",
                    url: "/classroom/"
                })
                console.log("Res");
                console.log(res.data)
                setCards(res.data)
                setIsLoaded(true)
            } catch(err) {
                console.log(err.response)
            }
        }

        getClasses()
    },[])


    function RenderCheck(props){
        if(cards.length>0){
            console.log(cards.length)
            return(
                <div style={{display:"flex", flexWrap:"wrap", marginTop:"20px", marginLeft:"0", marginRight:"0", justifyContent:"center"}}>
                    {
                        cards.map(
                            function(element,i){
                                return (
                                    <ContentCards data={cards[i]}/>
                                )
                            }
                        )
                    }
                </div>
            )
        }
        else{return <h2 id="HomePageEmptyText">No classes to show at this moment</h2>}
    }

    if(isLoaded) {
        return (
            // <div style={{display:"flex", justifyContent:"center", margin:"20px"}}>
            //     <RenderCheck/>
            // </div>
            <Container className="justify-content-center">
                <RenderCheck/>
            </Container>
        )
    } else {
        return (
            <BoxLoading color="rgb(33, 153,249)"/>
        )
    }

}
