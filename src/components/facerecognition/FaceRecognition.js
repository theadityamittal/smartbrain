import React from 'react';

const FaceRecognition = ({ imageUrl }) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='none' src={imageUrl} width='80%' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition;