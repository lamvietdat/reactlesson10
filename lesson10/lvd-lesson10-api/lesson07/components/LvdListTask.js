import React from 'react';

export default function LvdListTask({ renderLvdListTasks, onLvdEdit, onLvdDelete }) {
  console.log(renderLvdListTasks);

  // Hàm xử lý dữ liệu khi edit
  const lvdHandleEdit = (task) => {
    console.log("edit:", task);
    // Chuyển đổi dữ liệu trên app
    onLvdEdit(task);
  }

  const lvdHandleDelete = (taskId) => {
    // Gọi hàm xử lý xóa từ props
    onLvdDelete(taskId);
  }

  // Render data
  let lvdElementTask = renderLvdListTasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{task.lvd_taskId}</td>
        <td>{task.lvd_taskName}</td>
        <td>{task.lvd_task_level}</td>
        <td>
          <button className='btn btn-success' onClick={() => lvdHandleEdit(task)}>Edit</button>
          <button className='btn btn-danger' onClick={() => lvdHandleDelete(task.lvd_taskId)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lvdElementTask}
        </tbody>
      </table>
    </div>
  );
}