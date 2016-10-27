import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      console.log("in saveReview - new-review");
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       content: this.get('content'),
       entry: this.get('entry')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
