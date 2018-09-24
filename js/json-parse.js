function get_decos(a) {
    $.getJSON('../data/Decorations.json', function (data) {
        $.each(data, function (index, entry) {
            if (index == 'Skills') {
                alert('return ' + entry + ' // ' + a);
                return entry;
            };
        });
    });
}

function get_decos_per() {
    $.getJSON('../data/Decorations.json', function (data) {
        $.each(data, function (index, entry) {
            if (index != 'Skills') return entry;
        });
    });
}