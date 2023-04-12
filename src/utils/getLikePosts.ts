const getLikePosts = () => {
  let likePosts = [];

  const storedLikePosts = window.localStorage.getItem('likePosts');
  if (storedLikePosts === null) {
    likePosts = [];
  } else {
    likePosts = JSON.parse(storedLikePosts);
  }

  return likePosts;
};

export default getLikePosts;
