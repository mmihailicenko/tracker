import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create() {
      var self = this;
      console.log(self);
      this.get('model.sighting').save().then(function() {
        self.transitionToRoute('sightings')
      })
    },
    cancel() {
      this.get('model.sighting').deleteRecord();
      this.transitionToRoute('sightings');
    }
  }
});
