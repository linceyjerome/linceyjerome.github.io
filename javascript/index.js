
let clipboard = new ClipboardJS('.copy-email', {
    text: function () {
        return 'lj_jerome@hotmail.com';
    }
});
clipboard.on('success', function (e) {
    console.log(e);
});
clipboard.on('error', function (e) {
    console.log(e);
});

