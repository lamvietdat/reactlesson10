import React, { useState } from 'react'

export default function LvdTaskAddOrEdit({lvdOsubmit}) {

    const lvdTaskObj = {
        lvd_taskId:4, 
        lvd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",
        lvd_level:""
    }
    const[lvdTask, setlvdTasks] = useState(lvdTaskObj);
    // hàm sử lí sự kiện thay dổi trên điều khiển
    const lvdHandleChange = (lvdEvent)=>{
        let name = lvdEvent.target.name;
        let value = lvdEvent.target.value;

        setlvdTasks(prev=>{
            return{
                ...prev,
            [name]:value,
            }
        })

        console.log(nvtTask);

    }

    const lvdHandleSubmit = (lvdEvent)=>{
        lvdEvent.preventDefault
    }

  return (
    <div>
        <h2>Thêm mới Task</h2>
        <form>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Task ID</span>
  <input type="text" name='lvd_taskName' value={lvdTask.lvd_taskName} onChange={lvdHandleChange}
  class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>  
            <div>
                <label>Task ID</label>
                <input name='lvd_taskId' value={lvdTask.lvd_taskId} onChange={lvdHandleChange} />
            </div>
            <div>
                <label>Task Name</label>
                <input name='lvd_taskName' value={lvdTask.lvd_taskName} onChange={lvdHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='lvd_Level' value={lvdTask.lvd_level}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>

                </select>
            </div>
            <button onClick={nvtHandle}>Ghi lại</button>
        </form>
    </div>
  )
}