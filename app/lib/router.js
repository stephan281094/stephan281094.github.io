FlowRouter.notFound = {
  action: function() {
    FlowLayout.render('layout', {content: 'notfound'});
  }
};

FlowRouter.route('/blog', {
  action: function() {
    FlowLayout.render('layout', {content: 'blog'});
  }
});

FlowRouter.route('/blog/:slug', {
  action: function() {
    FlowLayout.render('layout', {content: 'post'});
  }
});
