import React from 'react';
import { TagChipWrapper } from './style';

const TagChip = ({ className, tag }) => {
  return (
    <TagChipWrapper
      href={`/blog?tag=${tag.toLowerCase()}`}
      className={className}
    >
      {tag}
    </TagChipWrapper>
  );
};

export default TagChip;
