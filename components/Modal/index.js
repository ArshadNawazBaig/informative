'use client';
import React, { useEffect, useState } from 'react';
import CustomInput from '../Form/CInput';
import { ModalWrapper } from './style';
import { SearchIcon } from '../Icons';
import useSWR from 'swr';
import FeaturedCard from '../FeaturedCard';
import { Box } from '@/style';
import Para from '../Para';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Modal = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const { data, isLoading, mutate } = useSWR(
    debouncedSearchValue
      ? `/api/posts/search?title=${debouncedSearchValue}`
      : null,
    fetcher
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.toLocaleLowerCase());
  };
  return (
    <ModalWrapper>
      <div className={`modal fade `} id="exampleModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <SearchIcon />
              <CustomInput
                className="rounded border-none w-100"
                placeholder="Search Articles"
                style={{ height: '40px !important' }}
                value={searchValue}
                onChange={handleSearchInputChange}
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {!isLoading && data?.posts.length <= 0 && (
                <Para className="text-center">No posts found</Para>
              )}
              {isLoading && (
                <Box className="text-center">
                  <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </Box>
              )}
              {data?.posts?.length > 0 &&
                data?.posts
                  ?.slice(0, 3)
                  .map(({ author, title, img, slug, className }) => (
                    <FeaturedCard
                      author={author}
                      title={title}
                      img={img}
                      className={className}
                      slug={slug}
                      len={60}
                      key={slug}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  ))}
              {data?.posts?.length > 3 && (
                <Box
                  className="text-center mt-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <Link
                    href={`/blog?search=${searchValue}`}
                    className="fw-semibold text-decoration-none"
                  >
                    See {data?.count - 3} more results
                  </Link>
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
