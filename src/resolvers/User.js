// const User = {
//     posts(parent, args, { db }, info) {
//         return db.posts.filter((post) => {
//             return post.author === parent.id
//         })
//     },
//     comments(parent, args, { db }, info) {
//         return db.comments.filter((comment) => {
//             return comment.author === parent.id
//         })
//     }
// }
const User = {};

export { User as default };
