import { useState } from 'react';
import Buttons from './Buttons';
import { data } from './data';
import Interitem from './Interitem';

function Interior() {
    const [item, setItem] = useState(data);
  
    const choseItem = (searchKey) => {
    const newItem = data.filter (element => element.key === searchKey);
      setItem(newItem);
    }
    return (

        <div>
          <Buttons filterFunc = {choseItem}/>
          <Interitem anyItem={item}/>
        </div>
    )
}
export default Interior;


