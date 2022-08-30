import React, {useState,useEffect} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
;

export default function Match() {
    const [matches, matchesData ] = useState([])
    const [searchTerm, setSearchTerm ] = useState('')

    useEffect( () => {
        axios.get('https://www.scorebat.com/video-api/v3/')
        .then(res => matchesData(res.data.response))
        .catch(err=> console.error(err))
    },[])
    return (<div className='body'>

        <div className="intro">
            <h1>Match Highlights</h1>
        <h2>There are {matches.length} matches</h2>

    <div className="lgSrch">
        <label htmlFor="search"> <h3> Search by League Name: </h3></label>

        <input type="text" 
        name="search" 
        id="search"  
        placeholder='search...' 
        onChange={evnt=> { setSearchTerm(evnt.target.value)}}
        />
        <br />
    </div>
        
            </div>
        
        <div id="top"></div>
        <a href="#down" className='arrows down'>Down👇</a>

        <div className="matches">
            {matches && matches.filter( val => {
        if (searchTerm === '') {
            return val
        }  if (val.competition.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
        }
    }).map(ftbl => {
                return( 
                    <div key={ftbl.thumbnail} className='eachGame'>
                        
                        <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src={ftbl.thumbnail}  style={{width:'5.8pc'}}/> */}
                            <img src={ftbl.thumbnail} alt={ftbl.title} style={{width:'200px'}}/>
                            <Card.Body>
                                <Card.Title>{ftbl.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ftbl.date}</Card.Subtitle>
                                <Card.Text>
                                {ftbl.competition}
                                </Card.Text>
                                
                    
                                <a href={ftbl.matchviewUrl} target={'_blank'} rel="noreferrer">Highlights</a><br /><br />
                                <a href={ftbl.competitionUrl} target={'_blank'} rel="noreferrer">League</a><br /><br />
                            </Card.Body>
                        </Card>
                        
                        
                    </div>
                    
                )
            })}
            <div id="down"></div>
        </div>
            <a href="#top" className='arrows top'>top👆</a>
    </div>)
}
