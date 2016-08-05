import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addProject: function(){
      var newProject = this.store.createRecord('project', {
        title: this.get('title'),
        github_url: this.get('github_url'),
        description: this.get('description'),
        github_url_2: this.get('github_url_2'),
        demo_url: this.get('demo_url'),
        blog_url: this.get('blog_url')
      });
      newProject.save();
      this.setPropeties({
        title: '',
        github_url: '',
        description: '',
        github_url_2: '',
        demo_url: '',
        blog_url: ''
      });
    }
  }
});
