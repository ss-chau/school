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
                इण्टर कालेज कटघर खजनी
                का संक्षिप्त विवरण
                यह कालेज शिक्षा परिषद खजनी नामक संस्था छः एकड़ भूमि दिलाने में अथक प्रयास किया। उन द्वारा जुलाई वर्ष १९६० में स्व० श्री गणेश प्रसाद लोगों के प्रयास एवम् प्रेरणा से संस्था को कुल सबा पाण्डेय के माध्यम से स्थापित ह प्रा। इसके संस्थापक चौदह एकड़ भूमि प्राप्त हई। इसके अतिरिक्त इन्हीं स्वर्गीय श्री गणेश प्रसाद पाण्डेय, ग्राम टेकवार, पोस्ट- लोगों के प्रयास से ग्राम-मझगावां के श्री फौजदार खाँ उनवल जिला गोरखपुर हैं, उनके द्वारा कालेज के इस और ग्राम कटघर के श्री नागू यादव ने विद्यालय के संस्थापन कार्य में श्री बाबू सकटासिंह, ग्राम खटहना, स्व० भवन निर्माण के लिए अपनी थोड़ी-थोड़ी भूमि संस्था श्री बाबू देवीसिंह जी खुटहना, श्री बाबू ब्रम्हदेव सिंह जी को समर्पित किया। कटधर, एवं स्वर्गीय बाबू सर्वदेव नारायण सिंह कटधर ने सह संस्थापक के रुप में बुनियादी और सराहनीय सहयोग
                इन सभी भूमि प्रदान करने वाले महानुभावों की दिया। स्थापना के बाद संस्था द्वारा संचालित कालेज
                संस्था सदैव प्राभारी है। के विकास के लिए इसकी नींव में श्री बाबू दीप नारायण
                कालेज का प्रारम्भ सिंह, इन्चार्ज पुलिस इन्सपेक्टर (तत्कालीन) थाना खजनी
                प्रारम्भ में यह कालेज ज. हाई स्कूल के रूप में स्व. श्री नेवाशधर द्विवेदी ग्राम मझगावां का बहुत ही
                स्थापित ह प्रा । उस समय शरु-शुरू में स्थानीय जन सराहनीय सहयोग रहा। इस कार्य में श्री दीप नारायण
                सहयोग से स्कल छप्पर, टोन शेड' ख परेल की छाजन के त्रिपाठो ग्राम कोठा, स्व. श्री शिव बालक राम त्रिपाठी
                कुछ कमरों में चलता रहा। रूद्रपुर, श्री भान प्रताप राम त्रिपाठी सरया, श्री राजेन्द्र सिंह हरनही, पान्डेय जी एवं श्री दीप नारायण सिंह जी
                X फिर एक दो वर्ष बाद प्रगति के पथ पर का खले दिल से सहयोग किया, उस समय के अन्य भा अग्रसरिता कई गणमान्य लोगों ने अपना समर्थन एव सहयोग दिया।
                / कक्ष निर्माण भूमि प्रदान
                कक्ष नं. १-सर्व प्रथम श्रीमती इन्द्रासना देवी पत्नी भूमि प्रदान करने वालों में श्री बाबू सकटा सिंह
                स्वः श्री
                ग्राम -बरी बन्दुजी तत्कालीन प्राम सभापति ग्राम-खुटहना, एवं उनके
                बारी ने श्री बाबू देवी सिंह जी को प्रेरणा से सहयोगी ग्राम समाज के समस्त सदस्यगण स्वर्गीय श्री
                उन्हीं के माध्यम से एक पक्के कक्ष का बाबू सर्वदेव नारायण सिंह तत्कालीन ग्राम सभापति
                निर्माण कराया। ग्राम सभा कटघर ने अपने बड़े भाई श्री बाबू ब्रम्हदेव सिंह की प्रेरणा से अपने ग्राम सभा के ग्राम समाज के कक्ष न०२-दूसरे नं. पर ग्राम मझगावों के स्व० श्री पं० सभी सदस्यों के सहयोग से क्रमशः पाठ एकड़ एव वा
                श्रीनेवासधर दूबे जो एक दानबोर स्वभाव
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