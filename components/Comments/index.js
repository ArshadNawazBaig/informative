'use client';
import React, { useState } from 'react';
import { CommentsWrapper } from './style';
import { Box } from '@/style';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Para from '../Para';
import Heading from '../Heading';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Comments = ({ postSlug }) => {
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const { data, isLoading, mutate } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    setLoading(true);
    if (desc.trim()) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ desc, postSlug }),
      });
    }
    mutate();
    setLoading(false);
    setDesc('');
  };
  return (
    <CommentsWrapper>
      <Heading title="Comments" size="md" className="mb-4"></Heading>
      {status === 'authenticated' ? (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your comment here..."
            aria-label="Type your comment here..."
            aria-describedby="button-addon2"
            onChange={(e) => setDesc(e.target.value)}
            value={desc || ''}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => handleSubmit()}
            disabled={loading}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Loading' : 'Comment'}
          </button>
        </div>
      ) : (
        <Para>
          <Link href="/login" className="fw-semibold">
            Signin
          </Link>{' '}
          to add your comment
        </Para>
      )}
      {data?.length > 0 &&
        data.map(({ author, createdAt, desc, id }) => (
          <Box className="mx-3 mt-4" key={id}>
            <Box className="d-flex gap-3">
              <Link href={`/author/${author.id}`}>
                <Box className="avatar">
                  <Image alt="test" src={author.image} layout="fill" />
                </Box>
              </Link>
              <Box className="text-start">
                <Box className="text-capitalize">
                  <Link
                    href={`/author/${author.id}`}
                    className="text-decoration-none text-capitalize fw-semibold"
                  >
                    {author.name}
                  </Link>
                </Box>
                <Box className="d-flex date">
                  <i className="ri-calendar-2-line text-capitalize"></i>
                  {createdAt.substring(0, 10)}
                </Box>

                <Para className="mt-2">{desc}</Para>
              </Box>
            </Box>
          </Box>
        ))}
      {!data?.length && status === 'authenticated' && (
        <Para className="text-center fw-semibold mt-4">
          No comments yet, be the first one!
        </Para>
      )}
    </CommentsWrapper>
  );
};

export default Comments;
