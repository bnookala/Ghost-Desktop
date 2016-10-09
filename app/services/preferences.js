import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend(Ember.Evented, {
    preferences: storageFor('preferences'),

    isQuickSwitcherMinimized: Ember.computed.alias('preferences.isQuickSwitcherMinimized'),
    isNotificationsEnabled: Ember.computed.alias('preferences.isNotificationsEnabled'),
    contributors: Ember.computed.alias('preferences.contributors'),
    spellcheckLanguage: Ember.computed.alias('preferences.spellcheckLanguage'),

    zoomFactor: Ember.computed({
        get() {
            return this.get('preferences.zoomFactor');
        },
        set(k, v) {
            let frame = require('electron').webFrame;
            let setting = (v >= 50 && v <= 300) ? v : 100;

            frame.setZoomFactor(setting / 100);
            this.set('preferences.zoomFactor', setting);
        }
    }),

    init() {
        this.setupContributors();
    },

    setupContributors() {
        Ember.$.getJSON('contributors.json').then(
            (data) => this.set('preferences.contributors', data)
        );
    },

    setupZoom() {
        this.set('zoomFactor', this.get('zoomFactor'));
    }
});
