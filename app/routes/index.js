import Ember from 'ember';

  export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        entries: this.store.findAll('entry'),
        reviews: this.store.findAll('review')
      });
    },
    actions: {
      saveEntry3(params) {
        var newEntry = this.store.createRecord('entry', params);
        newEntry.save();
        this.transitionTo('index');
      },
      // saveReview(params) {
      //   console.log("in saveReview - index");
      //   var newReview = this.store.createRecord('review', params);
      //   newReview.save();
      //   this.transitionTo('index');
      // },
      update(entry, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            entry.set(key,params[key]);
          }
        });
        entry.save();
        this.transitionTo('index');
      },

    destroyEntry(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
