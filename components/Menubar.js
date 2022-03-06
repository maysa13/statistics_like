import React, { useState, useContext, useEffect } from 'react';
import { Layout, Row, Col, Popover,Menu, Divider,Tabs, Button,Radio} from 'antd';

/* Store */
import {TestContext} from '../store/TestContext';

/* pages */
import CalendarShow from '../pages/mainpage/carlendar';

/* Icon */
import { UnorderedListOutlined, BarChartOutlined, GiftOutlined ,SketchOutlined ,UploadOutlined} from '@ant-design/icons';


const { TabPane } = Tabs;

export default () => {
  const {
    uiControlData,
    selectedMenu,
    setSelectedTabs,
    grapgType,
    setGrapgType
  } = useContext(TestContext);
  const menuHandleClick = (parameter) => (event)  => {   
    selectedMenu(parameter)
  }
  const callback = (key) => {
    console.log(key);
    setSelectedTabs(key)
  }
  const changeGraph = e => {
    setGrapgType(e.target.value)
  };

    return (
      <div>
        <Row justify="center" align="middle" style={{borderBottom: '0.5px solid #DCDCDC'}}>
          {/* <Space split={<Divider type="vertical" />}> */}
            <Col onClick={menuHandleClick('submission')} flex="50" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
              {(uiControlData.currentMenu === 'submission') &&
                <span style={{color : 'blue'}}>Submission</span>
              }
              {(uiControlData.currentMenu !== 'submission') &&
                <span style={{color : 'black'}}>Submission</span>
              }
            </Col>
            <Col style={{ height: "30px" }}><Divider type="vertical" style={{ height: "100%" }} /></Col>
            <Col onClick={menuHandleClick('engagement')} flex="50" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
              {(uiControlData.currentMenu === 'engagement') &&
                <span style={{color : 'blue'}}>Engagement</span>
              }
              {(uiControlData.currentMenu !== 'engagement') &&
                <span style={{color : 'black'}}>Engagement</span>
              }
              
            </Col>
            <br></br>
            <br></br>
          {/* </Space> */}
        </Row>
        {/* <Divider></Divider> */}
        <Row style={{paddingLeft : '20px', marginTop : '0px'}} justify="space-around" >
          <Col flex="50" style={{ display: 'inline-flex', justifyContent: 'start', alignItems: 'center'}}>
            <Tabs defaultActiveKey="Daily" onChange={callback}>
              <TabPane tab="Daily" key="Daily">
                {/* <CalendarShow/> */}
              </TabPane>
              <TabPane tab="Weekly" key="Weekly">
                {/* <CalendarShow/> */}
              </TabPane>
              <TabPane tab="Monthly" key="Monthly">
                {/* <CalendarShow/> */}
              </TabPane>
            </Tabs>
          </Col>
          <Col flex="none" style={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Radio.Group onChange={changeGraph} value={grapgType}>
              <Radio.Button value="1"><BarChartOutlined /></Radio.Button>
              <Radio.Button value="2"><UnorderedListOutlined/></Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </div>
    )
  }