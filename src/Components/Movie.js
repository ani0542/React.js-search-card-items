import React from 'react'
import img1 from '../assets/11.jpg'
import img2 from '../assets/9.jpg'
import img3 from '../assets/10.jpg'
import img4 from '../assets/111.jpg'
import img5 from '../assets/113.jpg'
import img6 from '../assets/114.jpg'
import img7 from '../assets/116.jpg'
export default function Movie(props) {
    let image='';
    switch(props.name)
    {
        case 'dark knight':
            image=img1;
        break;
        case 'fight club':
            image=img2;
        break;
        case 'lord of the rings':
            image=img3;
        break;
        case 'nacho libre':
            image=img4;
        break;
        case 'raabta':
            image=img5;
        break;
        case 'dhoni':
            image=img6;
        break;
        case 'Matrix':
            image=img7;
        break;
        default:
            image='';
    }
    let cover={
        backgroundImage:'url('+ image +')'
    
    }
    return (
        <div>
                
                            <div className='movie-container'>
                                    <div className='movie-image' style={cover}></div>
                                    <p className='movie-title'>{props.name}</p>
                                <p className='movie-year'>{props.year}</p>
                            </div> 
                             
                    
        </div>
    )
}
