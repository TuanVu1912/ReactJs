import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList/Index';

ListPage.propTypes = {};

function ListPage(props) {
  const initalTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 5,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initalTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    const newTodoList = [...todoList];
    console.log(newTodoList);
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  function handleShowAll(filter) {
    // setFilterStatus('all');
    const newParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(newParams),
    });
  }
  function handleShowNew(filter) {
    // setFilterStatus('new');
    const newParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(newParams),
    });
  }
  function handleShowCompleted(filter) {
    // setFilterStatus('completed');
    const newParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(newParams),
    });
  }
  const renderStatus = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);

  const handleTodoFormSubmit = (value) => {
    const newTodo = {
      id: Math.random() * 10,
      title: value.title,
      status: 'new',
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <h3>Todo List</h3>

      <TodoList todoList={renderStatus} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAll}>showAll</button>
        <button onClick={handleShowNew}>showNew</button>
        <button onClick={handleShowCompleted}>showCompleted</button>
      </div>
    </div>
  );
}

export default ListPage;
