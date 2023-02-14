
const Renderer = function () {

    const postsContainer = $('#posts');

    const renderPosts  = function(posts){

        postsContainer.empty();

        for(let post of posts){
            postsContainer.append(`<div data-id=${post.id} class=post></div>`)

            let postIdContainer = $(`[data-id=${post.id}]`);
            postIdContainer.append(`<div class=delete-post> X </div>`)
            postIdContainer.append(`<h1 class=post-text> ${post.text} </h1>`)
            
            for(let comment of post.comments){
                postIdContainer.append(`<div data-id="${comment.id}" class=comments > ${comment.text} </div>`)
                $(`[data-id=${comment.id}]`).append(`<div class=delete-comment> X </div>`)
            }

            postIdContainer.append(`<input placeholder="Got somthing to say?" class=comment-input type=text>`)
            postIdContainer.append(`<button class=add-comment> Comment </button>`)
        }
    }

    return{
        renderPosts : renderPosts 
    };
}