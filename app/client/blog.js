Template.blog.helpers({
  posts: function() {
    return _.sortBy(PostList, function(post) {
      return post.id * -1;
    });
  }
});

Template.post.helpers({
  post: function() {
    return _.first(_.where(PostList, {template: FlowRouter.getParam('slug')}));
  }
});
