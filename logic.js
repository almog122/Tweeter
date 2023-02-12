const Tweeter = function () {
  let postIdCounter = 3;

  let commentIdCounter = 7;

  let posts = [
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

  //getters
  getPosts = () => posts;

  //adders
  addPost = function (text) {
    let newPost = [];
    let newPostId = `p${postIdCounter}`;
    postIdCounter++;

    newPost["text"] = text;
    newPost["id"] = newPostId;
    newPost["comments"] = [];

    posts.push(newPost);
  };

  addComment = function (text, postID) {
    let newComment = [];
    let newCommentId = `c${commentIdCounter}`;
    commentIdCounter++;

    newComment["id"] = newCommentId;
    newComment["text"] = text;

    for (let post of posts) {
      if (post.id === postID) {
        post.comments.push(newComment);
      }
    }
  };

  //removers
  removePost = function (postID) {
    for (let postIndex in posts) {
      let currentPost = posts[postIndex];

      if (currentPost.id === postID) {
        posts.splice(postIndex, 1);
      }
    }
  };

  removeComment = function (postID, commentID) {
    for (let postIndex in posts) {
      let currentPost = posts[postIndex];

      if (currentPost.id === postID) {
        for (let commentIndex in currentPost.comments) {
          let currentComment = currentPost.comments[commentIndex];

          if (currentComment.id === commentID) {
            currentPost.comments.splice(commentIndex, 1);
          }
        }
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

// const tweeter = Tweeter();
