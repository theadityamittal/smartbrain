import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component{
  render(){
    const { imageUrl, box } = this.props;
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
          {box.map((face) => {
            return <div className='bounding-box' style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>  
          })}
        </div>
      </div>
    );
  }
}

export default FaceRecognition;