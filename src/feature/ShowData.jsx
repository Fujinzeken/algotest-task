import React from 'react'
import {useDispatch} from 'react-redux'
import { notshow } from './modal/showDataSlice'
import './showData.css'
const ShowData = ({ Lots,Expiry,MomentumType, MomentumValue,positionType,
    TrailSL,TrailSLIstrumentMove,TrailSLSTMove,optionType,strikeCriteria,strikeType,
    lowerRange, upperRange,premium,atmStrike,straddlePrice}) => {

   
    const dispatch =useDispatch()
  return (
    <div className='data__container'>
        <div className='data__wrapper'>
            <h4>List of entered Data</h4>
            <div className='data'>
            <p>Lot :</p>
            <p>{Lots}</p>
            </div>

            <div className='data'>
            <p>Expiry :</p>
            <p>{Expiry}</p>
            </div>

            <div className='data'>
            <p>Momentum Type :</p>
            <p>{MomentumType}</p>
            </div>

            <div className='data'>
            <p>MomentumValue :</p>
            <p>{MomentumValue}</p>
            </div>

            <div className='data'>
            <p>PositionType :</p>
            <p>{positionType?positionType:'None'}</p>
            </div>

            <div className='data'>
            <p>TrailStopLoss :</p>
            <p>{TrailSL?TrailSL:'None'}</p>
            </div>

            <div className='data'>
            <p>Instrument Move :</p>
            <p>{TrailSLIstrumentMove?TrailSLIstrumentMove:'None'}</p>
            </div>

            <div className='data'>
            <p>Stop Loss Move :</p>
            <p>{TrailSLSTMove?TrailSLSTMove:'None'}</p>
            </div>

            <div className='data'>
            <p>Option Type :</p>
            <p>{optionType?optionType:'None'}</p>
            </div>

            <div className='data'>
            <p>Strike Criteria :</p>
            <p>{strikeCriteria?strikeCriteria:'None'}</p>
            </div>

            <div className='data'>
            <p>Entry By Strike :</p>
            <p>{strikeType?strikeType:'None'}</p>
            </div>

            <div className='data'>
            <p>Entry By Premium-Lower :</p>
            <p>{lowerRange?lowerRange:'None'}</p>
            </div>

            <div className='data'>
           <p>Entry by Premium-Upper :</p>
            <p>{upperRange?upperRange:'None'}</p>
            </div>

             <div className='data'>
            <p>Strike Type :</p>
            <p>{premium?premium:'None'}</p>
            </div>

            <div className='data'>
            <p>Adjustment :</p>
            <p>{atmStrike?atmStrike:'None'}</p>
            </div>

            <div className='data'>
            <p>Multiplier :</p>
            <p>{straddlePrice?straddlePrice:'None'}</p>
            </div> 
            
            <div>
            <button onClick={()=>dispatch(notshow())}>Close</button>
            </div>
        </div>
    </div>
   
  )
}

export default ShowData
