import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },
  updateEntryForm: false,
  actions: {
    update(entry, params) {
      this.sendAction('update', entry, params);
    },
    delete(entry) {
      if (confirm('Are you sure you want to delete?')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
