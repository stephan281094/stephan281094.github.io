Template.blog.helpers({
  posts: function() {
    return _.sortBy(PostList, function(post) {
      return post.id * -1;
    });
  }
});

Template.post.helpers({
  post: function() {
    var post = _.first(_.where(PostList, {template: FlowRouter.getParam('slug')}));

    return post ? post : FlowLayout.render('layout', {content: 'notfound'});
  }
});
