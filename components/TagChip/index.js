import React from 'react';
import { TagChipWrapper } from './style';

const TagChip = ({ className, tag }) => {
  return (
    <TagChipWrapper href={`/tag/${tag}`} className={className}>
      {tag}
    </TagChipWrapper>
  );
};

export default TagChip;
