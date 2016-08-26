import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('project',{ reload : true }).then(projects => projects.sortBy('index').reverse());
  }
});
