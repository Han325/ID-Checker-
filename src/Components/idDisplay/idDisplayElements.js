import styled from "styled-components"

export const OverFlowWrapper = styled.div`
  overflow-x: auto;
`

export const Display = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const TextRow = styled.tr`
  border:none;
  :nth-child(even){background-color: #f2f2f2;}
`

export const TextHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);
  color: white;
  border: 0px solid rgb(231,76,60);
  padding: 8px;
`