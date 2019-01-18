import React, { Component, Fragment  }from 'react';
import { TabsContent,NameTabs } from 'constants/ExpansionPanels/ExpansionPanels'


const MyText = ({active,act,isOp}) =>{
    return(
        <Fragment>
            {act === TabsContent.FIRST && active === TabsContent.FIRST && <p>Text1</p>}
            {act === TabsContent.SECOND && active === TabsContent.SECOND && <p>Text2</p>}
            {act === TabsContent.THIRD && active === TabsContent.THIRD &&<p>Text3</p>}
            {act === TabsContent.FOURTH && active === TabsContent.FOURTH &&<p>Text4</p>}
        </Fragment>
    )
}

export {MyText}