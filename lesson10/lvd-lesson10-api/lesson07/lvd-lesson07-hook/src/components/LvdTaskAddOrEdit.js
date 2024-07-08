import React, { useEffect, useState } from 'react';

export default function LvdTaskAddOrEdit({ lvdOnSubmit, renderLvdTask, renderLvdAddOrEdit }) {
  console.log("LvdTaskAddOrEdit:", renderLvdTask, renderLvdAddOrEdit);

  // Đối tượng task
  const lvdTaskObj = {
    lvd_taskId: 0,
    lvd_taskName: "",
    lvd_level: ""
  };

  const [lvdTask, setLvdTask] = useState(renderLvdTask);

  useEffect(() => {
    setLvdTask(renderLvdTask);
  }, [renderLvdTask]);

  console.log("State:", lvdTask);

  // Hàm xử lý thay đổi điều khiển
  const lvdHandleChange = (lvdEvent) => {
    const { name, value } = lvdEvent.target;

    setLvdTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const lvdHandleSubmit = (lvdEvent) => {
    lvdEvent.preventDefault();
    lvdOnSubmit(lvdTask);
  }

  const lvdTitle = renderLvdAddOrEdit === false ? "Thêm mới task:" : "Sửa task";

  return (
    <div>
      <h2>{lvdTitle}</h2>
      <form>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon1">Task ID</span>
          <input 
            name='lvd_taskId' 
            value={lvdTask.lvd_taskId} 
            onChange={lvdHandleChange} 
            className="form-control" 
            placeholder="Task ID" 
            aria-label="Task ID" 
            aria-describedby="basic-addon1"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon2">Task Name</span>
          <input 
            name='lvd_taskName' 
            value={lvdTask.lvd_taskName} 
            onChange={lvdHandleChange} 
            className="form-control" 
            placeholder="Task Name" 
            aria-label="Task Name" 
            aria-describedby="basic-addon2"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon3'>Task Level</span>
          <select 
            name='lvd_level' 
            value={lvdTask.lvd_level} 
            onChange={lvdHandleChange} 
            className='form-control' 
            aria-describedby='basic-addon3'
          >
            <option value={'Small'}>Small</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
        </div>
        <button onClick={lvdHandleSubmit} className='btn btn-primary'>Ghi lại</button>
      </form>
    </div>
  )
}