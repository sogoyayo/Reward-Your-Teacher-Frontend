import React from 'react'
import './PaymentModal.css'

const PaymentModal = ({children,title, closeModal,icon}) => {
  return (
    <div className='Modal-Area2'>
    <div className='Modal-Content2'>
   <div className='Modal-header2'>
    <div className='image-title'>
    <img src={icon} alt="imgs"></img>
    <h2 style={{
      fontSize: '20px',
    }}>{title}</h2>
    </div>
   
    <button className='close-button2' onClick={(e)=> closeModal(e)}>&times;</button>
   </div>
   <div className='Modal-body2' style={{
    padding: '4rem'
   }}>
       {children}
   </div>
</div>
</div>  )
}

export default PaymentModal