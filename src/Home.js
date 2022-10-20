import { data } from './data';
import { useState } from 'react';

function Home() {

    const [item, setItem] = useState(0);
    const {image} = data[item];
    
    const previousItem = () => {
        setItem (pict => {
        pict --;
        if (pict < 0) {
            pict = data.length - 1;
        }
        return pict;
        })
        }
        const nextItem = () => {
        setItem (pict =>{
        pict ++;
        if (pict > data.length-1) {
            pict = 0;
        }
        return pict;
        }
        )
    }
       
    return (
        <div >
            <div className='container'>
                <img src={image} width = "800px" height="500px" alt="pict"/>
            </div>
            <div className='cont btn'>
                <button className='nav' onClick= {previousItem} >Prev</button>
                <button className='nav' onClick= {nextItem} >Next</button>
            </div>
        </div>
    );
}
export default Home;