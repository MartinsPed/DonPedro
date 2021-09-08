import React from 'react'
import DapiokComp1 from './DapiokCom1'
import DapiokComp from './DapiokComp'
import DapiokComp2 from './DapiokComp2'
import DapiokFirstBody from './DapiokFirstBody'
import DapiokFirstBody1 from './DapiokFirstBody1'
import DapiokFooter from './DapiokFooter'
import DapiokHeader from './DapiokHeader'

const DapiokApp = () => {
    return (
        <div>
            <DapiokHeader/>
            <DapiokFirstBody/>
            <DapiokComp/>
            <DapiokComp1/>
            <DapiokComp2/>
            <DapiokFirstBody1/>
            <DapiokFooter/>
        </div>
    )
}

export default DapiokApp
