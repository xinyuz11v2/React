import React from 'react';
import '../boostrap/css/bootstrap.min.css'
import '../styles/style.css'

class Home extends React.Component {
    render() { 
        return ( 
            <div className='main'>
			    <div className = "container-fluid">
				    <div className = "row">
					    <div className = "entry-banner text-center">
						    <h1 id = "hello">Hello, I'm</h1>
						    <h1 id = "name">XXXX</h1>
						    <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
					    </div>
				    </div>

				    <div className = "row text-center">
					    <div className = "banner-buttons">
						    <div className = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
							    <div className = "btn--primary">Info</div>
						    </div>

						    <div className = "col-sm-1 col-md-1">
							    <div className = "btn--primary">Portfolio</div>
						    </div>
					    </div>
				    </div>
			    </div>
		    </div>
        );
    }
}
 
export default Home;