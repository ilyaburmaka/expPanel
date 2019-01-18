import React, { Component, Fragment  }from 'react';
import { MyText } from 'components/ExpansionPanels/Mytext.js'
import { TabsContent,NameTabs } from 'constants/ExpansionPanels/ExpansionPanels'
const Panel = ({ header,handleTabChange,active,act,isOp }) =>{
    return(
        <Fragment>
            <div onClick={handleTabChange}>{header}</div>
            <MyText active={active}  act={act}   isOp={isOp}/>
        </Fragment>
    )
}

export {Panel}