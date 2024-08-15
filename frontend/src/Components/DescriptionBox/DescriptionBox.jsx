import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Praesentium, iusto temporibus. Nostrum, vitae ratione cum autem, sapiente 
            sequi consequatur consequuntur maiores rem cupiditate reiciendis eos consectetur iure obcaecati saepe quam!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus cupiditate sit ipsa laboriosam illo dolore veritatis laborum doloremque reiciendis veniam 
            nihil praesentium eos at voluptatum, modi obcaecati expedita unde nobis?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
