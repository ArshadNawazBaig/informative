import React, { useState } from 'react';
import { Box } from '@/style';
import { DropdownWrapper } from './style';

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
      <DropdownWrapper
        className={`form-control d-flex align-items-center w-100 cursor-pointer p-0 ${
          error ? 'is-invalid' : ''
        }`}
      >
        <Box
          className="w-100 h-100 d-flex align-items-center main"
          onClick={toggleDropdown}
        >
          {selectedCategory || 'Select a category'}
        </Box>
      </DropdownWrapper>
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
