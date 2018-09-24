


function get_decos(path) {
    return new Promise(function (resolve, reject) {
        $.getJSON(path, function (data) {
            $.each(data, function (index, entry) {
                if (index == 'Skills') {
                    resolve(entry);
                };
            });
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