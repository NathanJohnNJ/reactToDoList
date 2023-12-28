import styled from 'styled-components'
import '../App.css'

export const Button = styled.button`
    width: 120px;
    height: 80px;
    border-radius: 25px;
    border-style: none;
    color: var(--mainBG);
    background-color: var(--infoCol);
    text-decoration: none;
    font-family: 'League Spartan', sans-serif;
    font-weight: black;
    font-size: 16px;
    margin: 5px;
    height: 25px;
    &:hover {
    background-color: var(--secondaryBG);
    color: var(--infoCol);
    border-color: var(--secondaryBG);
    border-style: inset;
  }
`;
export const DeleteButton = styled(Button)`
    color: "#FF0000";
    border-color: "#FF0000";
    margin-left: 200px;
`;

export const Title = styled.h1`
    color: var(--mainBG);
    font-size: 34px;
    font-weight: 250;
    text-align: left;
    font-family: 'NathanOutline', sans-serif;
    width: 98%;
    white-space: nowrap;
    height:20px;
    margin-top: 0px;
`;
export const TheDate = styled.div`
  color: var(--infoCol);
  font-size: 12px;
  font-weight: 450;
  text-align:left;
  font-family: 'League Spartan', sans-serif;
  display: inline-flex;
  margin-right: 10px;
  justify-self: flex-start;
`;
export const EndDate = styled(TheDate)`
    text-align: right;
    font-weight: 600;
`;

export const Details = styled.p`
  color: var(--secondaryBG);
  font-size: 14 px;
  font-family: 'Poppins', sans-serif;
  white-space: normal;
  text-align: left;
  border-radius: 5px;
`;
export const Locations = styled.input`
  color: var(--secondaryBG);
  font-family: 'Poppins', sans-serif;
  white-space: normal;
  text-align: left;
  background-color: var(--infoCol);
  opacity: 60%;
  stroke-opacity: 100%;
  height: 11px;
  width: fit-content;
  padding: 3px 10px 8px 10px;
  font-weight: 650;
  border-radius: 25px;
  font-size: 12px;
  &:hover{
    .mapImg{
      display:absolute;
    }
  }
`