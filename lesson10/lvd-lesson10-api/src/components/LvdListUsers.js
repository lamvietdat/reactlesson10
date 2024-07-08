import React from 'react'

export default function LvdListUsers({renderLvdListUsers}){
    console.log("LvdListUsers:",renderLvdListUsers);
    // hiển thị dữ liệu
    let lvdElementUser = renderLvdListUsers.map((lvdUser,index)=>{
        return(
            <>
                <tr>
                    <td>{lvdUser.id}</td>
                    <td>{lvdUser.Usernam}</td>
                    <td>{lvdUser.Password}</td>
                    <td>{lvdUser.Email}</td>
                    <td>{lvdUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
    return(
        <div className='row'>
            <div className='col-md-12'>
            <table className='table table-bordered'>
                <thred>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thred>
                <tbody>
                    {lvdElementUser}
                </tbody>
            </table>  
            </div>
        </div>
    )
}