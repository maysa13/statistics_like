import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

/* Plugin */
import {Row, Col, Comment, Tooltip, Avatar ,Divider} from 'antd';
// import Chart from "react-apexcharts";

/* Store */
import {TestContext} from '../../../store/TestContext';

/* Pages */
import CalendarShow from '../carlendar';

/* Icon */
import { UploadOutlined, LikeOutlined, CommentOutlined ,GiftOutlined,SketchOutlined} from '@ant-design/icons';


function EngagementMonthly() {
    
    // let history = useHistory();
    const {
        uiControlData,
        selectedMenu,
        setSelectedDate,
        selectedDate,
        dateCalendar,
        grapgType
    } = useContext(TestContext);
    const [typeLikeCommentPointDimond , setTypeLikeCommentPointDimond] = useState('Like')
    const [bgLike , setBgLike] = useState('LightBlue')
    const [bgComment , setBgComment] = useState('white')
    const [bgPoint , setBgPoint] = useState('white')
    const [bgDimond , setBgDimond] = useState('white')
    const onClickType = (value) => {
        console.log('value',value)
        setTypeLikeCommentPointDimond(value)
        if(value==='Like'){
            setBgLike('LightBlue')
            setBgComment('white')
            setBgPoint('white')
            setBgDimond('white')
        }
        else if(value==='Comment'){
            setBgLike('white')
            setBgComment('LightBlue')
            setBgPoint('white')
            setBgDimond('white')
        }
        else if(value==='Point'){
            setBgLike('white')
            setBgComment('white')
            setBgPoint('LightBlue')
            setBgDimond('white')
        }
        else if(value==='Dimond'){
            setBgLike('white')
            setBgComment('white')
            setBgPoint('white')
            setBgDimond('LightBlue')
        }
    }
    return(
        <>
            <CalendarShow/>
            {dateCalendar.length!==0 && <div style={{padding : '10px'}}>
                <Row>
                    <Col span={20}>{dateCalendar[0].aDate}-{dateCalendar[6].date}</Col>
                    <Col span={4}><UploadOutlined style={{color : 'DeepSkyBlue'}} /></Col>
                </Row>
                <br></br>
                {grapgType === '2' && <div>
                    <Row justify="space-around" align="middle">
                        <Col onClick={()=>onClickType('Like')} style={{border : '1px solid Gainsboro' , borderRadius : '20px' ,padding : '8px' , background:bgLike}}>
                            <LikeOutlined style={{color : 'DeepSkyBlue'}}/>
                            <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Like</span>
                        </Col>
                        <Col onClick={()=>onClickType('Comment')} style={{border : '1px solid Gainsboro' , borderRadius : '20px' ,padding : '8px' , background:bgComment}}>
                            <CommentOutlined style={{color : 'DeepSkyBlue'}}/>
                            <span style={{color : 'DeepSkyBlue' , marginLeft : '6px'}}>Comment</span>
                        </Col>
                        <Col onClick={()=>onClickType('Point')} style={{border : '1px solid Gainsboro' , borderRadius : '20px' ,padding : '8px' , background:bgPoint}}>
                            <GiftOutlined style={{color : 'DeepSkyBlue'}}/>
                            <span style={{color : 'DeepSkyBlue' , marginLeft : '6px' ,padding : '8px'}}>Point</span>
                        </Col>
                        <Col onClick={()=>onClickType('Dimond')} style={{border : '1px solid Gainsboro' , borderRadius : '20px',padding : '8px' , background:bgDimond}}>
                            <SketchOutlined style={{color : 'DeepSkyBlue'}}/>
                            <span style={{color : 'DeepSkyBlue' , marginLeft : '6px' }}>Dimond</span>
                        </Col>
                    </Row>
                    <br></br>
                    {dateCalendar.length!==0 && dateCalendar.map((co , inx)=>{
                        return(
                            <div key ={inx}>
                                <Row justify="space-around" align="middle" style={{border : '1px  solid gray', borderRadius: '25px'}}>
                                    <Col xs={15} sm={15} md={14} lg={14} xl={14}>
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
                                        {typeLikeCommentPointDimond === 'Like' && <div>
                                            <LikeOutlined style={{color : 'DeepSkyBlue',marginRight : '4px'}}/>
                                            {co.data.like} people like you
                                        </div>}
                                        {typeLikeCommentPointDimond === 'Comment' && <div>
                                            <CommentOutlined style={{color : 'DeepSkyBlue',marginRight : '4px'}}/>
                                            {co.data.comment} people comment you
                                        </div>}
                                        {typeLikeCommentPointDimond === 'Point' && <div>
                                            <GiftOutlined style={{color : 'DeepSkyBlue',marginRight : '4px'}}/>
                                            {co.data.point} point
                                        </div>}
                                        {typeLikeCommentPointDimond === 'Dimond' && <div>
                                            <SketchOutlined style={{color : 'DeepSkyBlue',marginRight : '4px'}}/>
                                            {co.data.dimond} dimond
                                        </div>}
                                    </Col>
                                </Row>
                                <br></br>
                                
                            </div>
                        )
                    })}
                    
                </div>}
            </div>}
        </>
    )
}

export default EngagementMonthly;