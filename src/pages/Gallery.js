import Header from "./Header";
import lodash from 'lodash';
import A from './../assets/A.jpeg';
import B from './../assets/B.jpeg';
import C from './../assets/C.jpeg';
import D from './../assets/D.jpeg';
import E from './../assets/E.jpeg';
import F from './../assets/F.jpeg';
import X from './../assets/X.jpeg';
import Y from './../assets/Y.jpeg';
import Z from './../assets/Z.jpeg';

function Gallery() {
    return (
        <div >
            <Header />
            <div style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                fontWeight: '600',
            }}>
                Our gallery
            </div>
            <div styl={{
                display: 'flex',
                marginTop: '20px',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={A}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={B}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={C}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={D}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={E}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={F}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={X}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={Y}/>;
                    <img height={'500px'} width={'400px'} style={{
                        margin: '30px'
                    }} alt='' src={Z}/>;
               
            </div>
        </div>
    );
}

export default Gallery;