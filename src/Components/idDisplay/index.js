import React from "react"
import List from "../List"
import idData from "../Data/idData"
import {
    Display,
    TextRow,
    TextHeader,
    OverFlowWrapper
} from "./idDisplayElements"

class DisplayData extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        let idDataExt = idData.map((dataObj, i, data) => {
            return(
                <List
                    childName = {data[i].childName}
                    gender = {data[i].gender}
                    myKid = {data[i].MyKid}
                    guardName = {data[i].guardName}
                    relationship = {data[i].relationship}
                    address = {data[i].address}
                    contact = {data[i].contact}
                    carNumber = {data[i].carNum}
                />
            )
        })
        return(
            <OverFlowWrapper>
                <Display>
                    <TextRow>
                        <TextHeader>Child Name</TextHeader>
                        <TextHeader>Gender</TextHeader>
                        <TextHeader>MyKid Number</TextHeader>
                        <TextHeader>Guardian Name</TextHeader>
                        <TextHeader>Relationship</TextHeader>
                        <TextHeader>Address</TextHeader>
                        <TextHeader>Contact</TextHeader>
                        <TextHeader>Car Number</TextHeader>
                    </TextRow>
                    {idDataExt}  
                </Display>
            </OverFlowWrapper>
        )
    }
}

export default DisplayData