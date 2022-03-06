import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

/* Plugin */
import {Row, Col, Comment, Tooltip, Avatar ,Divider} from 'antd';
import moment from 'moment';

/* Store */
import {TestContext} from '../../../store/TestContext';

/* Pages */
import CalendarShow from '../carlendar';

/* Icon */
import { UploadOutlined, LikeOutlined, DownOutlined ,HomeOutlined,MenuFoldOutlined} from '@ant-design/icons';


function EngagementWeekly() {
    
    // let history = useHistory();
    const {
        uiControlData,
        selectedMenu,
        setSelectedDate,
        selectedDate,
        dateCalendar,
        grapgType
    } = useContext(TestContext);
    console.log('grapgType',dateCalendar)
   
    return(
        <>
            <CalendarShow/>
            {dateCalendar.length!==0 && <div style={{padding : '10px'}}>
                <Row>
                    <Col span={20}>{dateCalendar[0].aDate}-{dateCalendar[30].date}</Col>
                    <Col span={4}><UploadOutlined style={{color : 'DeepSkyBlue'}} /></Col>
                </Row>
                {grapgType === '2' && <div>
                    {dateCalendar.length!==0 && dateCalendar.map((co , inx)=>{
                        return(
                            <div key ={inx}>
                                {inx < 7 && <Row justify="space-around" align="middle" style={{border : '1px  solid gray', borderRadius: '25px'}}>
                                    <Col xs={15} sm={15} md={16} lg={16} xl={16}>
                                        <Comment
                                            // actions={actions}
                                            author={<a>Han Solo</a>}
                                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                            content={
                                                <p>
                                                We supply a series of design principles, practical patterns and high quality design
                                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                                and efficiently.
                                                </p>
                                            }
                                            // datetime={
                                            //     <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                            //     <span>{moment().fromNow()}</span>
                                            //     </Tooltip>
                                            // }
                                        />
                                    </Col>
                                    <Col style={{ height: "200px" }}><Divider type="vertical" style={{ height: "100%" }}/></Col>
                                    <Col xs={6} sm={6} md={8} lg={8} xl={8}>
                                        <LikeOutlined style={{color : 'DeepSkyBlue', marginRight : '4px'}}/>
                                        {co.data.like} people like you
                                    </Col>
                                </Row>}
                                <br></br>
                                
                            </div>
                        )
                    })}
                    
                </div>}
            </div>}
        </>
    )
}

export default EngagementWeekly;