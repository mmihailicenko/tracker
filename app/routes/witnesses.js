import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: 'Todd',
      lName: 'Weasley',
      mailAddress: 'todd.weasley@better.com'
    });
    return [witnessRecord];
  }
});
