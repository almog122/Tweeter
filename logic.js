const Tweeter = function () {
  let _postIdCounter = 3;

  let _commentIdCounter = 7;

  const _posts = [ //Add new mock Data file ! also we can add a function to add the counters
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
 
  const getPosts = () => _posts;

  const findPostIndex = function (postID) {
    for (let postIndex in _posts) {
      let currentPost = _posts[postIndex];

      if (currentPost.id === postID) {
        return postIndex;
      }
    }

    return -1;
  };

  const isTextEmpty = function(text){  
    return (text == "")
  }

  const addPost = function (text) {

    if(isTextEmpty(text)){
      return
    }

    let newPost = {
      text: text,
      id: `p${_postIdCounter++}`,
      comments: []
    };

    _posts.push(newPost);
  };

  const addComment = function (text, postID) {
    
    if(isTextEmpty(text)){
      return
    }

    let newComment = {
      id: `c${_commentIdCounter++}`,
      text : text
    };
    
    let postIndex = findPostIndex(postID);
    
    _posts[postIndex].comments.push(newComment);
  }
  
  const removePost = function (postID) {
    let postIndex = findPostIndex(postID);

    _posts.splice(postIndex, 1);
  };

  const removeComment = function (postID, commentID) {

    let postIndex = findPostIndex(postID);

    for (let commentIndex in _posts[postIndex].comments) { //add a test for -1
      let currentComment = _posts[postIndex].comments[commentIndex];

      if (currentComment.id === commentID) {
        _posts[postIndex].comments.splice(commentIndex, 1);
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
