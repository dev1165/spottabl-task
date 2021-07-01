import React, { useEffect, useState, useRef } from "react";
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import './tabs.css'


const TabsComponent = (props) => {
    const radioInput = useRef([]);
    const radioInputRef = useRef([]);
    const [tabName, setTabName] = useState({
        tab_name: "Individual Contributor",
        ind_cont: {},
        people_lead: {}
    });

    const callback = (key) => {
        setTabName({
            ...tabName,
            tab_name: (key === 1 ? "Individual Contributor" : "People Lead")
        })

    }
    const getSelectedValue = (val) => {
        setTabName({ ...tabName, ind_cont: val })
    }

    const getSelectedValueRaio = (val) => {
        setTabName({ ...tabName, people_lead: val })
    }

    const clearSelected = () => {
        radioInput?.current?.map((v, i) => {
            if (v)
                v.checked = false
        })
        radioInputRef?.current?.map((v, i) => {
            if (v)
                v.checked = false

        })
        setTabName({
            ...tabName,
            ind_cont: {},
            people_lead: {}
        })

    }


    const handleCheckOnClick = (res) => {
        const { current } = radioInput;
        // console.log(tabRef, 'asass')
        // current[res].checked = true;
    };

    const { tabOneOption, tabTwoOption } = props;
    return (
        <div className='container-fluid component-wwrapper p-4 '>
            <div className='container'>
                <div className='row my-2'>
                    <div className='col-10'>
                        <h4 className='section-heading'>Previous job positions/level held</h4>
                    </div>
                    <div className='col-2 text-right'>
                        <span className='reset-button text-muted' onClick={clearSelected}><small>Reset</small></span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            centered
                            tabBarStyle={{ outline: 'none' }}
                            style={{ outline: 'none' }}
                        >
                            <TabPane tab='Individual Contributor' key="1">
                                {
                                    tabOneOption.map((val, ind) => {
                                        return (
                                            <div key={'_n' + ind} onClick={(e) => handleCheckOnClick(ind)} className='radio-wrapper my-2 p-2'>
                                                <input type="radio" id={val.value} name='radio' className='my-auto' value={val.value} ref={(ref) => radioInput.current.push(ref)} onChange={e => { getSelectedValue(val) }} />
                                                <label className='my-auto radio-label ml-2' htmlFor={val.value}>{val.name}</label>
                                            </div>
                                        )
                                    })
                                }

                            </TabPane>
                            <TabPane tab='People Lead' key="2">
                                {
                                    tabTwoOption.map((val, ind) => {
                                        return (
                                            <div key={'__n' + ind} onClick={(e) => handleCheckOnClick(ind)} className='radio-wrapper my-2 p-2'>
                                                <input type="radio" id={val.value} name='radio_pre' className='my-auto' value={val.value} ref={(ref) => radioInputRef.current.push(ref)} onChange={e => { getSelectedValueRaio(val) }} />
                                                <label className='my-auto radio-label ml-2' htmlFor={val.value}>{val.name}</label>
                                            </div>
                                        )
                                    })
                                }
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <hr />
                <div>
                    <strong>
                        Selected option for Individual Contributor is{tabName.ind_cont.value}
                        <br />
                        Selected option for People Lead is {tabName.people_lead.value}

                    </strong>
                </div>
            </div>
        </div>
    )
}

export default TabsComponent;