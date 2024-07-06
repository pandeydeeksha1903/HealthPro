document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postsContainer = document.querySelector('.posts');

    postButton.addEventListener('click', () => {
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').files[0];

        if (postText || postImage) {
            const post = document.createElement('div');
            post.classList.add('post');

            if (postText) {
                const postTextElement = document.createElement('div');
                postTextElement.classList.add('post-text');
                postTextElement.textContent = postText;
                post.appendChild(postTextElement);
            }

            if (postImage) {
                const postImageElement = document.createElement('img');
                postImageElement.classList.add('post-image');
                postImageElement.src = URL.createObjectURL(postImage);
                postImageElement.alt = 'Post Image';
                post.appendChild(postImageElement);
            }

            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');

            const likeButton = document.createElement('button');
            likeButton.classList.add('like-button');
            likeButton.textContent = 'Like';
            postActions.appendChild(likeButton);

            const likeCount = document.createElement('span');
            likeCount.classList.add('like-count');
            likeCount.textContent = '0 likes';
            postActions.appendChild(likeCount);

            likeButton.addEventListener('click', () => {
                const currentLikes = parseInt(likeCount.textContent.split(' ')[0]);
                likeCount.textContent = `${currentLikes + 1} likes`;
            });

            const commentButton = document.createElement('button');
            commentButton.classList.add('comment-button');
            commentButton.textContent = 'Comment';
            postActions.appendChild(commentButton);

            post.appendChild(postActions);

            const commentsContainer = document.createElement('div');
            commentsContainer.classList.add('comments');
            post.appendChild(commentsContainer);

            const commentForm = document.createElement('div');
            commentForm.classList.add('comment-form');

            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.placeholder = 'Write a comment...';
            commentForm.appendChild(commentInput);

            const addCommentButton = document.createElement('button');
            addCommentButton.classList.add('add-comment-button');
            addCommentButton.textContent = 'Add Comment';
            commentForm.appendChild(addCommentButton);

            addCommentButton.addEventListener('click', () => {
                const commentText = commentInput.value;
                if (commentText) {
                    const comment = document.createElement('div');
                    comment.classList.add('comment');
                    comment.textContent = commentText;
                    commentsContainer.appendChild(comment);
                    commentInput.value = '';
                }
            });

            post.appendChild(commentForm);

            postsContainer.appendChild(post);

            document.getElementById('post-text').value = '';
            document.getElementById('post-image').value = '';
        }
    });
});
