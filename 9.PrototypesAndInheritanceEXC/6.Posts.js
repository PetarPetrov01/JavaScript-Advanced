function solution() {
    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)

            this.likes = +likes
            this.dislikes = +dislikes
            this.comments = []
        }

        addComment(txt) {
            this.comments.push(txt)
        }

        toString() {
            let output = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`

            if (this.comments.length !== 0) {
                output += `\nComments:`
                for (let comment of this.comments) {
                    output += `\n * ${comment}`
                }
            }

            return output
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = +views
        }
        view() {
            this.views++
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());


