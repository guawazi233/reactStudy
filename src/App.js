import React,{ useState, useRef} from "react";
import logo from "./logo.svg";
import "./App.css";
import NewCard from "./components/NewCard";
import TodoCard from "./components/TodoCard";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const cardRef = useRef(null);
  const [todoList, setTodoList] = useState([
    { title: "开发任务-1", status: "23-04-01 08:08" },
    { title: "开发任务-2", status: "23-04-02 08:08" },
    { title: "开发任务-3", status: "23-04-03 08:08" },
    { title: "开发任务-4", status: "23-04-04 08:08" },
  ]);
  
  const [ongoingList, setOngoingList] = useState([
    { title: "测试任务-1", status: "23-04-01 08:08" },
    { title: "测试任务-2", status: "23-04-02 08:08" },
  ]);
  
  const [doneList, setDoneList] = useState([
    { title: "摸鱼任务-1", status: "23-04-01 08:08" },
    { title: "摸鱼任务-2", status: "23-04-02 08:08" },
  ]);

  const handleAdd = async() => {
    await setShowAdd(true);   //窗口可见异步，渲染完后成current才有值
    //聚焦输入框
    cardRef?.current && cardRef.current.focus();
  };
  const handleSubmit = (title) => {
    setTodoList(origin => [...origin, {title, status: new Date().toString()}])
    setShowAdd(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>我的看板</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="todo-board">
        <section className="todo-column column-todo">
          <h2>
            待处理
            <button onClick={handleAdd} disabled={showAdd}>
              &#8853; 添加新卡片
            </button>
          </h2>
          <ul>
            {showAdd && <NewCard onSubmit={handleSubmit} ref={cardRef}/>}
            {todoList?.map((props) => (
              <TodoCard {...props} />
            ))}
          </ul>
        </section>
        <section className="todo-column column-ongoing">
          <h2>进行中</h2>
          <ul>
            {ongoingList?.map((props) => (
              <TodoCard {...props} />
            ))}
          </ul>
        </section>
        <section className="todo-column column-done">
          <h2>已完成</h2>
          <ul>
            {doneList?.map((props) => (
              <TodoCard {...props} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
