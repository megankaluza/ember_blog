import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        type: this.get('type'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', entry, params);
    }
  }
});
