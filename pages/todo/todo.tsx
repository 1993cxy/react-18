import React, { FC } from 'react';
interface ITodoState {}
const Todo: FC<ITodoState> = () => {
  return (
    <div className="todo-wrapper">
      <div className="todo-container">todo</div>
    </div>
  );
};

export default Todo;
// export default class Todo extends Component {
//   render() {
//     return (
//       // <div className="todo-container">
//       //   <div className="todo-wrap">
//       //     <div className="todo-header">TODO页面</div>
//       //   </div>
//       // </div>
//       <div>TODO</div>
//     );
//   }
// }
