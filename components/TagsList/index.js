import React from 'react';
import TagChip from '../TagChip';
import { Box } from '@/style';
import Para from '../Para';

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/tags`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
};

const TagsList = async ({ page }) => {
  const tags = await getData();
  // const tags = [
  //   'Art',
  //   'Article',
  //   'Audio',
  //   'Drink',
  //   'Fashion',
  //   'featured 1',
  //   'featured 2',
  //   'featured 3',
  //   'featured 4',
  //   'featured 5',
  //   'featured 6',
  //   'featured 7',
  //   'Flower',
  //   'Food',
  //   'Habit',
  //   'Home',
  // ];
  return (
    <Box className="d-flex gap-1 flex-wrap">
      {tags?.length <= 0 && <Para>No tags</Para>}
      {tags?.length > 0 &&
        tags?.map((tag) => <TagChip key={tag} tag={tag} page={page} />)}
    </Box>
  );
};

export default TagsList;
