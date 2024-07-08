import logo from './logo.svg'
import './App.css';
import react, {useState} from 'react'
import LvdListTask from './components/LvdListTask';
import LvdTaskAddOrEdit from './components/LvdTaskAddOrEdit';

function App() {
  const lvd_listTasks = [
    // Mock data
    { lvd_taskId:1,lvd_taskName:"lam Viet Dat", lvd_level:"Small" },
    { lvd_taskId:1,lvd_taskName:"Học lập trình frontend", lvd_level:"Small" },
    { lvd_taskId:2, lvd_taskName:"Học lập trình reactjs",lvd_level:"Medium"},
    { lvd_taskId:3, lvd_taskName:"Lập trình với Frontend - Reactjs",lvd_level:"High"},
    { lvd_taskId:4, lvd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",lvd_level:"Small"},
   ];
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const [lvdlistTasks, setNvtListTasks]= useState(lvd_listTasks);

   const lvdHandleSubmit = (lvdParam)=>{
    console.log("App:", lvdParam);
    setLvdListTasks(prev=>{
      return{
        ...prev,
      }
    })
   }

  return(
    <div className="container border">
      <h1>Lam Viet Dat- K22N1</h1>
      <hr/>
      <div>
        {/* Danh sach list task */ }
        < LvdListTask renderLvdListTasks = {lvdlistTasks} />
      </div>
      <div>
        <LvdTaskAddOrEdit lvdOsubmit={lvdHandleSubmit}/>
      </div>

    </div>
  )
}