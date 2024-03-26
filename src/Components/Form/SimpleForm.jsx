

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <h3>Simple Form</h3>
            <form onSubmit={handleSubmit}>
                <div>Name : <input type="text" name="name" /></div>
                <div>Email : <input type="email" name="email" /></div>
                <div>phone : <input type="number" name="phone" /></div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;