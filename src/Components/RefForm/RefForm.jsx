import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const passwordRef = useRef();

    // for set up cursor
    useEffect(() =>{
        nameRef.current.focus()
    } ,[])

    const handleSubmit = e =>{
        e.preventDefault();
        
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(numberRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <h3>Ref Form</h3>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="name" />
                <br />
                <input ref={emailRef} type="email" name="email" placeholder="email" />
                <br />
                <input ref={numberRef} type="number" name="phone" placeholder="contact no." />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;