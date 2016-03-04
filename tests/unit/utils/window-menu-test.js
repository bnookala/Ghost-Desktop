import { setup } from 'ghost-desktop/utils/context-menu';
import { module, test } from 'qunit';

module('Unit | Utility | window menu');

test('creates a menu', function(assert) {
    let result = setup();
    assert.equal(result.constructor.name, 'Menu');
});
