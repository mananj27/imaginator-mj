// import React from 'react'
// import { useState, useEffect } from 'react'
// import { getDocs, collection } from 'firebase/firestore';
// import { Auth, db, storage } from '../firebase_config';
// import DisplayPost from './DisplayPost';
// import { CircularWithValueLabel } from "../loadinganimation";
// import FormField from "./FormField"


// const Home = () => {
//   const [posts, setPost] = useState([])
//   const [loading, setLoading] = useState(true);
//   const postRef = collection(db, "posts")
//   const [searchText, setSearchText] = useState('');
//   const [searchTimeout, setSearchTimeout] = useState(null);
//   const [searchedResults, setSearchedResults] = useState(null);
//   // const [user] = useAuthState(Auth);

//   const handleSearchChange = (e) => {
//     clearTimeout(searchTimeout);
//     setSearchText(e.target.value);

//     setSearchTimeout(
//       setTimeout(() => {
//         const searchResult = posts.filter((item) => item.user.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
//         setSearchedResults(searchResult);
//       }, 500),
//     );
//   };

//   useEffect(() => {
//     setLoading(true)
//     const getPost = () => {
//       getDocs(postRef)
//         .then(data => {
//           setPost(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
//           setLoading(false)
//         })
//     }
//     getPost()
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
//   return (
//     <section className="max-w-7xl mx-30px-auto">
//       <div>
//         <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
//         <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
//       </div>

//       <div className="mt-4">
//         <FormField
//           labelName="Search posts"
//           type="text"
//           name="text"
//           placeholder="Search something..."
//           value={searchText}
//           handleChange={handleSearchChange}
//         />
//       </div>

//       <div className="mt-10">
//         {loading ? (
//           <div className="flex justify-center items-center">
//             <CircularWithValueLabel />
//           </div>
//         ) : (
//           <>
//             {searchText && (
//               <h2 className="font-medium text-[#666e75] text-xl mb-3">
//                 Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
//               </h2>
//             )}
//             <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
//               {searchText && searchedResults ? (
//                 searchedResults.map(post=>(
//                 <DisplayPost
//                   post={post}
//                 />
//                 ))
//               ) : (posts.map(post=>(
//                 <DisplayPost
//                   post={post}
//                 />
//                 ))
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase_config';
import DisplayPost from './DisplayPost';
//import { CircularProgress } from '../loadinganimation';
import FormField from './FormField';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const postRef = collection(db, 'posts');
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = posts.filter(
          (item) =>
            item.user.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  useEffect(() => {
    setLoading(true);
    const getPost = () => {
      getDocs(postRef)
        .then((data) => {
          setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error getting posts: ', error);
          setLoading(false);
        });
    };
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="font-extrabold text-4xl text-gray-800">The Community Showcase</h1>
        <p className="mt-2 text-gray-600 text-lg max-w-lg">
          Browse through a collection of imaginative and visually stunning images generated by DALL-E AI
        </p>
      </div>

      <div className="mt-4">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-gray-600 text-xl mb-3">
                Showing Results for <span className="text-gray-800">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {searchText && searchedResults ? (
                searchedResults.map((post) => (
                  <DisplayPost key={post.id} post={post} />
                ))
              ) : (
                posts.map((post) => (
                  <DisplayPost key={post.id} post={post} />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
