const tweeter = Tweeter()
const renderer = Renderer()

const renderSite = () => renderer.renderPosts(tweeter.getPosts())
renderSite()

$('#post').on('click' , function(){

    let postText = $('#input').val();
    tweeter.addPost(postText);

    renderSite()
})

$('body').on('click' ,'.delete-post' ,function(){

    let postId = $(this).closest('.post').data().id
    tweeter.removePost(postId)

    renderSite()
})

$('body').on('click' ,'.add-comment' ,function(){

    let postId = $(this).closest('.post').data().id
    let postText = $(this).siblings('.comment-input').val();
    tweeter.addComment(postText , postId)

    renderSite()
})

$('body').on('click' ,'.delete-comment' ,function(){

    let postId = $(this).closest('.post').data().id
    let commentId = $(this).closest('.comments').data().id
    tweeter.removeComment(postId , commentId)

    renderSite()
})