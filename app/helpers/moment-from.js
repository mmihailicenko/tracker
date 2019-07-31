import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template'

export default helper(function momentFrom(params/*, hash*/) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  return new htmlSafe(
    '<span class="text-primary">' + formatted + '</span>'
  );
});

