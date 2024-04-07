
import HorizontalButton from '../HorizontalButton'
import React, { useState,useEffect } from 'react';


//forms
import StudentForm from '../Forms/AddStudent';
import AddLibrarianForm from '../Forms/AddLibrarian';
import DeleteStudent from '../Forms/DeleteStudent';
import DeleteLibrarianForm from '../Forms/DeleteLibrarian';
import BlockStudentForm from '../Forms/BlockStudent';
import StudentDetails from '../Forms/StudentDetails'
import LibrarianDetails from '../Forms/LibrarianDetails';


const ManageUser = () => {
    const[showForm,setShowForm]=useState(false);
    const[showStudentDet,setshowStudentDet]=useState(false);
    const[showAdlb,setShowAdlb]=useState(false);
    const[showdltstd,setShowdltstd]=useState(false);
    const[showdblkstd,setShowdblkstd]=useState(false);
    const[showdblklib,setShowdblklib]=useState(false);
    const[showLibDetails,setShowLibDetails]=useState(false);
    
    const[showbg,setShowBg]=useState(true)
  
    useEffect(() => {
      if (showForm || showAdlb || showdltstd || showdblkstd || showdblklib || showStudentDet || showLibDetails) {
        setShowBg(false);
      } else {
        setShowBg(true);
      }
    }, [showForm, showAdlb, showdltstd, showdblkstd,showdblklib, showStudentDet,showLibDetails])



  return (
    <>
      <div id='formpopup'>
          <>
              {/* add student */}
              {showForm?<StudentForm click={setShowForm}/>:""}

              {/* add librarian */}
              {showAdlb?<AddLibrarianForm click={setShowAdlb}/>:""}

              {/* deleteStudent */}
              {showdltstd?<DeleteStudent click={setShowdltstd}/>:""}

              {/* BlockStudent */}
              {showdblkstd?<BlockStudentForm click={setShowdblkstd}/>:""}

              {/* Deletelibrarin */}
              {showdblklib?<DeleteLibrarianForm click={setShowdblklib}/>:""}

              {/* studentdetai? */}
              {showStudentDet?<StudentDetails click={setshowStudentDet}/>:""}

              {/* librarian details */}
              {showLibDetails?<LibrarianDetails click={setShowLibDetails}/>:""}
          </>
      </div>

      {showbg?<div className='display'>            
          
          <div className='display_section'>
            <div>
              <p>Student</p>
            </div>
           
            <div className='display_sub_section'>
              <div onClick={()=>setshowStudentDet(true)}><HorizontalButton  name="Student Details"/></div>
              <div onClick={()=>setShowForm(true)}><HorizontalButton  name="Add Student"/></div>
            </div>
            <div className='display_sub_section'>
              <div onClick={()=>setShowdltstd(true)}><HorizontalButton name="Delete Student"/></div>
              <div onClick={()=>setShowdblkstd(true)}><HorizontalButton name="Block Student"/></div>
              
            </div>
          </div>

            <div className='display_section'>
              <div>
              <p>librarian</p>
            </div>

            <div className='display_sub_section'>
              <div onClick={()=>setShowLibDetails(true)}><HorizontalButton name="Lbrarian Details"/></div>
              <div onClick={()=>setShowAdlb(true)}><HorizontalButton name="Add librarian"/></div>
            </div>

            <div className='display_sub_section'>
             
              <div onClick={()=>setShowdblklib(true)}><HorizontalButton name="Delete librarian"/></div>
              <div onClick={()=>setShowdblklib(true)}><HorizontalButton name="Block librarian"/></div>
              
            </div>           
          </div>    
      </div>:""}

    </>
  )
}

export default ManageUser