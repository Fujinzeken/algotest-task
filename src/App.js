import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Form from './components/Form';



function App() {

  const [showOptions, setShowOptions] = useState(false)
  const [value, setvalue] = useState('strike type')
  const [totalLot, setTotalLot] = useState(1)
  const [lower, setLower] = useState(50)
  const [Upper, setUpper] = useState(200)
  const [position, setPosition] = useState('buy')
  const [option, setOption] = useState('call')
  const [expiry, setExpiry] = useState('weekly')
  const [strikeT, setStrikeT] = useState('ATM')
  const [premium, setPremium] = useState(50)
  const [strike, setStrike] = useState('+')
  const [straddlePrice, setStraddlePrice] = useState(0.5)
  const [arrList, setArrList] = useState([])
  // const [disabled1, setDisabled1] = useState(true)
  // const [disabled2, setDisabled2] = useState(true)
  // const [simple, setSimple] = useState('Points')
  // const [simpleNum, setSimpleNum] = useState(0)
  // const [trail, setTrail] = useState('Points')
  // const [trailNum1, setTrailNum1] = useState(0)
  // const [trailNum2, setTrailNum2] = useState(0)



  const handleClick = (e)=>{
    if(e.target.value === 'Future'){
      setShowOptions(false)
    }else{
      setShowOptions(true)
    }
  }
  
  const handleSelect = (e)=>{
    if(e.target.value === 'strike type'){
      setvalue('strike type')
    }
    else if(e.target.value === 'premium range'){
      setvalue('premium range')
    }
    else if(e.target.value === 'closest premium'){
      setvalue('closest premium')
    }
    else{
      setvalue('straddle width')
    }
  }



  const handleSubmit = (e)=>{
    e.preventDefault()
    let updateVal = {}
    const Lot = totalLot
    const PositionType = position
    if(showOptions){
    const optionType = option
    const Expiry = expiry
    const strikeCriteria = value
    const strikeType =  strikeT
    const lowerRange = lower
    const upperRange =Upper
    const Premium = premium
    const atmStrike =strike
    const straddle = straddlePrice
   
   
  
    updateVal={id:uuid(),
      Lot, PositionType,
      optionType,
      Expiry,
      strikeCriteria, strikeType, lowerRange, upperRange, Premium, atmStrike, straddle, showOptions,
    
    }
    
  }else{
    updateVal = {id:uuid(),
      Lot,
      PositionType
    }
  }
  
    
    setArrList((prev)=>[...prev, updateVal])
 
  }

//  console.log(arrList)

  return (
    <div className="App">
     <div className='container'>
      <div className='leg-top'>
        <p>Select segments</p>
        <div>
          <input type='button' className={!showOptions ? 'style left':'leg-btn left'} value='Future' onClick={handleClick}/>
          <input type='button' className={showOptions ? 'style right':'leg-btn right'} value='Options' onClick={handleClick}/>
        </div>
      </div>
      <form className='leg-form'>
        <div className='form-inputs'>
          <div className='input-wrapper'>
            <label htmlFor='num'>Total lot</label>
            <input type='number' placeholder='0' id='num' value={totalLot} onChange={(e)=>setTotalLot(e.target.value)}/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='position'>Position</label>
            <select name='Position' id='position' value={position} onChange={(e)=>setPosition(e.target.value)}>
              <option value='buy'>Buy</option>
              <option value='sell'>Sell</option>
            </select>
          </div>
          {showOptions &&<>
          <div className='input-wrapper'>
            <label htmlFor='option-type'>Option Type</label>
            <select name='Option Type' id='option-type' value={option} onChange={(e)=>setOption(e.target.value)}>
              <option value='call'>Call</option>
              <option value='put'>Put</option>
            </select>
          </div> 
          <div className='input-wrapper'>           
            <label htmlFor='expiry'>Expiry</label>
            <select name='Expiry' id='expiry' value={expiry} onChange={(e)=>setExpiry(e.target.value)}>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
            </select>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='Select Strike Criteria'>Select Strike Criteria</label>
            <select name='Select Strike Criteria' id='Select Strike Criteria' value={value} onChange={handleSelect}>
              <option value='strike type'>Strike Type</option>
              <option value='premium range'>Premium Range</option>
              <option value='closest premium'>Closest Premium</option>
              <option value='straddle width'>Straddle Width</option>
            </select>
          </div>
          {value === 'strike type' &&
          <div className='input-wrapper'>
            <label htmlFor='strike-type'>Strike Type</label>
            <select name='Strike Type' id='strike-type' value={strikeT} onChange={(e)=>setStrikeT(e.target.value)}>
              <option>ATM</option> 
              <option value='ITM20'>ITM20</option>
              <option value='ITM20'>ITM20</option>
              <option value='ITM20'>ITM20</option>
              <option value='ITM20'>ITM20</option>
              <option value='ITM20'>ITM20</option>              
            </select>
          </div>
        }
        {value ==='premium range' &&<>
          <div className='input-wrapper'>
            <label htmlFor='lower'>Lower Range</label>
            <input type='number' placeholder='50' id='lower'
              value={lower} onChange={(e)=>setLower(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='upper'>Upper Range</label>
            <input type='number' placeholder='200' id='upper'
              value={Upper} onChange={(e)=>setUpper(e.target.value)}
            />
          </div>
          </>}

          {value ==='closest premium' &&<>
          <div className='input-wrapper'>
            <label htmlFor='lower'>Premium</label>
            <input type='number' id='lower'
              value={premium} onChange={(e)=>setPremium(e.target.value)}
            />
          </div>
          </>}
          

          
          {value ==='straddle width' &&<>
          <div className=''>
            [<label htmlFor='atm-strike'>ATM Strike</label>
            <select name='Atm-strike' id='atm-strike' value={strike} onChange={(e)=>setStrike(e.target.value)}>
              <option value='+'>+</option>
              <option value='-'>-</option>
            </select>
            ( 
            <input type='number' id='lower' className='straddle-width-input'
              value={straddlePrice} onChange={(e)=>setStraddlePrice(e.target.value)}
            />
            <label htmlFor='lower'>x ATM Straddle Price</label>)
            ]


          </div>
          </>}
          
          </>
        }
        </div>
        <div className='form-btn'>
          <button className='add-leg' onClick={(e)=>{
            handleSubmit(e)}}>Add Leg</button>
          <button className='cancel'>Cancel</button>
        </div>
      </form>
      {arrList.map((item)=>(
        <Form 
        key={item.id}
        id={item.id}
        lot={item.Lot}
        position={item.PositionType}
        option={item.optionType}
        expiry={item.Expiry}
        low={item.lowerRange}
        high={item.upperRange}
        premium={item.Premium}
        straddle={item.straddle}
        value={item.strikeCriteria}
        atmStrike={item.atmStrike}
        strikeType={item.strikeType}
        showOption={item.showOptions}
        arrList={arrList}
        setArrList={setArrList}
      /> 
))}

     </div>
    </div>
  );
}

export default App;
