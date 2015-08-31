Template.blog.helpers({
  posts: function() {
    return PostList;
  }
});

Template.post.helpers({
  post: function() {
    return _.first(_.where(PostList, {template: FlowRouter.getParam('slug')}));
  }
})
