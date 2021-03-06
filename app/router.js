import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('projects', function(){
    this.route('new');
  });
  this.route('login');
});

export default Router;
