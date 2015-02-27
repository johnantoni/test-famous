Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  //waitOn: function () {
  //  return [Meteor.subscribe('object')];
  //}
});

Router.map( function () {
  this.route('home', {
    path: ['/'],
    fastRender: true
  });
});
