import React from 'react';

const Filter = ({ filters, setFilters, options }) => {
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  return (
    <div className="filter-section">
      <h2>Bộ lọc</h2>
      {Object.entries(options).map(([filterName, values]) => (
        <div key={filterName} className="filter-group">
          <label>
            {filterName === 'priceRange' ? 'Giá' : 
             filterName === 'brand' ? 'Thương hiệu' :
             filterName === 'frameShape' ? 'Kiểu dáng' :
             filterName === 'material' ? 'Chất liệu' :
             filterName === 'style' ? 'Phong cách' :
             filterName === 'color' ? 'Màu sắc' : 
             filterName}:
          </label>
          <select
            value={filters[filterName]}
            onChange={(e) => handleFilterChange(filterName, e.target.value)}
          >
            {values.map(value => (
              <option key={value} value={value}>
                {value === 'All' ? 'Tất cả' : value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filter;