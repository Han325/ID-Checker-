// ID checker 
// Started on 31/12/2021 
// Completed on 4/1/2021 for ligic base solution and basic but functional GUI hosted by React 
import React from "react"
import DisplayData from "../idDisplay"
import {
    BgContainer,
    MainContainer,
    SearchContainer,
    SearchWrapper,
    Input,
    Label,  
    SearchButton,
    UpdateSection,
    UpdateButton,
    AddChildSection,
    SepLine,
    AddChildButton,
    DeleteChildSection,
    DeleteChildButton,
    GenderFilter,
    CheckboxLabel,
    QueryContainer,
    UpdateContainer,
    DeleteWrapper
} from "./Elements"
import idData from "../Data/idData"
import { Display, OverFlowWrapper, TextHeader, TextRow } from "../idDisplay/idDisplayElements"
import Result from "../Result"

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // Gender Search Section
            isMale: false,
            isFemale: false,
            genderData:[],
            //Search Section
            keyword1:"",
            keyword2:"",
            refkeyWord:"",
            testData: [],
            // Update User Section
            childName:"",
            gender:"",
            myKid:"",
            guardName:"",
            relationship:"",
            address:"",
            contact:"",
            carNum:"",
            updatedData: [],
            // new User section
            newChild: {
                childName: "",
                gender:"",
                MyKid:"",
                guardName:"",
                relationship:"",
                address:"",
                contact:"",
                carNum:""
            },
            newChildName:"",
            newChildGender:"",
            newMyKid:"",
            newGuardName:"",
            newRelationship:"",
            newAddress:"",
            newContact:"",
            newCarNum:"",
            doUpdateNewUser: false,
            //delete section
            deleteChildName:"",
            deleteMyKid:"",
            deleteGender:"",
            // render booleans
            doUpdate: false,
            update: false,
            doDeleteUser: false,
        }

        this.checkboxConfigFemale = this.checkboxConfigFemale.bind(this)
        this.checkboxConfigMale = this.checkboxConfigMale.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateChange = this.updateChange.bind(this)
        this.search = this.search.bind(this)
        this.updateQuery = this.updateQuery.bind(this)
        this.update = this.update.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.newUser = this.newUser.bind(this)
        this.addNewUser = this.addNewUser.bind(this)
        this.deleteUser= this.deleteUser.bind(this)
        this.delete = this.delete.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value.toLowerCase(),
        })
    }
    
    updateChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

        this.setState(prevState => ({
            newChild: {                   
                ...prevState.newChild,   
                childName: this.state.newChildName,
                gender: this.state.newChildGender,
                MyKid: this.state.newMyKid,
                guardName:this.state.newGuardName,
                relationship: this.state.newRelationship,
                address: this.state.newAddress,
                contact: this.state.newContact,
                carNum: this.state.newCarNum
            }
        }))
    }

    checkboxConfigFemale(){
        this.setState(prevState =>{
            return{
                isFemale: !prevState.isFemale
            }
        })
        console.log(this.state.isFemale)
    }

    checkboxConfigMale(){
        this.setState({
            isMale: !this.state.isMale
        })
    }

    search(){
        let result
        let toLowerData

        toLowerData = idData.map(data => {
            return {
                childName: data.childName.toLowerCase(),
                gender: data.gender.toLowerCase(),
                MyKid: data.MyKid.toLowerCase(),
                guardName: data.guardName.toLowerCase(),
                relationship: data.relationship.toLowerCase(),
                address: data.address.toLowerCase(),
                contact: data.contact.toLowerCase(),
                carNum: data.carNum.toLowerCase()
            }
        })

        if (this.state.keyword2 === ""){
            result = toLowerData.filter(data => {
                return  data.childName.includes(this.state.keyword1) === true ||
                        data.gender.includes(this.state.keyword1) === true ||
                        data.MyKid.includes(this.state.keyword1) === true||
                        data.guardName.includes(this.state.keyword1) === true||
                        data.relationship.includes(this.state.keyword1) === true||
                        data.address.includes(this.state.keyword1) === true ||
                        data.contact.includes(this.state.keyword1) === true ||
                        data.carNum.includes(this.state.keyword1) === true
            })
        } else {
            result = toLowerData.filter(data => {
                return  data.childName.includes(this.state.keyword1 && this.state.keyword2) === true ||
                        data.gender.includes(this.state.keyword1 && this.state.keyword2) === true ||
                        data.MyKid.includes(this.state.keyword1 && this.state.keyword2) === true||
                        data.guardName.includes(this.state.keyword1 && this.state.keyword2) === true||
                        data.relationship.includes(this.state.keyword1 && this.state.keyword2) === true||
                        data.address.includes(this.state.keyword1 && this.state.keyword2) === true ||
                        data.contact.includes(this.state.keyword1 && this.state.keyword2) === true ||
                        data.carNum.includes(this.state.keyword1 && this.state.keyword2) === true
            })
        }

        var finalResult = idData.filter(function(obj) {
            return result.some(function(obj2) {
                return obj.contact === obj2.contact
            })
        })

        if (finalResult === []){
            return
        } else {
            this.setState({
                testData: finalResult,
                keyword1: "",
                keyword2:""
            })
        }
    }

    updateQuery(){
        let result
        let toLowerData
        let formatedChildName = this.state.childName.toLowerCase()
        let formatedmyKid = this.state.myKid.toLowerCase()

        toLowerData = idData.map(data => {
            return {
                childName: data.childName.toLowerCase(),
                gender: data.gender.toLowerCase(),
                MyKid: data.MyKid.toLowerCase(),
                guardName: data.guardName.toLowerCase(),
                relationship: data.relationship.toLowerCase(),
                address: data.address.toLowerCase(),
                contact: data.contact.toLowerCase(),
                carNum: data.carNum.toLowerCase()
            }
        })

        if (this.state.childName === "" && this.state.myKid === "") {
            return
        } else if (this.state.myKid === "") {
            result = toLowerData.filter(data => {
                return data.childName.includes(formatedChildName) === true
            })
        } else if (this.state.childName === ""){
            result = toLowerData.filter(data => {
                return data.MyKid.includes(formatedmyKid) === true
            })
        } else {
            result = toLowerData.filter(data => {
                return data.childName.includes(formatedChildName) === true &&
                       data.MyKid.includes(formatedmyKid) === true
            })
        }

        let finalResult = idData.filter(function(obj) {
            return result.some(function(obj2) {
                return obj.contact === obj2.contact
            })
        })

        if (finalResult === []){
            return
        } else {
            this.setState({
                updatedData: finalResult,
            })
        }
    }

    update(){
        this.setState({
            update: true
        })
        if (this.state.childName === "" && this.state.myKid === "" && this.state.gender === "") {
            return
        } else {
            this.changeDesc(this.state.childName, this.state.myKid, this.state.gender, this.state.guardName, this.state.relationship, this.state.address, this.state.contact, this.state.carNum)
        }
    }

    changeDesc(childName, myKid, gender, guardName, relationship, address, contact, carNum) {
        for (var i in idData) {
          if (idData[i].childName === childName && idData[i].MyKid === myKid && idData[i].gender === gender) {
             idData[i].guardName = guardName;
             idData[i].relationship = relationship;
             idData[i].address = address;
             idData[i].contact = contact;
             idData[i].carNum = carNum;
             break; 
          }
        }
    }

    newUser(){
        this.setState({
            doUpdateNewUser: true
        })

        if(this.state.newChild.childName ===""){
            return
        } else {
            this.addNewUser()
        }
    }

    addNewUser(){
        idData.push(this.state.newChild)
        
        this.setState({
            newChildName: "",
            newChildGender: "",
            newMyKid: "",
            newGuardName:"",
            newRelationship:"",
            newAddress:"",
            newContact:"",
            newCarNum:"",
            newChild: {}
        })
    }

    deleteUser(){
        this.setState({
            doDeleteUser: true
        })
        console.log(this.state.deleteGender)
        this.delete(this.state.deleteChildName, this.state.deleteMyKid, this.state.deleteGender)
    }

    delete(childName, myKid, gender){
        for (var i in idData) {
            if (idData[i].childName === childName && idData[i].MyKid === myKid && idData[i].gender === gender) {
                delete idData[i]
                break; 
            }
        }
    }

    render(){
        let genderMale = idData.filter(data => {
            return  data.gender.includes("Male") === true
        })

        let genderFemale = idData.filter(data => {
            return data.gender.includes("Female") === true
        })

        let genderResult
        if(this.state.isMale === true){
            genderResult = genderMale.map(data => {
                return (
                    <Result
                        childName = {data.childName}
                        gender = {data.gender}
                        myKid = {data.MyKid}
                        guardName = {data.guardName}
                        relationship = {data.relationship}
                        address = {data.address}
                        contact = {data.contact}
                        carNumber = {data.carNum}        
                    />
                )
            })   
        } else if (this.state.isFemale === true){
            genderResult = genderFemale.map(data => {
                return (
                    <Result
                        childName = {data.childName}
                        gender = {data.gender}
                        myKid = {data.MyKid}
                        guardName = {data.guardName}
                        relationship = {data.relationship}
                        address = {data.address}
                        contact = {data.contact}
                        carNumber = {data.carNum}        
                    />
                )
            })   
        } else if(this.state.isMale === true && this.state.isFemale === true){
            genderResult = idData.map(data => {
                return (
                    <Result
                        childName = {data.childName}
                        gender = {data.gender}
                        myKid = {data.MyKid}
                        guardName = {data.guardName}
                        relationship = {data.relationship}
                        address = {data.address}
                        contact = {data.contact}
                        carNumber = {data.carNum}        
                    />
                )
            })   
            
        }

        let displayResult = this.state.testData.map(data => {
            return (
                <Result
                    childName = {data.childName}
                    gender = {data.gender}
                    myKid = {data.MyKid}
                    guardName = {data.guardName}
                    relationship = {data.relationship}
                    address = {data.address}
                    contact = {data.contact}
                    carNumber = {data.carNum}
                />
            )
        })
        let displayUpdatedResult = this.state.updatedData.map(data => {
            return (
                <Result
                    childName = {data.childName}
                    gender = {data.gender}
                    myKid = {data.MyKid}
                    guardName = {data.guardName}
                    relationship = {data.relationship}
                    address = {data.address}
                    contact = {data.contact}
                    carNumber = {data.carNum}
                />
            )
        })
        return(
            <BgContainer>
                <MainContainer>
                <DisplayData/>
                <GenderFilter>
                    <Label>Search by Gender</Label>
                    <Input
                        type="checkbox"
                        onClick={this.checkboxConfigMale}
                    ></Input>
                    <CheckboxLabel>Male</CheckboxLabel>
                    <Input
                        type="checkbox"
                        onClick ={this.checkboxConfigFemale}
                        ></Input>
                    <CheckboxLabel>Female</CheckboxLabel>
                </GenderFilter>
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
                    {genderResult}
                    </Display>
                </OverFlowWrapper>
                <SearchContainer>
                    <Label>Search by one keyword:</Label>
                    <Input
                        type="text"
                        placeholder="Search by one keyword"
                        name="keyword1"
                        value={this.state.keyword1}
                        onChange = {this.handleChange}
                        ></Input>
                    <Label>Add another keyword:</Label>
                    <Input
                        type="text"
                        placeholder="Add another keyword"
                        name="keyword2"
                        value={this.state.keyword2}
                        onChange = {this.handleChange}
                        ></Input>
                    <SearchWrapper>
                        <SearchButton
                            onClick={this.search}
                            >Search</SearchButton>
                    </SearchWrapper>
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
                        {displayResult}
                        </Display>
                    </OverFlowWrapper>
                </SearchContainer>
                <UpdateSection>
                    <Label>Update your child's info:</Label>
                    <QueryContainer>
                        <Input
                            type="text"
                            placeholder="Child's Name"
                            name="childName"
                            value={this.state.childName}
                            onChange={this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="MyKid Number"
                            name="myKid"
                            value={this.state.myKid}
                            onChange={this.updateChange}
                            ></Input>
                        <SearchButton
                            onClick={this.updateQuery}
                            >Search</SearchButton>
                    </QueryContainer>
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
                                {displayUpdatedResult}
                            </Display>
                        </OverFlowWrapper>
                    <UpdateContainer>
                        <Input
                            type="text"
                            placeholder="Enter new guardian name"
                            name="guardName"
                            value={this.state.guardName}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Enter new relationship status"
                            name="relationship"
                            value={this.state.relationship}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Enter new address"
                            name="address"
                            value={this.state.address}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Enter new contact"
                            name="contact"
                            value={this.state.contact}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Enter new car number"
                            name="carNum"
                            value={this.state.carNum}
                            onChange = {this.updateChange}
                            ></Input>
                        <UpdateButton onClick={this.update}>Update</UpdateButton>
                    </UpdateContainer>
                </UpdateSection>
                <AddChildSection>
                    <Label>Add New Child</Label>
                    <Input
                        type="text"
                        placeholder="Enter child's name"
                        name="newChildName"
                        value={this.state.newChildName}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter gender"
                        name="newChildGender"
                        value={this.state.newChildGender}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter child's MyKid number"
                        name="newMyKid"
                        value={this.state.newMyKid}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter guardian's name"
                        name="newGuardName"
                        value={this.state.newGuardName}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter relationship status"
                        name="newRelationship"
                        value={this.state.newRelationship}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter address"
                        name="newAddress"
                        value={this.state.newAddress}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter contact"
                        name="newContact"
                        value={this.state.newContact}
                        onChange = {this.updateChange}
                        ></Input>
                    <Input
                        type="text"
                        placeholder="Enter car plate number"
                        name="newCarNum"
                        value={this.state.newCarNum}
                        onChange = {this.updateChange}
                        ></Input>
                    <AddChildButton
                        onClick = {this.newUser}
                        >Add New Child</AddChildButton>

                </AddChildSection>
                <DeleteChildSection>
                    <Label>Delete Child</Label>
                    <DeleteWrapper>
                        <Input
                            type="text"
                            placeholder="Enter child's name"
                            name="deleteChildName"
                            value={this.state.deleteChildName}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder = "Enter child's gender"
                            name="deleteGender"
                            value={this.state.deleteGender}
                            onChange = {this.updateChange}
                            ></Input>
                        <Input
                            type="text"
                            placeholder="Enter child's MyKid number"
                            name="deleteMyKid"
                            value={this.state.deleteMyKid}
                            onChange = {this.updateChange}
                            ></Input>
                    </DeleteWrapper>
                    <DeleteChildButton onClick={this.deleteUser}>Delete Child</DeleteChildButton>
                </DeleteChildSection>
            </MainContainer>
        </BgContainer>
        )
    }
}

export default Main