import React from 'react'
import { useDispatch } from 'react-redux'
import {closeMode} from './modalSlice'

import './modal.css'
const Modal = ({handlefetch}) => {
    const dispatch = useDispatch()

  return (
    <div className='modal__container'>
      <div className='modal'>
        <h4>Leg has been submitted!</h4>
        <div className='btn__container'>
            <button className='cancel__btn' type='button' onClick={()=>dispatch(closeMode())}>Cancel</button>
            <button className='result__btn' type='button' onClick={()=>{
              handlefetch()
              dispatch(closeMode())}}>Fetch Result</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
