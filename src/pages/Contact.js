import Header from "./Header";

function Contact() {
    return (
        <div >
            <Header />
            <div style={{
                display: 'flex',
                height: '60vh',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        display: 'flex',
                        marginBottom: '40px',
                        fontSize: '35px',
                    }}>
                        Contacts
                    </div>
                    <div style={{
                        height: '200px',
                        width: '600px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ECE5C7'
                    }}>
                        Mob : 9919084928 <br></br>
                        Email :  <br></br>
                        Address: <br></br>
                    </div>
                </div>


            </div>
            <div className="container">
                
                    <div className="row">
                        <div className="col-25">
                            <label >First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label >Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
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
                        <input type="submit" value="Submit"/>
                    </div>
              
            </div>
        </div>
    );
}

export default Contact;