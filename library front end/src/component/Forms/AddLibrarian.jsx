import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddLibrarianForm = ({click}) => {
    const [formData, setFormData] = useState({
        EmpID: '',
        Name: '',
        Mob:'',
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        const api_url="http://localhost:5000/librarian"

        // fetch add_student api
        const response = await fetch(api_url, {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });
        setFormData({
            EmpID: '',
            Name: '',
            Mob:'',
            Email: '',
            Password: ''
        })
    };

    return (
        <div className="container">
            <form id="contact" onSubmit={handleSubmit}>
                <div id='lib_cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>   
                <h3>Add Librarian Form</h3>

                <fieldset>
                    <input placeholder="Emp ID" type="text" name="EmpID" value={formData.EmpID} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <input placeholder="Name" type="text" name="Name" value={formData.Name} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <input placeholder="Mobile" type="text" name="Mob" value={formData.Mob} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <input placeholder="Email" type="email" name="Email" value={formData.Email} onChange={handleChange} required />
                </fieldset>                

                <fieldset>
                    <input placeholder="Password" type="text" name="Password" value={formData.Password} onChange={handleChange} required />
                </fieldset>

                
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddLibrarianForm;
