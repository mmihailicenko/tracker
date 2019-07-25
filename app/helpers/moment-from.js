import { helper } from '@ember/component/helper';

export default helper(function momentFrom(params/*, hash*/) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  return new Ember.String.htmlSafe(
    '<span class="text-primary">' + formatted + '</span>'
  );
});

