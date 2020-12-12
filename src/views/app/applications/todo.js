/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  ButtonDropdown,
  CustomInput,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import IntlMessages from '../../../helpers/IntlMessages';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import {
  getTodoList,
  getTodoListWithOrder,
  getTodoListSearch,
  selectedTodoItemsChange,
} from '../../../redux/actions';
const getIndex = (value, arr, prop) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
};

const TodoApp = ({
  match,
  intl,
  todoItems,
  searchKeyword,
  loading,
  orderColumn,
  orderColumns,
  selectedItems,
  getTodoListAction,
  getTodoListWithOrderAction,
  getTodoListSearchAction,
  selectedTodoItemsChangeAction,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const [lastChecked, setLastChecked] = useState(null);

  useEffect(() => {
    document.body.classList.add('right-menu');
    getTodoListAction();

    return () => {
      document.body.classList.remove('right-menu');
    };
  }, [getTodoListAction]);

  const handleCheckChange = (event, id) => {
    if (lastChecked == null) {
      setLastChecked(id);
    }

    let selectedList = Object.assign([], selectedItems);
    if (selectedList.includes(id)) {
      selectedList = selectedList.filter((x) => x !== id);
    } else {
      selectedList.push(id);
    }
    selectedTodoItemsChangeAction(selectedList);

    if (event.shiftKey) {
      let items = todoItems;
      const start = getIndex(id, items, 'id');
      const end = getIndex(lastChecked, items, 'id');
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedList.push(
        ...items.map((item) => {
          return item.id;
        })
      );
      selectedList = Array.from(new Set(selectedList));
      selectedTodoItemsChangeAction(selectedList);
    }
  };

  const handleChangeSelectAll = () => {
    if (loading) {
      if (selectedItems.length >= todoItems.length) {
        selectedTodoItemsChangeAction([]);
      } else {
        selectedTodoItemsChangeAction(todoItems.map((x) => x.id));
      }
    }
  };

  const { messages } = intl;

  return (
    <>
      <Row className="app-row survey-app"></Row>
      {loading && <div />}
      <div />
    </>
  );
};

const mapStateToProps = ({ todoApp }) => {
  const {
    todoItems,
    searchKeyword,
    loading,
    orderColumn,
    orderColumns,
    selectedItems,
  } = todoApp;
  return {
    todoItems,
    searchKeyword,
    loading,
    orderColumn,
    orderColumns,
    selectedItems,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    getTodoListAction: getTodoList,
    getTodoListWithOrderAction: getTodoListWithOrder,
    getTodoListSearchAction: getTodoListSearch,
    selectedTodoItemsChangeAction: selectedTodoItemsChange,
  })(TodoApp)
);
