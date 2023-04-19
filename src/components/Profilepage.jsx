import Axios from 'axios'
import React, { useState } from 'react'
import { domain, header } from '../env'
import { useGlobalState } from '../state/provider'

const Profilepage = () => {
  const [{ profile }, dispatch] = useGlobalState()
  //console.log(profile, "from profile pahge")
  const [image, setImage] = useState(null)
  const [firstname, setFirstname] = useState(profile?.prouser.first_name)
  const [lasename, setLasename] = useState(profile?.prouser.last_name)
  const [email, setemail] = useState(profile?.prouser.email)
   //console.log(image,"profile image chane");
 
  const userdataupdate = async () => {
    await Axios({
      method: "post",
      url: `${domain}/api/userdataupdate/`,
      headers: header,
      data: {
        "first_name": firstname,
        "last_name": lasename,
        "email": email
      }
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: "ADD_RELOADPAGE_DATA",
        reloadpage: response.data
      })
      alert(response.data["message"])
    })

  }

  const uploadimage = async () => {
    const formdata = new FormData()
    formdata.append('image', image)
    await Axios({
        method: "post",
        url: `${domain}/api/updateprofile/`,
        headers:header,
        data: formdata
    }).then(response => {
         //console.log(response.data["message"]);
        dispatch({
            type: "ADD_RELOADPAGE_DATA",
            reloadpage: response.data
        })
        alert(response.data["message"])
    })

}

  return (
    <div className="container">
      <div className='row'>
        <div className='media'>
          <img className="rounded-circle account-img" src={`${domain}${profile?.image}`} />
          <div className="media-body">
            <h2 class="account-heading">{profile?.prouser.username}</h2>
            <p class="text-secondary">{profile?.prouser.email}</p>
            <p>{profile?.prouser.first_name} {profile?.prouser.last_name}</p>
          </div>
        </div>
        <div class="form-group">
          <label>Profile Image</label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" class="form-control" />
          <button onClick={uploadimage} className='btn btn-info my-2'>Upload</button>
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" onChange={(e) => setLasename(e.target.value)} value={lasename} />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" onChange={(e) => setemail(e.target.value)} value={email} />
        </div>
        <button className='btn btn-success my-2' onClick={userdataupdate}>Update</button>
      </div>
    </div>
  )
}

export default Profilepage
