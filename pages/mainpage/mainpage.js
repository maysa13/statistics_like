import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

/* Plugin */
import { Layout, Row, Col, Popover,Menu, Divider} from 'antd';

/* Store */
import {
    TestContext
} from '../../store/TestContext.js';


/* Page */
import Menubar from '../../components/Menubar'
import EngagementDaily from './engagement/engagementDaily'
import EngagementWeekly from './engagement/engagementWeekly'
import EngagementMonthly from './engagement/engagementMonthly'
import Submission from './submission'

/* Icon */
import {DownOutlined ,HomeOutlined,MenuFoldOutlined,FormOutlined,CheckCircleOutlined,SendOutlined,SettingOutlined,PieChartOutlined} from '@ant-design/icons';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;

function MainPage() {
    const {
        uiControlData,
        selectedMenu,
        selectedTabs
    } = useContext(TestContext);

    console.log('selectedTabs',selectedTabs)

    const [theme , setTheme] = useState('dark')
    const [current , setCurrent] = useState('home')
    const changeTheme = value => {
      console.log(value);
      setTheme(value ? 'dark' : 'light')
    }
  
    const handleClick = e => {
      console.log('click ', e);
      setCurrent(e.key)
    };

    
    return(
        <>
            <Layout className="layout" style={{ minHeight: '100vh' }}>
                <header className="header-main">
                    <Row style={{padding : '30px 10px 10px 10px' , background : 'blue', color : 'white'}}>
                        <Col flex="none" style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <HomeOutlined />
                        </Col>
                        <Col flex="auto" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div>
                                <span>All report  </span>
                                <DownOutlined/>
                            </div>
                        </Col>
                        <Col flex="none" style={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <div>
                                <MenuFoldOutlined/>
                            </div>    
                        </Col>
                    </Row>
                </header>
                <Content style={{background : 'white'}}>
                    {/* หน้าเมนู */}
                    <Menubar/>
                    {/* engagement */}
                    {(uiControlData.currentMenu === 'engagement') && selectedTabs === 'Daily' &&  
                        <EngagementDaily/>
                    }
                     {(uiControlData.currentMenu === 'engagement') && selectedTabs === 'Weekly' &&  
                        <EngagementWeekly/>
                    }
                     {(uiControlData.currentMenu === 'engagement') && selectedTabs === 'Monthly' &&  
                        <EngagementMonthly/>
                    }
                    {/* หน้าเนื้อหาตรวจสอบพื้นที่บริการ */}
                    {(uiControlData.currentMenu === 'submission') &&
                        <Submission/>
                    }
                </Content>
                <Divider></Divider>
                <Footer style={{ textAlign: 'center', padding: '2px 0 16px 0', fontSize: '12px' }}>
                    <Row justify="space-around" align="middle">
                        <Col span={2}><FormOutlined /><br></br>White</Col>
                        <Col span={2}><CheckCircleOutlined /><br></br>Appoved</Col>
                        <Col span={2}><SendOutlined /><br></br>Report</Col>
                        <Col span={2}><PieChartOutlined /><br></br>statistics</Col>
                        <Col span={2}><SettingOutlined /><br></br>Setting</Col>
                    </Row>
                    {/* Create by Parichat Tetsalee */}
                </Footer>
            </Layout>
        </>
    )
}

export default MainPage;