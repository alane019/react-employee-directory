import React from "react";

function SortForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Sort:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="sort"
          type="text"
          className="form-control"
          placeholder="Sort by data type"
          id="sort"
        />
        <button onClick={props.handleFormSubmit} className="btn">
          Sort
        </button>
      </div>
    </form>
  );
}

export default SortForm;
