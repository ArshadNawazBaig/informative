'use client';
import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../Form/CInput';
import { ModalWrapper } from './style';
import { CloseIcon, SearchIcon } from '../Icons';
import useSWR from 'swr';
import { Box } from '@/style';
import Para from '../Para';
import Image from 'next/legacy/image';
import Button from '../Button';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Unsplash = () => {
  const searchInputRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [copySuccess, setCopySuccess] = useState(null);
  const { data: images, isLoading } = useSWR(
    debouncedSearchValue
      ? `https://api.unsplash.com/search/photos?page=1&query=${debouncedSearchValue}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      : null,
    fetcher
  );

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(text);
      })
      .catch((error) => {
        console.error('Copy to clipboard failed: ', error);
        setCopySuccess(null);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    const modalElement = document.getElementById('unsplashModal');
    modalElement.addEventListener('shown.bs.modal', () => {
      searchInputRef.current.focus();
    });
    return () => {
      modalElement.removeEventListener('shown.bs.modal', () => {
        searchInputRef.current.focus();
      });
    };
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.toLocaleLowerCase());
  };
  return (
    <ModalWrapper>
      <div className="modal fade modal-lg" id="unsplashModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <SearchIcon />
              <CustomInput
                className="rounded border-none w-100"
                placeholder="Search free images here"
                style={{ height: '40px !important' }}
                value={searchValue}
                onChange={handleSearchInputChange}
                ref={searchInputRef}
              />
              <CloseIcon
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close-icon cursor-ponter"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="modal-body">
              {!isLoading && images?.results?.length <= 0 && (
                <Para className="text-center">No images found</Para>
              )}
              {isLoading && (
                <Box className="text-center">
                  <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </Box>
              )}
              <Box className="row row-gap-4">
                {images?.results &&
                  images?.results?.map((image) => (
                    <Box className="col-6 col-md-4" key={image?.id}>
                      <Box className="position-relative unsplash-image-wrapper">
                        <Image
                          alt={image?.alt_description}
                          src={image?.urls?.regular}
                          layout="fill"
                        />
                        <Button
                          onClick={() => copyToClipboard(image?.urls?.regular)}
                          className="position-absolute px-2 rounded-3 py-1"
                          style={{ top: '5px', right: '5px' }}
                        >
                          {copySuccess === image?.urls?.regular ? (
                            <span>Copied!</span>
                          ) : (
                            'Copy'
                          )}
                        </Button>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Unsplash;
