import React,{ useLayoutEffect } from 'react'
import NavBar from '../navbar/navbar'
import Body from './body/Body'
import Heading from './heading/Heading'
import './styles/Assignments.css'
import { myaxios, authorize } from '../../connections.js'

export default function Assignments() {

    useLayoutEffect(() => {
        async function fetchData(){
            var options = {
                method: 'get',
                url: 'assignments/', 
                headers: {
                'Content-Type': 'application/json'
                }
            }
            try {
                const res = await myaxios(options)
                console.log("response")
                console.log(res.data[0]["title"]);
                window.exp=res.data;
                console.log(res.data[0]["teacher"]);
                console.log(res.data[0]["deadline"]);
                console.log(res.data[0]["score"])
                window.Assignments=[]
                for(var i=0;i<res.data.length;i++){
                    var temp={
                        "Topic":res.data[i]["title"],
                        "Subject":res.data[i]["teacher"],
                        "Due_Date":(res.data[i]["deadline"].toString()).substring(0,19),
                        "Graded_Status":res.data[0]["score"],
                        "PS":"Sample Problem Statement"
                    }
                    window.Assignments.push(temp)
                }
            }catch{

            }
        }
            fetchData();
            
    }, [])
    // fetchAssignments()
    return (
        
        <div>
            {/* <NavBar/> */}
            <div className="Assignments">
                
                <Heading/>
                <Body/>
            </div>
        </div>
        
    )
}
