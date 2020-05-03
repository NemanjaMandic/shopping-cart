import React from "react";
import util from "../../util";
const Filter = (props) => {
  const { count, size, sort, changeSize, changeSort } = props;

  return (
    <div className="row">
      <div className="col-md-4">
        <label>
          Order by
          <select className="form-control" value={sort} onChange={changeSort}>
            <option value="">Select</option>
            <option value="lowest">Lowest to highest</option>
            <option value="highest">Highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
      <label>
          Filter size
          <select className="form-control" value={size} onChange={changeSize}>
            <option value="">ALL</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Filter;
