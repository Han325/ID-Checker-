import styled from "styled-components"

export const ListContent= styled.tr`

  background: rgb(255,255,255);
  background: linear-gradient(166deg, rgba(255,255,255,1) 0%, rgba(251,251,252,1) 50%, rgba(234,235,235,1) 100%);
  
  :nth-child(even){
    background: rgb(237,237,237);
    background: linear-gradient(147deg, rgba(237,237,237,1) 0%, rgba(240,240,240,1) 50%, rgba(227,227,227,1) 100%);  }
`

export const ListItem = styled.td`
  border: 0px solid #ddd;
  padding: 8px;
`
