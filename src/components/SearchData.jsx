import React, {useState} from 'react';
import Datas from './MOCK_DATA.json';


export default function SearchData() {
    const [srchTerm, setsrchterm] = useState('')


    return <div className='user'>
        
        <input type="text" 
        name="search" 
        id="search"  
        placeholder='search league' 
        onChange={evnt=> { setsrchterm(evnt.target.value)}}
        />
    
    {Datas.filter( val => {
        if (srchTerm === '') {
            return val
        } else if (val.first_name.toLocaleLowerCase().includes(srchTerm.toLocaleLowerCase())) {
            return val
        }
    }).map((val, key) => {
        return(<div key={key} >
            
                { val.first_name} { val.last_name}
                
            
            </div>
        )
    })}
    {/* <Datas /> */}
    
    
    </div>;
}
