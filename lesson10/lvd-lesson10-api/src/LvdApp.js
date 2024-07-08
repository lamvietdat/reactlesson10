import './App.css';
import LvdListUsers from './components/LvdListUsers';
import axios from './api/LvdApi';
import { useEffect } from 'react';
import LvdFormAddorEdit from './components/LvdFormAddOrEdit';
function LvdApp() {

  const [LvdListUsers,setlvdListUsers] = useState([]);

  const lvdGetAllUsers = async()=>{
    const lvdResponse = await axios.get("lvdUsers");
    console.log("Api Data:",lvdResponse.data);
    setlvdListUsers(lvdResponse.data)
  }

  useEffect(()=>{
    lvdGetAllUsers();
    console.log("State Data:",LvdListUsers);
  },[])

  const [lvdAddorEdit, setLvdAddorEdit] = useState(false);
  const lvdInitUser = {
    Username: "Lâm Viết Đạt",
    Password: "02/03/2004",
    Email: "lamvietdat.02032004@gmail.com",
    Phone: "0965621585",
    id: "2210900094"
  }
  const [lvdUser, setLvdUser] = useState(lvdInitUser);
  // Hàm xử lý thêm mới
  const lvdHandleAddNew =() =>{
    setLvdAddorEdit(true);
  }
  let lvdElementForm = lvdAddorEdit===true?<LvdFormAddorEdit rendersers={lvdUser}/>:"";
  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <LvdListUsers renderLvdListUsers={LvdListUsers}/>
      <button className='btn btn-primary' name='btnLVdThemMoi' onClick={lvdHandleAddNew}>Thêm mới</button>
      <hr/>
      {lvdElementForm}
    </div>
  );
}

export default LvdApp;
