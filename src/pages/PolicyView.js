import React, { useState, useEffect } from 'react';
import './view.css'
import { useLocation } from "react-router-dom";

export default function PolicyView () {

    const location = useLocation()
    const userAuth = location.state[0]



    const [data, setData] = useState([{}])

    useEffect( ()=> {
        const cleanData = (data) => {
            return {
                policyRef : data.policy.policy_ref,
                coverType : data.policy.cover,
                car:  `${data.vehicle.make} ${data.vehicle.model} ${data.vehicle.colour} ${data.vehicle.reg}`,
                address : Object.values(data.policy.address).join(' '),
            }
        }

        const getData = async () => {
            const access_token = userAuth.access_token
            const options = {
                method: 'GET',
                headers : {
                    'environment' : 'mock',
                    Authorization: `Bearer ${access_token}`,
                    'Content-type': 'application/json'
                }
            }
           const userPolicy =  await fetch('https://api.bybits.co.uk/policys/details', options)
                .then((res) =>res.json())

           const cleanedData =  cleanData(userPolicy)
           setData(cleanedData)
        }
        getData()

    },[userAuth])




    return (<div className={'container'}>
           <div className={'user'}> My Policy</div>
                <h2>Policy reference</h2>
                <p id={'pref'}>{data.policyRef}</p>
                <h2>Cover type</h2>
                <p id={'coverType'}>{data.coverType}</p>
                <h2>Car</h2>
                <p id={'car'}>{data.car}</p>
                <h2>Address</h2>
                <p id={'address'}>{data.address}</p>
    </div>)
}
