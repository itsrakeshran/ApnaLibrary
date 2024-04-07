import React, { useState } from 'react';
import BookData from '../data/book';
import { IoMdCloseCircleOutline } from "react-icons/io";


const AddBook = ({click}) => {
    const [formData, setFormData] = useState({
        id: (BookData.length +1),
        title: '',
        author: '',
        Branch: '',
        year: '',
        edition: '',
        quantity: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        const api_url=`http://localhost:5000/book`;
        const response = await fetch(api_url, {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });
       
        window.alert(response.ok?"Book Added Sucessfully":"");
        setFormData(
        {   id: (BookData.length +1),
            title: '',
            author: '',
            Branch: '',
            year: '',
            edition: '',
            quantity: ''})
        console.log(formData);
    };

    return (
        <div className="form_container">
            <form id="contact" onSubmit={handleSubmit}>
                    <div id='cross_btn' onClick={()=>click(false)}><IoMdCloseCircleOutline /></div>   
                    
                    <h3>Add Book Form</h3>
                    <p>Current id:{formData.id}</p>               
                
                    <fieldset>
                        <textarea placeholder="Title" name="title" value={formData.title} onChange={handleChange} required></textarea>
                    </fieldset>

                    <fieldset>
                        <input placeholder="Author" type="text" name="author" value={formData.author} onChange={handleChange} required />
                    </fieldset>

                    <fieldset>
                        <input placeholder="Edition" type="text" name="edition" value={formData.edition} onChange={handleChange} required />
                    </fieldset> 

                    <fieldset id='select_branch'>
                        <select name="Branch" value={formData.Branch} onChange={handleChange} required>
                            <option value="">Select Branch...</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electronics and Communication">Electronics and Communication</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Chemical Engineering">Chemical Engineering</option>
                        </select>
                    </fieldset>

                    <fieldset>                     
                        
                        <div className='year_qty'>
                        <select name="year" value={formData.year} onChange={handleChange} required>
                            <option value="">Select Year...</option>
                            <option value="1st year">1st year</option>
                            <option value="2nd year">2nd year</option>
                            <option value="3rd year">3rd year</option>
                            <option value="4th year">4th year</option>
                        </select>

                        <input placeholder="Quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                        </div>
                        
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
            </form>
        </div>
    );
};

export default AddBook;

