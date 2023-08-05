import React from 'react'
import "./Modal.styles.js"
import { ModalContainer } from './Modal.styles.js'
const Modal = ({ children, closeModal, title }) => {
  return (
    <ModalContainer>
    <div className='Modal-Area'>
        <div className='Modal-content'>
            <div className='Modal-header'>
             <button className="close-button" onClick={(e)=>closeModal(e)}>&times;</button>
            </div>
          <div className='Modal-body'>
            {children}
          </div>
        </div>
    </div>
    </ModalContainer>
  )
}
export default Modal