import React from 'react';
import Header from "./Header";
import { Carousel } from 'antd';
import A from './../assets/A.jpeg';
import B from './../assets/B.jpeg';
import C from './../assets/C.jpeg';
import D from './../assets/D.jpeg';
import E from './../assets/E.jpeg';
import F from './../assets/F.jpeg';
import X from './../assets/X.jpeg';
import Y from './../assets/Y.jpeg';
import Z from './../assets/Z.jpeg';
import { Card } from 'antd';
import About from './About';
import Contact from './Contact';

const { Meta } = Card;

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function Home() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div >
            <Header />
            <Carousel dotPosition={'left'} autoplay={true} afterChange={onChange}>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={A} />
                </div>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={B} />
                </div>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={C} />
                </div>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={D} />
                </div>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={E} />
                </div>
                <div>
                    <img height={'600px'} width={'100%'} alt='' src={F} />
                </div>
            </Carousel>
            <div style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                fontWeight: '600',
            }}>
                Our Inspiration
            </div>
            <div style={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row'
            }}>
                <Card
                    hoverable
                    style={{ width: '300px', height: '150px !important' }}
                    cover={<img alt="1" src={X} />}
                >
                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
                <Card
                    hoverable
                    style={{ width: '300px', height: '150px !important' }}
                    cover={<img alt="2" src={Y} />}
                >
                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
                <Card
                    hoverable
                    style={{ width: '300px', height: '150px !important' }}
                    cover={<img alt="3" src={Z} />}
                >
                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
            </div>
            <div style={{
                margin: '200px',
                height: '500px',
                width: '1000px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ECE5C7',
                padding: '40px'
            }}>
                ??????????????? ??????????????? ???????????? ????????????
                ?????? ??????????????????????????? ???????????????
                ?????? ??????????????? ?????????????????? ??????????????? ???????????? ???????????? ?????????????????? ?????? ???????????? ???????????? ?????????????????? ????????? ????????? ?????????????????? ??????????????? ?????? ?????????????????? ??????????????? ???????????? ???????????? ????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????? ?????? ?????????????????? ???????????? ????????????????????? ?????? ?????????????????? ?????? ????????? ????????? ????????????????????? ?????? ?????????????????? ?????? ????????????????????? ??? ??????????????? ???????????? ???????????????????????? ???????????? ???????????? ???????????? ????????????????????? ????????? ???????????? ???????????????????????? ?????????????????? ???????????????????????? ???????????? ???????????? ?????????????????? ?????????????????????, ??????????????? ??????????????????, ???????????????- ??????????????? ?????? ?????????????????? ?????? ???????????????-????????????????????? ?????? ???????????? ?????????????????? ????????? ???????????? ???????????? ????????????????????? ?????????, ???????????? ?????????????????? ??????????????? ?????? ?????? ?????? ??????????????? ???????????? ?????? ???????????? ???????????? ???????????? ?????? ???????????????????????? ?????? ???????????????????????? ??????????????? ????????? ???????????? ???????????? ????????????????????????, ??????????????? ???????????????, ???????????? ????????? ????????????????????? ?????? ????????? ???????????? ???????????????-??????????????? ???????????? ?????????????????? ???????????? ???????????? ???????????????????????? ?????? ??????????????????, ???????????? ???????????? ??????????????????????????? ???????????? ?????? ?????? ????????????????????? ??????????????? ????????????, ????????? ???????????????????????? ???????????? ????????????????????? ?????????????????? ???????????? ???????????? ?????? ?????? ???????????????????????? ?????? ????????? ????????? ???????????????????????? ?????? ????????????????????? ???????????????
                ?????? ????????? ???????????? ?????????????????? ???????????? ???????????? ?????????????????????????????? ?????? ??????????????? ????????????????????? ?????? ????????? ?????????????????? ?????????????????? ????????????????????? ???????????????
                ?????????????????? ???????????? ???????????????????????? ????????? ?????? ??????????????? ?????? ????????? ???????????? ???????????? ????????? ???????????? ???????????? ????????? ??????????????????
                ??????????????? ?????? ???????????????????????? ????????????, ???????????????????????? ??????????????? ?????????????????????????????? (????????????????????????) ???????????? ????????????
                ???????????????????????? ????????? ?????? ??????????????? ???. ????????? ??????????????? ?????? ????????? ????????? ?????????. ???????????? ????????????????????? ???????????????????????? ??????????????? ????????????????????? ?????? ???????????? ??????
                ????????????????????? ??? ???????????? ??? ?????? ????????? ?????????-???????????? ????????? ????????????????????? ?????? ????????????????????? ??????????????? ???????????? ?????? ??????????????? ????????? ???????????? ????????? ??????????????????
                ??????????????? ?????? ???????????? ???????????????, ????????? ?????????' ??? ???????????? ?????? ???????????? ?????? ???????????????????????? ??????????????? ????????????, ?????????. ???????????? ????????? ???????????? ????????? ????????????????????????
                ????????? ??????????????? ????????? ???????????? ???????????? ????????????????????????, ???????????? ????????? ?????????????????? ????????? ???????????????????????? ????????????, ???????????? ??????????????????????????? ???????????? ???????????????, ????????????????????? ?????? ????????? ???????????? ????????? ?????????????????? ???????????? ??????
                X ????????? ?????? ?????? ???????????? ????????? ?????????????????? ?????? ?????? ?????? ?????? ????????? ????????? ?????? ??????????????? ????????????, ?????? ????????? ?????? ???????????? ?????? ??????????????????????????? ?????? ????????????????????? ??????????????? ?????? ???????????? ?????????????????? ?????? ??????????????? ???????????????
                / ???????????? ????????????????????? ???????????? ??????????????????
                ???????????? ??????. ???-???????????? ??????????????? ????????????????????? ?????????????????????????????? ???????????? ??????????????? ???????????? ?????????????????? ???????????? ??????????????? ????????? ???????????? ???????????? ???????????? ????????????
                ???????????? ????????????
                ??????????????? -????????? ????????????????????? ???????????????????????? ??????????????? ?????????????????? ???????????????-??????????????????, ????????? ????????????
                ???????????? ?????? ???????????? ???????????? ???????????? ???????????? ?????? ?????? ????????????????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ??????????????? ????????????????????? ???????????????????????? ????????????
                ?????????????????? ?????? ?????????????????? ?????? ?????? ??????????????? ???????????? ?????? ???????????? ????????????????????? ?????????????????? ???????????? ???????????????????????? ??????????????? ??????????????????
                ????????????????????? ?????????????????? ??????????????? ????????? ???????????? ?????? ???????????? ???????????? ????????? ???????????? ???????????? ??????????????????????????? ???????????? ?????? ????????????????????? ?????? ???????????? ??????????????? ????????? ?????? ??????????????? ???????????? ?????? ???????????? ?????????-??????????????? ??????. ?????? ??????????????? ????????????????????? ?????? ???????????? ???????????? ????????? ????????? ????????????????????? ?????? ??????????????? ?????? ?????????????????? ????????? ???????????? ?????? ??????
                ????????????????????????????????? ???????????? ?????? ?????? ?????????????????? ??????????????????
            </div>
            
            <div className="container">
               
                    <div className="row">
                        <div className="col-25">
                            <label >First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label >Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label >Country</label>
                        </div>
                        <div className="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div classname="row">
                        <div className="col-25">
                            <label >Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
               
            </div>


        </div>
    );
}

export default Home;