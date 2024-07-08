 import React from 'react'

 export default function LvdFormAddorEdit(){
    return(
        <div className='border'>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="id">Id</span>
                    <input type="text" class="form-control" 
                        name='id' value={''}
                        placeholder="id" aria-label="id" aria-describedby="id"/>
                 </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="Username">Username</span>
                    <input type="text" class="form-control" 
                        name='Username' value={''}
                        placeholder="Username" aria-label="Username" aria-describedby="Username"/>
                 </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="Password">Password</span>
                    <input type="password" class="form-control" 
                        name='Password' value={''}
                        placeholder="Password" aria-label="Password" aria-describedby="Password"/>
                 </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="Email">Email</span>
                    <input type="email" class="form-control" 
                        name='Email' value={''}
                        placeholder="Email" aria-label="Email" aria-describedby="Email"/>
                 </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="Phone">Phone</span>
                    <input type="number" class="form-control" 
                        name='Phone' value={''}
                        placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
                 </div>
                 <button className='btn btn-primary' name='btnLvdSave'>Ghi lại</button>
            </form>
        </div>
    )
 }