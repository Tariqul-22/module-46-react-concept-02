

const ReusableForm = ({title, submitBtnText='submit', handleForm, children}) => {

    const handleSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        } 
        handleForm(data);   
    }
    return (
        <div>
            <h2>Reuseable Form :{title}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <br />
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" required />
                <br />
                <input type="submit" value={submitBtnText}/>
            </form>
            {children}
        </div>
    );
};

export default ReusableForm;