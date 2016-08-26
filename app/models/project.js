import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  github_url: DS.attr('string'),
  description: DS.attr('string'),
  github_url_2: DS.attr('string'),
  demo_url: DS.attr('string'),
  blog_url: DS.attr('string'),
  index: DS.attr('number')
});
