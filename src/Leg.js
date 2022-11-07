import React, { useState } from 'react'
import Modal from './feature/modal/Modal';
import {useDispatch, useSelector} from 'react-redux'
import App from './App';
import axios from 'axios';
import { url } from './firebase'; 
import ShowData from './feature/ShowData';
import { show } from './feature/modal/showDataSlice';


const Leg = () => {
  const [results, setResult] = useState([])
  const {isShow} = useSelector((store)=>store.showData) 
  const {isOpen} = useSelector((store)=> store.modal)

  const dispatch = useDispatch()

  const handleFetch = ()=>{
    axios.get(`${url}/data.json`).then(res=>{
      const fetchedResult = []
      for(let key in res.data){
        fetchedResult.push(
          {
            ...res.data[key],
            id:key
          }
        )
      }
      setResult(fetchedResult)
      
    })
    dispatch(show())
  } 
 
  console.log(results)
  return (
    <div>
      
    {isOpen &&<>
        <Modal 
          handlefetch={handleFetch}
        />
        
        </>}
        <App/>
       
      
       {isShow && results.map((res)=>(
        <ShowData
        key={res.id}
        Lots={res.Lot}
        Expiry={res.Expiry}
        MomentumType={res.Simple}
        MomentumValue={res.SimpleNum}
        positionType={res.PositionType}
        TrailSL={res.Trail}
        TrailSLIstrumentMove={res.TrailNum1}
        TrailSLSTMove={res.TrailLNum2}
        optionType ={res.optionType}
        strikeCriteria ={res.strikeCriteria}
        strikeType={res.strikeType}
        lowerRange ={res.lowerRange}
        upperRange ={res.upperRange}
        premium = {res.Premium}
        atmStrike={res.atmStrike}
        straddlePrice={res.straddle}
 />
       )) }
    </div>
  )
}

export default Leg
