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
import CustomInput from '@/components/Form/CInput';
import Button from '@/components/Button';

const storage = getStorage(app);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditAuthorPage = ({ params }) => {
  const { slug } = params;
  const { data: author, mutate } = useSWR(`/api/authors/${slug}`, fetcher);
  const router = useRouter();
  const [cover, setCover] = useState('');
  const [progress, setProgress] = useState(0);
  const [profileProgress, setProfileProgress] = useState(0);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profile, setProfile] = useState('');
  const [desc, setDesc] = useState('');
  const [descEdit, setDescEdit] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const [updatedSocialLinks, setUpdatedSocialLinks] = useState([]);
  const predefinedSocialLinks = [
    'facebook',
    'instagram',
    'twitter',
    'whatsapp',
    'linkedin',
  ];

  const handleSocialLinkChange = (platform, url) => {
    const updatedLinks = updatedSocialLinks.map((social) =>
      social.platform === platform ? { ...social, url } : social
    );
    setUpdatedSocialLinks(updatedLinks);
  };

  const handleSaveChanges = async () => {
    const mergedSocialLinks = predefinedSocialLinks.reduce(
      (uniqueLinks, platform) => {
        const existingLink = updatedSocialLinks.find(
          (link) => link.platform === platform
        );
        const url = existingLink ? existingLink.url : '';
        uniqueLinks.push({ platform, url, userEmail: author?.email });
        return uniqueLinks;
      },
      []
    );

    await updateLinks({
      socialLinks: mergedSocialLinks,
      userEmail: author?.email,
    });
  };

  const handleUpload = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleProfileUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const onDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleDescUpdate = async () => {
    await updateUser({ description: desc });
  };

  useEffect(() => {
    setDesc(author?.description);

    if (author?.socialLinks) {
      const updatedLinks = predefinedSocialLinks.map((platform) => {
        const existingLink = author.socialLinks.find(
          (link) => link.platform === platform.toLowerCase()
        );
        return {
          platform,
          url: existingLink?.url || '',
        };
      });
      setUpdatedSocialLinks(updatedLinks);
    }
  }, [author]);

  const { data, status } = useSession();

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
          setProfileProgress(progress);
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
    if (response.status === 200) {
      mutate();
      setDescEdit(false);
    }
  };

  const updateLinks = async (data) => {
    setSocialLoading(true);
    const response = await fetch('/api/authors/social', {
      method: 'PUT',
      body: JSON.stringify({ ...data }),
    });
    if (response.status === 200) {
      mutate();
      setSocialLoading(false);
    }
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
        <Box className="col-12 mb-4">
          <UserProfileCard
            coverImage={cover || author?.coverImage}
            avatarImage={profile || author?.image}
            creator={author?.name}
            description={author?.description}
            size="full"
            edit
            onChange={handleUpload}
            onChangeProfile={handleProfileUpload}
            desc={desc}
            onDescChange={onDescChange}
            onUpdate={handleDescUpdate}
            descEdit={descEdit}
            setDescEdit={setDescEdit}
            progress={progress}
            profileProgress={profileProgress}
            verified={author?.verified}
          />
        </Box>
        <Box className="col-md-12">
          <Heading title="Social Links" size="md"></Heading>
          <Divider className="mb-3" />
        </Box>
        {predefinedSocialLinks.map((platform) => {
          const social = updatedSocialLinks.find(
            (link) => link.platform === platform
          );
          return (
            <Box className="col-md-4 mb-2" key={platform}>
              <label className="text-capitalize">{platform}</label>
              <CustomInput
                name={platform}
                value={social?.url || ''}
                onChange={(e) =>
                  handleSocialLinkChange(platform, e.target.value)
                }
                placeholder="URL"
              />
            </Box>
          );
        })}
        <Box className="col-md-12 mt-3">
          <Button disabled={socialLoading} onClick={handleSaveChanges}>
            {socialLoading ? 'Loading...' : 'Save Social Links'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditAuthorPage;
