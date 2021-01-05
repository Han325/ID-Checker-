import styled from "styled-components"

export const BgContainer = styled.div`
  background: #F7DC6F;
  padding: 50px;
  height: auto;
`

export const MainContainer = styled.div`
  background: rgb(118,215,196);
  background: linear-gradient(147deg, rgba(118,215,196,1) 0%, rgba(72,201,176,1) 50%, rgba(26,188,156,1) 100%);  padding: 70px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -0%);
  max-width:1500px;
  @media (max-width: 700px) {
      padding: 40px;
  }
`

export const GenderFilter = styled.div`
  /* background-color: yellow; */
  margin-top: 20px;

  input {
      margin-top: 10px;
      margin-right: 5px;
      margin-bottom: 10px;
  }
`

export const CheckboxLabel = styled.label`
  margin-right: 5px;
  margin-bottom: 10px;
  position:relative;
  top:-1px;
`

export const SearchContainer = styled.div`
  /* background-color: teal; */
  margin-top: 20px;

  input {
    /* width: 100%; */
    padding: 8px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline:none;
  }

  button {
    margin-top:10px;
    margin-bottom: 10px;
    background: rgb(255,201,113);
    background: linear-gradient(166deg, rgba(255,201,113,1) 0%, rgba(245,176,65,1) 50%, rgba(245,176,65,1) 100%);
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

  }
`

export const SearchWrapper = styled.div`

`

export const Input = styled.input`

`

export const SearchButton = styled.button`
  
`

export const Label = styled.form`
    font-size: 20px;
    /* color: white; */
`

export const UpdateSection = styled.div`
  margin-top: 20px;

  

  button {
    background: rgb(255,201,113);
    background: linear-gradient(166deg, rgba(255,201,113,1) 0%, rgba(245,176,65,1) 50%, rgba(245,176,65,1) 100%);
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

  }
`

export const QueryContainer = styled.div`
    margin-bottom:10px;
    input {
        margin-top: 10px;
        margin-right: 20px;
        padding: 8px 15px;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        outline:none;
    }
    button {
        position: relative;
        top: 2px;
        margin-left: 20px;
    }
  
`

export const UpdateContainer =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  input {
    width: 30%;
    margin-top:10px;
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 8px 12px;
    display: inline-block;
    border:none;
    /* border: 1px solid #ccc; */
    box-sizing: border-box;
    outline:none
  }

  button {
      margin-top: 10px;
      margin-bottom: 5px;
      width: 7%;
  }

  
`

export const UpdateButton = styled.button`
`

export const SepLine = styled.hr``

export const AddChildSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
      margin-top:5px;
      margin-right: 5px;
      width: 30%;
    margin-top:10px;
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 8px 12px;
    display: inline-block;
    border:none;
    /* border: 1px solid #ccc; */
    box-sizing: border-box;
    outline:none
  }

  button {
    margin-top:10px;
    width: 10%;
    background: rgb(255,201,113);
    background: linear-gradient(166deg, rgba(255,201,113,1) 0%, rgba(245,176,65,1) 50%, rgba(245,176,65,1) 100%);
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`

export const AddChildButton = styled.button``

export const DeleteWrapper = styled.div`
  
`

export const DeleteChildSection = styled.div`
  margin-top: 20px;

  input {
      margin-top:5px;
      margin-right: 5px;
      width: 15%;
    margin-top:10px;
    margin-right: 20px;
    padding: 8px 12px;
    display: inline-block;
    border:none;
    /* border: 1px solid #ccc; */
    box-sizing: border-box;
    outline:none
  }

  button {
    margin-top:10px;
    width: 10%;
    background: rgb(255,201,113);
    background: linear-gradient(166deg, rgba(255,201,113,1) 0%, rgba(245,176,65,1) 50%, rgba(245,176,65,1) 100%);
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`

export const DeleteChildButton = styled.button``