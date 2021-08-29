import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list,setList] = useState([])
  const [showList,setShowList] = useState([])
  const [selected,setSelected] = useState({name:"all"})

  useEffect(() => {
    
    return () => {
      setShowList(list)
    }
  }, [list,showList])
  function handleEnter(e) {
    if (e.charCode === 13) {
      setList((prev)=> [...prev,{value: e.target.value,completed:false}])
      
  }}

  function selection(e) {
    setSelected({name:e.target.name})
    if(selected.name == "all"){
      setShowList(list)
    }else if( selected.name == "active"){
      setShowList(list.filter(el=>el.completed==false))
    }else {
      setShowList(list.filter(el=>el.completed==true))
    }
  }

  function deletion(e) {
    list.splice(e.target.name,1)
    setList(list)
  }

  function changeCompletion(e) {
    list[e.target.name].completed = !list[e.target.name].completed
    setList(list)
  }

  function clearCompleted(){
      setList(list.filter(el=>el.completed==false))
  }
  
  return (
  <section className="todoapp">
    <header className="header">
		  <h1>todos</h1>
		  <form onSubmit={e=> e.preventDefault()}>
		  	<input className="new-todo" placeholder="What needs to be done?" autofocus onKeyPress={handleEnter}/>
		  </form>
  	</header>
    <section className="main">
		  <input className="toggle-all" type="checkbox"/>
		  <label for="toggle-all">
			  Mark all as complete
		  </label>

		  <ul class="todo-list">
        {showList.map((el,key)=>{
          return <li  class={el.completed && "completed"}>
				    <div className="view" key={key}>
					    <input className="toggle" type="checkbox" name={key} onClick={changeCompletion}/>
					    <label>{el.value}</label>
					    <button class="destroy" name={key} onClick={deletion}></button>
				    </div>
			    </li>
      })}
			
		  </ul>
	  </section>

    <footer className="footer">

		  <span className="todo-count">
			  <strong>{list.length} </strong>
			    items left
		  </span>

		  <ul className="filters">
			  <li>
				  <a className={selected.name=="all" && "selected"} href="#" onClick={selection} name="all">All</a>
			  </li>
			  <li>
				  <a className={selected.name=="active" && "selected"} href="#" onClick={selection} name="active">Active</a>
			  </li>
			  <li>
				  <a className={selected.name=="completed" && "selected"} href="#" onClick={selection} name="completed">Completed</a>
			  </li>
		  </ul>

		  <button className="clear-completed" onClick={clearCompleted}>
			  Clear completed
		  </button>
	  </footer>

  </section>
  );
}

export default App;
