import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const StudentForm = ({click}) => {
    const [formData, setFormData] = useState({
        StudentID: '',
        Name: '',
        Email: '',
        Mob:'',
        Password: '',
        IsBlocked: false,
        MaxBooks: 2
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        console.log(formData); 


        const api_url="http://localhost:5000/student"
        // fetch add_student api
        const response = await fetch(api_url, {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });

        // if(response){
        //     return response.json();
        // }   
        
        
        //whatsapp message
        // window.open(`https://api.whatsapp.com/send?phone=${formData.Mob}&text=*Hii,+${formData.Name}*,%0AYour+Library+Account+Id+Password+Has+been+genrated,%0Awith+this+crendential:,%0AId:*${formData.StudentID}*,%0APwd:*${formData.Password},%0ALogin to:www.apanlibraray.com`);
        
        setFormData({
            StudentID: '',
            Name: '',
            Email: '',
            Mob:'',
            Password: '',
            IsBlocked: false,
            MaxBooks: 2,
        });

    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                
                <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>             
                
                <h3>Add Student Form</h3>               

                <fieldset>
                    <input placeholder="Student ID" type="text" name="StudentID" value={formData.StudentID} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <input placeholder="Name" type="text" name="Name" value={formData.Name} onChange={handleChange} required />
                </fieldset>

                <fieldset>
                    <input placeholder="MObile" type="text" name="Mob" value={formData.Mob} onChange={handleChange} required />
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

export default StudentForm;
