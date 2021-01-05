import React from "react"
import { ListContent, ListItem } from "../List/listElements"

class Result extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <ListContent>
                <ListItem>{this.props.childName}</ListItem>
                <ListItem>{this.props.gender}</ListItem>
                <ListItem>{this.props.myKid}</ListItem>
                <ListItem>{this.props.guardName}</ListItem>
                <ListItem>{this.props.relationship}</ListItem>
                <ListItem>{this.props.address}</ListItem>
                <ListItem>{this.props.contact}</ListItem>
                <ListItem>{this.props.carNumber}</ListItem>
            </ListContent>
        )
    }
}

export default Result