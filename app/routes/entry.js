import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id, Ember.RSVP.hash);
  },
  updateEntryForm: false,
  actions: {
    saveReview(params) {
      console.log("in saveReview - entry");
      var newReview = this.store.createRecord('review', params);
      var entry = params.entry;
      entry.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return entry.save();
      });
      this.transitionTo('entry', entry);
    },
    destroyEntry(entry) {
      var review_deletions = entry.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return entry.destroyRecord();
      });
      this.transitionTo('index');
    },
    update(entry, params) {
      this.sendAction('update', entry, params);
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
    // delete(entry) {
    //   if (confirm('Are you sure you want to delete?')) {
    //     this.sendAction('destroyEntry', entry);
    //   }
    // }
  }
});
