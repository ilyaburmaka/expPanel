import React, { Component,Fragment } from 'react'
import { NameTabs } from 'constants/ExpansionPanels/ExpansionPanels'
import Panel from 'components/ExpansionPanels/ExpansionPanels'
import MyText from 'components/ExpansionPanels/Mytext'
import { Wrapper } from 'styles/Panels/styles'
class Panels extends Component {
    state = {
        activeTab: ''
    }

    handleSubmit = (activeTab) => () => {
        this.setState(this.state.activeTab === activeTab ? { activeTab: '' } : { activeTab })
    }

    render() {
    const { activeTab } = this.state
    return (
      <Wrapper>
        <h1>Accordion TASK</h1>
        {NameTabs.map((item,index)=>
           <Fragment key={index}>
              <Panel
                header={item.mainTitle}
                handleTabChange={this.handleSubmit(item.value)}
              />
              <MyText
                active={item.value}
                act={activeTab}
              />
           </Fragment>
        )}
      </Wrapper>
    );
  }
}


export default Panels;
