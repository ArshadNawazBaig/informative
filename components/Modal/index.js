'use client';
import React, { useEffect, useState } from 'react';
import CustomInput from '../Form/CInput';
import { ModalWrapper } from './style';
import { SearchIcon } from '../Icons';
import FeaturedCardList from '../FeaturedCardList';
import useSWR from 'swr';
import FeaturedCard from '../FeaturedCard';
import { Box } from '@/style';
import Para from '../Para';
import { usePathname } from 'next/navigation';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Modal = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <ModalWrapper>
      <div
        className={`modal fade ${isOpen ? 'show' : 'hide'}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
