// 'use client';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// // import { useRouter } from 'next/router';

// function useScrollToTopOnRouteChange() {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = () => {
//       // window.scrollTo(0, 0);
//     };

//     router.events.on('routeChangeComplete', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);

//   return null;
// }

// export default useScrollToTopOnRouteChange;
