import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const Register= ()=>{

	const h = "|"

	const [email,setEmail] = useState('')

	const handleSbmit = () => {
		//
	}


	const registerForm = () => {
		
		return(
			<form onSubmit={handleSbmit}>
				<input type="email" 
				className="form-control" 
				value={email}
				onChange={e => {setEmail(e.target.value)} }
				autoFocus
				></input>
			<br></br>
			<button className="btn btn-success">Register {h} {email} </button>
			</form>
		
);
	}

	return (
	  <div className="container p-5">
		  <div className="row">
	        <div className="col-md-6 offset-md-3">
				<h4>
					Register
				</h4>
					{registerForm()}
			
			</div>
		  </div>
	  </div>
);
};

export default Register;