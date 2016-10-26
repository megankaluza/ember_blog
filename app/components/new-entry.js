import Ember from 'ember';

export default Ember.Component.extend({
  addNewEntry: false,
  actions: {
    entryFormShow() {
      this.set('addNewEntry', true);
    },
    saveEntry1() {
       var params = {
         title: this.get('title'),
         author: this.get('author'),
         type: this.get('type'),
         content: this.get('content'),
         image: this.get('image'),
       };
       this.set('addNewEntry', false);
       this.sendAction('saveEntry2', params);
    }
  }
});
