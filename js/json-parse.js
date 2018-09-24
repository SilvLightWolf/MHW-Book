function get_decos() {
    $.getJSON('../data/Decorations.json', function (data) {
        $.each(data, function (index, entry) {
            if (index == 'Skills') {
                alert('return ' + entry);
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
