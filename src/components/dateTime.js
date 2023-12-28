
import  React, { useState , useEffect } from 'react'
import { TheDate, EndDate } from './smallElements.styles';
import '../App.css';

export const DateTime = (props) => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="dateDiv">
            <div>
            {props.time
                ?
                <><TheDate>{date.toLocaleTimeString()}</TheDate></>
                :
                <></>
            }
            {props.date
                ?
                <><TheDate>{date.toLocaleDateString()}</TheDate></>
                :
                <></>
            }
            </div>
            <EndDate>{props.endDate}</EndDate>
        </div>
    )
}

export default DateTime