import { RainbowBox, Article } from './rainbow.styles';
import ButtonLine from './buttonLine';
import { Title, Details, Locations } from './smallElements.styles';
import '../App.css';
import DateTime from './dateTime';

const Entry = (props) => {
   

    return(
        <div>
            <RainbowBox>
                <Article>
                    <Title>{props.title}</Title>
                    <DateTime time date endDate={props.endDate}/>
                    <Locations>{props.location}<img className="mapImg" alt={`Map of ${props.location}`} src="" ></img></Locations>
                    <Details>{props.details}</Details>
                </Article>
                <ButtonLine/>
            </RainbowBox>
        </div>
    )
}
export default Entry;