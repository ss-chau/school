import Header from "./Header";

function Tutorials() {
    return (
      <div >
          <Header/>
          <div style={{
                display: 'flex',
                height: '90vh',
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
                        Tutorials
                    </div>
                    <div style={{
                    height: '400px',
                    width: '800px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ECE5C7'
                    }}>
                        Comming soon ...             
                </div>
                </div>


            </div>
      </div>
    );
  }
  
  export default Tutorials;