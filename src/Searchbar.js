import React from "react";

function Searchbar(props) {
  return (
    <form>
      <div class="form-group">
        <input
          placeholder="Search..."
          value={props.filterText}
          name="filterText"
          onChange={props.onChange}
          className="form-control"
        />
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          checked={props.freeOnly}
          name="freeOnly"
          onChange={props.onChange}
          className="form-check-input"
          id="checkboxfree"
        />
        <label class="form-check-label" for="checkboxfree">
          Only show free courses
        </label>
      </div>
    </form>
  );
}

export default Searchbar;
