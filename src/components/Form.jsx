import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './form.css'
import {openMode} from '../feature/modal/modalSlice'
import { useDispatch } from 'react-redux'
import {url} from '../firebase'
import axios from 'axios'

// disabled1, setDisabled1,disabled2,setDisabled2,simple,setSimple, simpleNum, setSimpleNum, trail,setTrail, trailNum1,setTrailNum1,
// trailNum2, setTrailNum2

const Form = ({lot,position,option,id,arrList,setArrList,
  strikeType,expiry, low, high, premium, straddle, atmStrike,value, showOption,
}) => {

  const dispatch = useDispatch()

    const [newstrikeCriteria, setNewStrikeCriteria] = useState(value)
    const [totalLot, setTotalLot] = useState(lot)
    const [newPosition, setNewPosition] = useState(position)
    const [Option, setOption] = useState(option)
    const [newExpiry, setNewExpiry] = useState(expiry)
    const [newstrikeT, setNewStrikeT] = useState(strikeType)
    const [newPremium, setNewPremium] = useState(premium)
    const [Atmstrike, setAtmStrike] = useState(atmStrike)
    const [lower, setLower] = useState(low)
    const [Upper, setUpper] = useState(high)
    const [straddlePrice, setStraddlePrice] = useState(straddle)
    const [disabled1, setDisabled1] = useState(true)
    const [disabled2, setDisabled2] = useState(true)
    const [simple, setSimple] = useState('Points')
    const [simpleNum, setSimpleNum] = useState(0)
    const [trail, setTrail] = useState('Points')
    const [trailNum1, setTrailNum1] = useState(0)
    const [trailNum2, setTrailNum2] = useState(0)

    

    const handleSubmit =(e)=>{
      e.preventDefault()
    }

    const handleSubmitForm =(id)=>{
      const leg = arrList.filter((item)=>item.id === id)
      console.log(leg)
        let updateVal = {}
        const Lot = leg[0].Lot = totalLot
        const PositionType = leg[0].Position = newPosition
        const Simple = leg[0].simple = simple
        const SimpleNum = simpleNum
        const Trail = leg[0].trail = trail
        const TrailNum1 = leg[0].trailNum = trailNum1
        const TrailNum2 = leg[0].trailNum = trailNum2   
      
        if(leg[0].showOptions){
        const optionType = leg[0].optionType = Option
        const Expiry = leg[0].Expiry = newExpiry
        const strikeCriteria = leg[0].setStrikeCriteria = newstrikeCriteria
        const strikeType =  leg[0].strikeType = newstrikeT
        const lowerRange = leg[0].lowerRange = lower
        const upperRange =leg[0].upperRange = Upper   
        const atmStrike =leg[0].atmStrike = Atmstrike
        const straddle = leg[0].straddle = straddlePrice
        const Premium = leg[0].Premium = newPremium


        if(newstrikeCriteria === 'strike type') {
            
            
        updateVal={id,
          Lot, PositionType,
          optionType,
          Expiry,
          strikeCriteria,strikeType, 
          Simple,SimpleNum, 
          Trail, TrailNum1,TrailNum2
          
        }}
        else if(newstrikeCriteria === 'premium range') {
         
            
        updateVal={id,
          Lot, PositionType,
          optionType,
          Expiry,
          strikeCriteria, lowerRange,upperRange,  
          Simple, SimpleNum, 
          Trail, TrailNum1, TrailNum2
          
        }}
        else if(newstrikeCriteria === 'closest premium'){
     
        updateVal={id,
          Lot, PositionType,
          optionType,
          Expiry,
          strikeCriteria,Premium,  
          Simple, SimpleNum, 
          Trail, TrailNum1, StopLossMove:TrailNum2
          }
        }
        else if(newstrikeCriteria === 'straddle width'){ 
        updateVal={id,
          Lot, PositionType,
          optionType,
          Expiry,
          strikeCriteria, atmStrike,straddle,  
          Simple, SimpleNum, 
          Trail, TrailNum1, TrailNum2
          
        }}  
         
         
    
      }else{
        updateVal = {id,
          Lot,
          PositionType,Simple, value:SimpleNum, 
          Trail, TrailNum1, TrailNum2
          
        }
      }
    
          
      let output = JSON.stringify(updateVal)
          // setArrList([])
      // console.log(output)
      handledelete(id)
      dispatch(openMode())

      axios.post(`${url}/data.json`, output).then(res=> console.log(res))
    };
  

    
    const handleSelected = (e)=>{
        if(e.target.value === 'strike type'){
          setNewStrikeCriteria('strike type')
        }
        else if(e.target.value === 'premium range'){
          setNewStrikeCriteria('premium range')
        }
        else if(e.target.value === 'closest premium'){
          setNewStrikeCriteria('closest premium')
        }
        else{
          setNewStrikeCriteria('straddle width')
        }
      } 

      const handledelete = (id)=> {
        setArrList(arrList.filter((item)=> item.id !== id))}
        

      const handlecopy =(id)=>{
        const copy = arrList.filter((item)=>item.id === id)
        // console.log(arrList);
        console.log(copy[0].disabled1);
        // console.log(disabled1)
        let updateVal = {}
        const Lot = copy[0].Lot = totalLot
        const PositionType = copy[0].Position = newPosition
        const Disabled1 = copy[0].disabled1 = disabled1
        const Disabled2 = copy[0].disabled2 = disabled2
        const Simple = copy[0].simple = simple
        const SimpleNum = simpleNum
        const Trail = copy[0].trail = trail
        const TrailNum1 = copy[0].trailNum = trailNum1
        const TrailNum2 = copy[0].trailNum = trailNum2
        if(copy[0].showOptions){
        const optionType = copy[0].optionType = Option
        const Expiry = copy[0].Expiry = newExpiry
        const strikeCriteria = copy[0].setStrikeCriteria = newstrikeCriteria
        const strikeType =  copy[0].strikeType = newstrikeT
        const lowerRange = copy[0].lowerRange = lower
        const upperRange =copy[0].upperRange = Upper
        const Premium = copy[0].Premium = newPremium
        const atmStrike =copy[0].atmStrike = Atmstrike
        const straddle = copy[0].straddle = straddlePrice
        const showOptions = copy[0].showOptions = showOption
       
      
        updateVal={id:uuid(),
          Lot, PositionType,
          optionType,
          Expiry,
          strikeCriteria, strikeType, lowerRange, upperRange, Premium, atmStrike, straddle, showOptions,
          Disabled1, Disabled2, Simple, SimpleNum, Trail, TrailNum1,TrailNum2
        }
        
      }else{
        updateVal = {id:uuid(),
          Lot,
          PositionType, Disabled1, Disabled2, Simple, SimpleNum, Trail, TrailNum1, TrailNum2
        }
      }
      
        
        setArrList((prev)=>[...prev, updateVal])

     
      }
      // console.log(arrList)
  return (
  <div className='form__wrapper'>
    <form className='leg__container' onSubmit={handleSubmit}>
    <div className='form__top'>
      <div className='input__wrapper'>
        <label htmlFor='num'>Lot</label>
        <input type='number' placeholder='0' id='num' value={totalLot} onChange={(e)=>setTotalLot(e.target.value)}/>
      </div>
      <div className='input__wrapper'>
        {/* <label htmlFor='position'>Position</label> */}
        <select name='Position' id='position' value={newPosition} onChange={(e)=>{setNewPosition(e.target.value)}} >
          <option value='buy'>Buy</option>
          <option value='sell'>Sell</option>
        </select>
      </div>
      {showOption &&<>
      <div className='input__wrapper'>
        {/* <label htmlFor='option-type'>Option Type</label> */}
        <select name='Option Type' id='option-type' value={Option} onChange={(e)=>{setOption(e.target.value)}}>
          <option value='call'>Call</option>
          <option value='put'>Put</option>
        </select>
      </div> 
      <div className='input__wrapper'>           
        {/* <label htmlFor='expiry'>Expiry</label> */}
        <select name='Expiry' id='expiry' value={newExpiry} onChange={(e)=>{setNewExpiry(e.target.value)}}>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
        </select>
      </div>
      <div className='input__wrapper'>
        <label htmlFor='Select Strike Criteria'>Select Strike</label>
        <select name='Select Strike Criteria' id='Select Strike Criteria' value={newstrikeCriteria} onChange={handleSelected}>
          <option value='strike type'>Strike Type</option>
          <option value='premium range'>Premium Range</option>
          <option value='closest premium'>Closest Premium</option>
          <option value='straddle width'>Straddle Width</option>
        </select>
      </div>
      {newstrikeCriteria === 'strike type' &&
      <div className='input__wrapper'>
        {/* <label htmlFor='strike-type'>Strike Type</label> */}
        <select name='Strike Type' id='strike-type' value={newstrikeT}  onChange={(e)=>{setNewStrikeT(e.target.value)}}>
          <option>ATM</option> 
          <option value='ITM20'>ITM20</option>
          <option value='ITM20'>ITM20</option>
          <option value='ITM20'>ITM20</option>
          <option value='ITM20'>ITM20</option>
          <option value='ITM20'>ITM20</option>              
        </select>
      </div>
    }
    {newstrikeCriteria ==='premium range' &&<>
      <div className='input__wrapper'>
        <label htmlFor='lower'>Lower</label>
        <input type='number' placeholder='50' id='lower'
          value={lower} onChange={(e)=>{setLower(e.target.value)}}
        />
      </div>
      <div className='input__wrapper'>
        <label htmlFor='upper'>Upper</label>
        <input type='number' placeholder='200' id='upper'
          value={Upper} onChange={(e)=>{setUpper(e.target.value)}}
        />
      </div>
      </>}

      {newstrikeCriteria ==='closest premium' &&<>
      <div className='input__wrapper'>
        <label htmlFor='lower'>Premium</label>
        <input type='number' id='lower'
          value={newPremium} onChange={(e)=>{setNewPremium(e.target.value)}}
        />
      </div>
      </>}
      

      
      {newstrikeCriteria ==='straddle width' &&<>
      <div className=''>
        [<label htmlFor='atm-strike'>ATM Strike</label>
        <select name='Atm-strike' id='atm-strike' value={Atmstrike} onChange={(e)=>{setAtmStrike(e.target.value)}}>
          <option value='+'>+</option>
          <option value='-'>-</option>
        </select>
        ( 
        <input type='number' id='lower' className='straddle-width-input'
          value={straddlePrice} onChange={(e)=>{setStraddlePrice(e.target.value)}}
        />
        <label htmlFor='lower'>x ATM Straddle Price</label>)
        ]


      </div>
      </>}
      
      </>
    }
    </div>
    <div className='form__bottom'>
      <div className='simple__wrapper'>
        <div className='checkbox_wrapper'>
          <input checked={!disabled1} type='checkbox' id='simple__momentum' onChange={()=>setDisabled1(!disabled1)}/>
          <label className='label'>Simple Momentum</label>
        </div>

        <div className='selected'>
        <select  name='simple__momentum' className={disabled1 ? 'disabled':undefined } value={simple}
         onChange={(e)=>setSimple(e.target.value)}>
        <option value='points-up'>Points</option> 
          <option value='points-down'>Points</option>
          <option value='percentage-up'>Percentage</option>
          <option value='percentage-down'>Percentage</option>
          <option value='underlying points-up'>Underlying Points</option>
          <option value='underlying points-down'>Underlying Points</option> 
          <option value='underlying percentage-up'>Underlying Percentage</option> 
          <option value='underlying percentage-down'>Underlying Percentage</option> 
        </select>
        <input  className={disabled1 ? 'disabled':undefined} type='number' value={simpleNum}
         onChange={(e)=>setSimpleNum(e.target.value)}/>
        </div>
      </div>


      <div className='simple__wrapper'>
        <div className='checkbox_wrapper'>
          <input checked={!disabled2} type='checkbox' id='trail__sl' onChange={()=>setDisabled2(!disabled2)}/>
          <label className='label'>Trail SL</label>
        </div>  

        <div className='selected'>
        <select disabled={disabled2} name='trail-sl' className={disabled2? 'disabled':null} value={trail} 
        onChange={(e)=>setTrail(e.target.value)}>
          <option value='points'>Points</option> 
          <option value='percentage'>Percentage</option>
         
        </select>
        <input disabled={disabled2} className={disabled2 ? 'disabled': undefined} type='number'  value={trailNum1} 
        onChange={(e)=>setTrailNum1(e.target.value)}/>
        <input disabled={disabled2} className={disabled2 ? 'disabled': undefined} type='number'  value={trailNum2} 
        onChange={(e)=>setTrailNum2(e.target.value)}/>
        </div>
      </div>
      
    </div>
   <div>
    <button onClick={()=>{handledelete(id)}}>X</button>
    <button onClick={()=>handlecopy(id)}>copy</button>
    </div>
    </form>

    <div>
    <button onClick={()=>handleSubmitForm(id)}>Submit</button>
    
    </div>
    
    </div>
   
  
  )
}

export default Form
