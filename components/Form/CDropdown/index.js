import React, { useState } from 'react';
import { Box } from '@/style';

// const categories = [
//   "Category 1",
//   "Category 2",
//   "Category 3",
//   // Add more categories as needed
// ];

function CategoryDropdown({
  selectedCategory,
  onCategoryChange,
  categories,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    toggleDropdown();
  };

  return (
    <>
      <Box
        className={`form-control cursor-pointer ${error ? 'is-invalid' : ''}`}
      >
        <Box className="" onClick={toggleDropdown}>
          {selectedCategory || 'Select a category'}
        </Box>
      </Box>
      {isOpen && (
        <ul className="list-group form-control p-0 mt-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="list-group-item cursor-pointer border-none list-group-item-action"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </>
  );
}

export default CategoryDropdown;
