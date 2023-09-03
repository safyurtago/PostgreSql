const Like = require("./Likes.model");
const Post = require("./Posts.model");
const User = require("./Users.model");
const View = require("./Views.model");
const Comment = require("./Comments.model");

User.hasMany(Post, {foreignKey: "user_id"});
Post.belongsTo(User, {foreignKey: "user_id"});

User.hasMany(View, {foreignKey: "user_id"});
View.belongsTo(User, {foreignKey: "user_id"});

User.hasMany(Like, {foreignKey: "user_id"})
Like.belongsTo(User, {foreignKey: "user_id"});


Post.hasMany(Like, {foreignKey: "post_id"})
Like.belongsTo(Post, {foreignKey: "post_id"});

Post.hasMany(View, {foreignKey: "post_id"})
View.belongsTo(Post, {foreignKey: "post_id"});

User.hasOne(Comment, {foreignKey: "user_id"})
Comment.belongsTo(User, {foreignKey: "user_id"});

Post.hasMany(Comment, {foreignKey: "post_id"});
Comment.belongsTo(Post, {foreignKey: "post_id"});