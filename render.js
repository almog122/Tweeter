
const postsContainer = $('#posts');

const Renderer = function () {

    const renderPosts  = function(posts){

        postsContainer.empty();

        for(let post of posts){
            postsContainer.append(`<div id=${post.id} class=post></div>`)

            let postIdContainer = $(`#${post.id}`);
            postIdContainer.append(`<div class=delete-post> X </div>`)
            postIdContainer.append(`<h1 class=post-text> ${post.text} </h1>`)
            postIdContainer.append(`<input class=comment-input type=text>`)
            postIdContainer.append(`<button class=add-comment> Comment </button>`)

            for(let comment of post.comments){
                postIdContainer.append(`<div id="${comment.id}" class=comments > ${comment.text} </div>`)
                $(`#${comment.id}`).append(`<div class=delete-comment> X </div>`)
            }
        }
    }

    return{
        renderPosts : renderPosts 
    };
}