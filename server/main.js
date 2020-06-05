import { Meteor } from 'meteor/meteor';
import '../imports/api/movies.js';
import { loadFixtures } from './fixtures';

Meteor.startup(() => {

  loadFixtures();

});
