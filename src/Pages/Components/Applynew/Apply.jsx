import React,{useEffect} from 'react';
import './Aplly.css';
import { useState } from 'react';
import Footer from '../Footer';
import axios from 'axios';
import {TbFileUpload} from'react-icons/tb';
import {BiLoaderCircle} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

const Apply = () => {
  useEffect(() => {
    AOS.init();
    setNameeror(false)
    setPhonerr(false)
    setResumefile(null)
    
  }, [])
  
  const [firstname,setFirstName]=useState('');
  const [midname,setMidname]=useState('');
  const [lastname,setLastname]=useState('');
  const [email, setEmail] = useState('');
  const [branch,setBranch]=useState('');
  const [faculty,setFaculty]=useState('');
  const [yr,setYr]=useState(null);
  const [resume,setResumeUrl]=useState('');
  const [phone,setPhone]=useState('')
  const [enrollment,setenrollment]=useState('');

  const [resumefile,setResumefile]=useState(null);
  
  //const [toggle1 ,setToggle1]=useState(true);
  //const [toggle2,setToggle2]=useState(false);
   const [rsmuploadsccs,setResmupldscs]=useState(false);
   const [rsmuploadscs2,setResumeupldscs2]=useState(false);

   const [uploading,setUploading]=useState(false);
   
     


   //common error 
   const [namerror,setNameeror]=useState(false)
   const [phoneerr,setPhonerr]=useState(false);
   const [facerr,setfacerr]=useState(false)
   const [enrollerr,setEnrollerr]=useState(false)
   const [brancherr,setbrancherr]=useState(false)
   const [yearerr,setyearerr]=useState(false)
   const [resumeerr,setrumeerr]=useState(false)

   const [emailerr,setEmailerr]=useState(false)

   const [notvaliderr,setnotvaliderr]=useState(false)

   const [registerprocess,setregprocess]=useState(false)



  
  
    
  
   function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const name=firstname+''+midname+''+lastname;
  
  const UploadRes =()=> {
    setUploading(true)
    const data= new FormData()
    data.append("file",resumefile)
    data.append("upload_preset","dmpmjebg")
    data.append("cloud_name","dxzmu2rdc")
    axios.post("https://api.cloudinary.com/v1_1/dxzmu2rdc/upload",data)
    .then((res)=>{console.log(res)
        setResumeUrl(res.data.url)
        alert("file Uploaded")
        setResmupldscs(true)
        setResumeupldscs2(false)
        setUploading(false)
        
       
  })
  .catch(err=> {
    console.log(err)
    setUploading(false)
    
  }) 
       

  }
  const CallApi= async (e)=> {
    e.preventDefault();
    
    setregprocess(true)
    
    let item = {
      name,
      faculty,
      yr,
      branch,
      email,
      phone,
      enrollment,
      resume
    }
    console.log(item)

    if ( name && faculty && yr && branch && email && phone && enrollment && rsmuploadsccs && isValidEmail(email) ) {
      axios
        .post("https://long-ruby-snapper-hose.cyclic.app/register", item )
        .then((response) => {
          console.log(response.data);
          //setSuccess(true)
          
          setregprocess(false)
          Swal.fire(
            'Success!',
            'Thank you for your application. We will get back to you as soon as possible.',
            'success'
          )
          setFirstName("")
          setMidname("")
          setLastname("")
          setEmail("")
          setPhone("")
          setBranch("")
          setYr("")
          setFaculty("")
          setenrollment("")
          setResumefile(null)
          setResmupldscs(false)
          
        })
        .catch((err) => {
          console.log(err);
          
          setregprocess(false)
          Swal.fire(
            'Error!',
            'Please wait a few minutes before you try again.',
            'error'
          )
          
        });


    }
    if (name === '') {
      setNameeror(true)
      setregprocess(false)
    }
    if (phone===''){
      setPhonerr(true)
      setregprocess(false)
    }
    if (faculty===''){
      setfacerr(true)
      setregprocess(false)
    }
    if (enrollment===''){
      setEnrollerr(true)
      setregprocess(false)
    }
    if (branch===''){
      setbrancherr(true)
      setregprocess(false)
    }
    if (yr == null) {
      setyearerr(true)
      setregprocess(false)
    }
    if (email === ''){
      setEmailerr(true)
      setregprocess(false)
    }
    if (!isValidEmail(email)) {
      setnotvaliderr(true)
      setregprocess(false)
    }
    if (resume===''){
      setrumeerr(true)
      setregprocess(false)
      setResumeupldscs2(true)
    }
   
    
    
    
  }
  return (
    <div className='mainapplydiv'>
         <div className='upperheadingapply'>
           <div className='applyhead'>JOIN US</div>
           <div className='lineborder'></div>
           <div className="applyheaddesc">Be a part of the team that fosters growth and elevates competition</div>
         </div>
         
         
        <div className="formapplycontainer" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
          
          
           
            <div className="mainformcon">
              <div className='perkbg1'></div>
              <div className='perkbg2'></div>
                 <div className="backgroundposition">
                   <div className="backgroundpositionin"></div>
                 </div>
                 <div className='perks'>
                   
                    
                    <div className='perkdiv' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
                       <div className="perkicon" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/devskill.png)`}}></div>
                       <div className="headingplusdesc">
                         <div className="headingperks">Develop New Skills</div>
                         <div className="perksdesc">If you have the chance to eventually serve in a leadership position with the club, you can hone your leadership and managerial skills.</div>
                       </div>
                    </div>
                    <div className='perkdiv' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
                       <div className="perkicon" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/networkskill.png)`}}></div>
                       <div className="headingplusdesc">
                         <div className="headingperks">Build a Network</div>
                         <div className="perksdesc">By joining a club or organization, you can gain access to a new network of people, which can benefit you both personally and professionally.</div>
                       </div>
                    </div>
                    <div className='perkdiv' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
                       <div className="perkicon" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/resumeskill.jpg)`}}></div>
                       <div className="headingplusdesc">
                         <div className="headingperks">Boost Your Resume</div>
                         <div className="perksdesc">Extracurriculars like clubs are a great way to make your resume pop. Most employers want to see you're involved in campus life beyond your classes.</div>
                       </div>
                    </div>
                 </div>
                <div className="formconapply">
                  <div className="formconhead">REGISTER HERE</div>
                  <div className="mainform">

                      <div className="namecon">

                        <div className='labeldivapply'>
                            <div className='labels'>{namerror?(<span className='errred'>Name is required</span>):"First Name"}</div>
                            <input  type="text" name="name"
                            onChange={(e) => {setFirstName(e.target.value)
                                              if(firstname.length>0){
                                                setNameeror(false)
                                              }
                             
                                    }}
                                value={firstname}
                            
                            />

                        </div>
                        <div className='labeldivapply'>
                            <div className='labels'>Middle Name</div>
                            <input  type="text" name="name"
                            onChange={(e) => {setMidname(e.target.value)
                                          if(midname.length>0){
                                            setNameeror(false)
                                          }
                            
                            
                                    }}
                                value={midname}
                            
                            />

                        </div>
                        <div className='labeldivapply'>
                            <div className='labels'>Last Name</div>
                            <input  type="text" name="name"
                            onChange={(e) => {setLastname(e.target.value)
                                            if(lastname.length>0){
                                              setNameeror(false)
                                            }
                            
                            
                                    }}
                                value={lastname}
                            
                            />
                            

                        </div>

                      </div>

                      <div className="emailphonecon">
                          <div className='labeldivapply emailphone'>
                                <div className='labels'>{emailerr?(<span className='errred'>Email is required</span>):(notvaliderr?(<span className='errred'>Please enter a valid Email</span>):"Email")}</div>
                                <input  type="text" name="name"
                                onChange={(e) => {setEmail(e.target.value)
                                                if (email.length<0) {
                                                  setnotvaliderr(false)
                                                  setEmailerr(true)
                                                }

                                                if(email.length>0){
                                                  setEmailerr(false)
                                                }
                                                if (email.length>0 && isValidEmail(email)) {
                                                  setnotvaliderr(false)
                                                }
                                                if (email.length>0 && !isValidEmail(email)){
                                                  setnotvaliderr(true)
                                                }
                                                
                                                

                                              


                                             
                                            
                                
                                        }}
                                    value={email}
                                
                                />

                            </div>
                            <div className='labeldivapply emailphone'>
                                <div className='labels'>{phoneerr?(<span className='errred'>Phone No. is required</span>):"Phone"}</div>
                                <input  type="text" name="name"
                                onChange={(e) => {setPhone(e.target.value)
                                
                                               if (phone.length>0){
                                                 setPhonerr(false)
                                               }
                                        }}
                                    value={phone}
                                
                                />

                            </div>

                      </div>

                      <div className="enrfacno">
                            <div className='labeldivapply enrfac'>
                                  <div className='labels'>{facerr?(<span className='errred'>Faculty No. is required</span>):"Faculty No"}</div>
                                  <input  type="text" name="name"
                                  onChange={(e) => {setFaculty(e.target.value)
                                               if (faculty.length>0){
                                                 setfacerr(false)
                                               }
                                  
                                  
                                          }}
                                      value={faculty}
                                  
                                  />

                              </div>
                              <div className='labeldivapply enrfac'>
                                  <div className='labels'>{enrollerr?(<span className='errred'>Enrollment No. is required</span>):"Enrollment No."}</div>
                                  <input  type="text" name="name"
                                  onChange={(e) => {setenrollment(e.target.value)
                                  
                                    if (enrollment.length>0){
                                      setEnrollerr(false)
                                    }
                                          }}
                                      value={enrollment}
                                  
                                  />

                              </div>

                      </div>
                      <div className="branchyrcon">
                          <div className='labeldivapply branchyr'>
                                <div className='labels'>{brancherr?(<span className='errred'>Please mention your branch</span>):"Branch"}</div>
                                <input  type="text" name="name"
                                onChange={(e) => {setBranch(e.target.value)
                                
                                  if (branch.length>0){
                                    setbrancherr(false)
                                  }
                                        }}
                                    value={branch}
                                
                                />

                            </div>
                            <div className='labeldivapply branchyr'>
                                <div className='labels'>{yearerr?(<span className='errred'>Please select your year of study</span>):"Year of study"}</div>
                                <select onChange={(e)=> {setYr(e.target.value)
                                                          if (yr !== ""){
                                                            setyearerr(false)
                                                          }
                                                         
                                }} value={yr} >
                                <option value="" disabled selected>Select your option</option>
                                <option value="First">First</option>
                                <option value="Second">Second</option>
                                <option value="Third">Third</option>
                                <option value="Fourth">Fourth</option>
                              </select>

                            </div>
                      </div>
                      <div className="labels">{rsmuploadscs2?(<span className='errred'>Please upload your Resume</span>):"Upload Resume"}</div>
                      <div className="upload">
                      
                        <div className='uploadicon'><TbFileUpload/></div>
                        <div className='labeldivapply uploadinput'>
                          
                          <input className='fileinput' type='file' onChange={(e)=> {

                            setResumefile(e.target.files[0])
                            setResmupldscs(false)
                           
                           
                          

                          }} >

                          </input>
                        </div>
                        <div className="uploadstatus" onClick={UploadRes}>{(rsmuploadsccs)?"Uploaded":(uploading?"Uploading...":"Upload")}</div>
                      </div>

                      <div className="button">
                        <button className='btnapply' onClick={CallApi}>{registerprocess?(<BiLoaderCircle/>):"Apply"}</button>
                      </div>
                        

                  </div>
                   

                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Apply