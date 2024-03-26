import { useState } from "react";




const ControlStateForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        {
            password.length < 6
            ? setError('Password must be 6 digits or bigger..')
            : setError('')
        }
        console.log('Name:', name, ' Email:', email, ' Contact No. :', phone,' pass :', password);
    }

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <h3>Control State Form </h3>
            <form onSubmit={handleSubmit}>
                <div>Name :
                    <input
                        onChange={handleNameChange}
                        type="text" name="name" />
                </div>

                <div>Email :
                    <input
                        onChange={handleEmailChange}
                        type="email" name="email" />
                </div>

                <div>phone :
                    <input
                        onChange={handlePhoneChange}
                        type="number" name="phone" />
                </div>
                
                <div>Password:
                    <input 
                        onChange={handlePasswordChange} 
                        type="password" name="password" id="" required />
                </div>

                <input type="submit" value="Submit" />
                <p>{error}</p>
            </form>
        </div>
    );
};

export default ControlStateForm;