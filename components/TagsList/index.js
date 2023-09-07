import React from 'react';
import TagChip from '../TagChip';
import { Box } from '@/style';

const TagsList = () => {
  const tags = [
    'Art',
    'Article',
    'Audio',
    'Drink',
    'Fashion',
    'featured 1',
    'featured 2',
    'featured 3',
    'featured 4',
    'featured 5',
    'featured 6',
    'featured 7',
    'Flower',
    'Food',
    'Habit',
    'Home',
  ];
  return (
    <Box className="d-flex gap-1 flex-wrap">
      {tags.map((tag) => (
        <TagChip key={tag} tag={tag} />
      ))}
    </Box>
  );
};

export default TagsList;
