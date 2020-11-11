import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Filter = (props) => {
  const filterHandler = (word) => {
    props.onFilterBooks(word);
  };
  return (
    <input
      type="text"
      placeholder="Filter by Title"
      value={props.filteredWord}
      onChange={(e) => filterHandler(e.target.value)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    filteredWord: state.filteredWord,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterBooks: (word) => {
      dispatch(actions.filterBooks(word));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
