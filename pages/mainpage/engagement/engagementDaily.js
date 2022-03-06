import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

/* Plugin */
import {Row, Col, Card , Comment , Avatar ,Divider} from 'antd';
import moment from 'moment';

/* Store */
import {TestContext} from '../../../store/TestContext';

/* Pages */
import CalendarShow from '../carlendar';

/* Icon */
import { LikeOutlined, CommentOutlined, GiftOutlined ,SketchOutlined ,UploadOutlined} from '@ant-design/icons';


function EngagementDaily() {
    
    // let history = useHistory();
    const {
        uiControlData,
        selectedMenu,
        setSelectedDate,
        selectedDate,
        grapgType
    } = useContext(TestContext);

    return(
        <>
            <CalendarShow/>
            {selectedDate.data!==undefined && <div style={{padding : '10px'}}>
                <Row>
                    <Col span={20}>{selectedDate.date}</Col>
                    <Col span={4}><UploadOutlined style={{color : 'DeepSkyBlue'}} /></Col>
                </Row>
                {grapgType === '1' && <div>
                    <Row>
                        <Col span={12}>
                            <Card style={{ width: '90%' , textAlign : 'center'}}>
                                <LikeOutlined style={{color : 'DeepSkyBlue'}}/>
                                <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Like</span>
                                <br></br>
                                <br></br>
                                <h1 style={{fontSize : '26px'}}>{selectedDate.data.like}</h1>
                                <span>Like</span>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card style={{ width: '90%' , textAlign : 'center'}}>
                                <CommentOutlined style={{color : 'DeepSkyBlue'}}/>
                                <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Comment</span>
                                <br></br>
                                <br></br>
                                <h1 style={{fontSize : '26px'}}>{selectedDate.data.comment}</h1>
                                <span>Comment</span>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={12}>
                            <Card style={{ width: '90%' , textAlign : 'center'}}>
                                <GiftOutlined style={{color : 'DeepSkyBlue'}}/>
                                <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Point</span>
                                <br></br>
                                <br></br>
                                <h1 style={{fontSize : '26px'}}>{selectedDate.data.point}</h1>
                                <span>Point</span>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card style={{ width: '90%' , textAlign : 'center'}}>
                                <SketchOutlined style={{color : 'DeepSkyBlue'}}/>
                                <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Dimond</span>
                                <br></br>
                                <br></br>
                                <h1 style={{fontSize : '26px'}}>{selectedDate.data.dimond}</h1>
                                <span>Dimond</span>
                            </Card>
                        </Col>
                    </Row>
                </div>}
                {grapgType === '2' && <div>
                    {selectedDate.data!==undefined && 
                        <div>
                            <Row justify="space-around" align="middle" style={{border : '1px  solid gray', borderRadius: '25px'}}>
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
                                    <LikeOutlined style={{color : 'DeepSkyBlue',marginRight : '4px'}}/>
                                    {selectedDate.data.like} people like you
                                </Col>
                            </Row>
                            <br></br>
                            
                        </div>
                    }
                </div>}
            </div>}
        </>
    )
}

export default EngagementDaily;