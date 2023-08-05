import React from 'react'
import './SuccessModal.css'

const SuccessModal = ({children, closeModal}) => {
    return (
        <div className='Modal-Area2' onClick={closeModal}>
        <div className='Modal-Content2'>
       <div className='Modal-body2'>
           {children}
       </div>
    </div>
    </div>  )
}

export default SuccessModal