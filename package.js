Package.describe({
    name: 'polyroid:iron-a11y-keys-behavior',
    version: '1.0.7',
    summary: 'A behavior that enables keybindings for greater a11y.',
    git: 'https://github.com/Polyroid/iron-a11y-keys-behavior.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-a11y-keys-behavior.html'
    ], 'client');
});
