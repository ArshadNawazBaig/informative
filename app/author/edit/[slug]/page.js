'use client';
import Loadingpage from '@/app/loading';
import Divider from '@/components/Divider';
import Heading from '@/components/Heading';
import SocialFollow from '@/components/SocialFollow';
import UserProfileCard from '@/components/UserProfileCard';
import { Box } from '@/style';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';

const storage = getStorage(app);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditAuthorPage = ({ params }) => {
  const { slug } = params;
  const router = useRouter();
  const [cover, setCover] = useState('');
  const [progress, setProgress] = useState(0);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [profile, setProfile] = useState('');

  const handleUpload = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleProfileUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const { data, status } = useSession();
  const { data: author, mutate } = useSWR(`/api/authors/${slug}`, fetcher);

  useEffect(() => {
    const uploadCover = () => {
      const name = new Date().getTime() + featuredImage.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, featuredImage);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setCover(downloadURL);
            updateUser({ coverImage: downloadURL });
          });
        }
      );
    };
    featuredImage && uploadCover();
  }, [featuredImage]);

  useEffect(() => {
    const uploadProfile = () => {
      const name = new Date().getTime() + profileImage.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, profileImage);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfile(downloadURL);
            updateUser({ image: downloadURL });
          });
        }
      );
    };
    profileImage && uploadProfile();
  }, [profileImage]);

  const updateUser = async (data) => {
    const response = await fetch('/api/authors', {
      method: 'PUT',
      body: JSON.stringify({ ...data }),
    });
    console.log(response, 'author');
  };

  if (status === 'loading') {
    return <Loadingpage />;
  }
  if (author) {
    if (status === 'unthenticated' || author?.email != data?.user.email) {
      router.push('/');
    }
  }

  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <UserProfileCard
            coverImage={
              cover ||
              author?.coverImage ||
              'https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/mihai-stefan-658815-unsplash-1000x600.jpg'
            }
            avatarImage={profile || author?.image}
            creator={author?.name}
            description={author?.description}
            size="full"
            edit
            onChange={handleUpload}
            onChangeProfile={handleProfileUpload}
          />
        </Box>
        <Box className="col-md-4">
          {author?.socialLinks?.length > 0 && (
            <>
              <Heading title="Follow Me" size="md"></Heading>
              <Divider className="mb-3" />
            </>
          )}
          <SocialFollow socialLinks={author?.socialLinks} className="mb-4" />
        </Box>
      </Box>
    </Box>
  );
};

export default EditAuthorPage;
