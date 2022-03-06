import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

/* Plugin */
import { Layout, Row, Col, Tabs,Menu, Divider ,Button} from 'antd';
import moment from 'moment';

/* Store */
import {TestContext} from '../../store/TestContext';

import 'moment/locale/th';

/* Icon */
import { ArrowDownOutlined ,DownOutlined} from '@ant-design/icons';

import styles from '../../styles/Home.module.css'

const { Content, Footer } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

function CalendarShow() {
    
    // let history = useHistory();
    const {
        uiControlData,
        selectedMenu,
        setSelectedDate,
        selectedDate,
        selectedTabs,
        setDateCalendar,
        dateCalendar
    } = useContext(TestContext);
    moment.locale('en-us');
    const [weekView , setWeekView] = useState([
        {
            day: "M",
            key: 1
        },
        {
            day: "T",
            key: 2
        },
        {
            day: "W",
            key: 3
        },
        {
            day: "TH",
            key: 4
        },
        {
            day: "F",
            key: 5
        },
        {
            day: "SA",
            key: 6
        },
        {
            day: "S",
            key: 7
        },
    ]);
    const [thDayFromDateToday , setThDayFromDateToday] = useState([])
    const [showCalendar , setShowCalendar] = useState(false)
    
    moment.locale();
    const dateToday= new Date()
    const theDate = new Date(moment(dateToday).format('DD-MMM-YYYY'));
    const getLastday = new Date(moment(dateToday).add(30, 'days'));
   
    useEffect(() => {    
        if(dateCalendar.length!==0 && thDayFromDateToday.length===0 || thDayFromDateToday.length < 31){
            let key = 1
            let keyDay = ""
            while (theDate <= getLastday) {
                if(moment(theDate).format('dddd')==='Sunday'){
                    keyDay = 7
                }
                else if(moment(theDate).format('dddd')==='Monday'){
                    keyDay = 1
                }
                else if(moment(theDate).format('dddd')==='Tuesday'){
                    keyDay = 2
                }
                else if(moment(theDate).format('dddd')==='Wednesday'){
                    keyDay = 3
                }
                else if(moment(theDate).format('dddd')==='Thursday'){
                    keyDay = 4
                }
                else if(moment(theDate).format('dddd')==='Friday'){
                    keyDay = 5
                }
                else if(moment(theDate).format('dddd')==='Saturday'){
                    keyDay = 6
                }
                thDayFromDateToday.push({
                    date: moment(theDate).format('DD MMM YYYY'), 
                    day : moment(theDate).format('dddd'),
                    aDate : moment(theDate).format('DD'),
                    keyDay : keyDay,
                    key : key,
                    data : {
                        like : key+20,
                        point : key+15,
                        comment : key+13,
                        dimond : key+10
                    }
                })
                theDate.setDate(theDate.getDate() + 1)
                key = key + 1
            }
            setDateCalendar(thDayFromDateToday)
            setSelectedDate(thDayFromDateToday[0])
        }
    });

    const showCalendarAll = () => {
        if(showCalendar===false){
            setShowCalendar(true)
        }
        else{
            setShowCalendar(false)
        }
    }
    const selectDate = (date) => {
        console.log('dfghjkll',date)
        setSelectedDate(date)
        console.log('selectedDate',selectedDate)
        console.log('selectedTabs',selectedTabs)
    }


    return(
        <>
            <div style={{padding : '10px'}}>
                <Row>
                    <Col xs={20} sm={20} md={22} lg={22} xl={22}>
                        <ul className={styles.weekdays} style={{textAlign : 'center'}}>
                            {weekView.map((day,inx)=>{
                                return(
                                    <li key={inx}>
                                        <div>
                                            <Row style={{color : 'black' , width : '90%' , marginLeft : '7px'}}>
                                                <Col>
                                                    <span>{day.day}</span>
                                                </Col>
                                            </Row>
                                        </div>
                                        <br></br>
                                        {dateCalendar.length!==0 && dateCalendar.map((date,index)=>{
                                            return(
                                                <div key={date.key}>
                                                    {showCalendar===false && date.keyDay===day.key && index < 7 &&
                                                        <Row style={{color : 'black'}}>
                                                            <Col onClick={()=>{selectDate(date)}}>
                                                                <Button shape="circle" value={selectedDate} data={date} >{date.aDate} </Button>
                                                            </Col>
                                                        </Row>
                                                    }
                                                    {showCalendar===true && date.keyDay===day.key && index >= 7 &&
                                                        <Row style={{color : 'black'}}>
                                                            <Col onClick={()=>{selectDate(date)}}>
                                                                <Button shape="circle" value={selectedDate} data={date} >{date.aDate} </Button>
                                                            </Col>
                                                        </Row>
                                                    }
                                                </div>
                                                
                                            )
                                        })}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col xs={4} sm={4} md={2} lg={2} xl={2} style={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center' , color : 'DeepSkyBlue'}} onClick={showCalendarAll}>
                        <ArrowDownOutlined />
                        <span>Today</span>
                    </Col>
                </Row>
                <Divider> <DownOutlined onClick={showCalendarAll}/></Divider>
            </div>
        </>
    )
}

export default CalendarShow;