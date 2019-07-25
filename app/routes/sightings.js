import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });

    let record2 = this.store.createRecord('sighting', {
      location: 'Okllh',
      sightedAt: new Date('2017-03-09')
    });

    let record3 = this.store.createRecord('sighting', {
      location: 'Tes',
      sightedAt: new Date('2018-02-09')
    });

    return [record1, record2, record3]
  }
});
