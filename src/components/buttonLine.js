import styled from 'styled-components';
import { Button, DeleteButton } from './smallElements.styles';
import '../App.css'

const ButtonLine = () => {
    const ButtonArea = styled.div`
        display: flex;
        flex-direction: row;
    `

    return(
        <div>
            <ButtonArea>
                <Button>Ammend</Button>
                <Button>Link with...</Button>
                <DeleteButton>Delete</DeleteButton>
            </ButtonArea>
        </div>
    )
}
export default ButtonLine;