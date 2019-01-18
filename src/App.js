import React, { Component, Fragment  }from 'react';
// style
import './App.css';
// constants
import { TabsContent,NameTabs } from 'constants/ExpansionPanels/ExpansionPanels'
// components
import { Panel } from 'components/ExpansionPanels/ExpansionPanels'


class App extends Component {
    state = {
        activeTab: TabsContent
    }

    handleSubmit = (activeTab) => () => {
        this.state.activeTab === activeTab ? this.setState({ activeTab:TabsContent }) : this.setState({ activeTab})
    }
    render() {
    const { activeTab } = this.state
      const { isOpen } = this.state
    return (
      <div className="App" style={{ margin: 20, width: 400 }}>
        <h1>Accordion TASK</h1>
          {NameTabs.map((item,index)=>
              <Fragment>
                <Panel key={index} header={item.mainTitle}  handleTabChange={this.handleSubmit(item.value)} active={item.value} act={activeTab}/>
              </Fragment>
          )}
      </div>
    );
  }
}


export default App;
