$(document).ready(function () {
    var data = getCategories();
    $(".js-example-basic-single").select2({
        data: data,
        placeholder: "Choose a category",
        width: "auto",
        dropdownPosition: "below",
    });
    $('.select2').css("margin-bottom", "1em");
});

getCategories = function () {
    return [
        {
            id: 'A',
            text: "A: Man and his Activities",
        },
        {
            id: 'B',
            text: "B: Woman and her Activities",
        },
        {
            id: 'C',
            text: "C: Anthropomorphic Deities",
        },
        {
            id: 'D',
            text: "D: Parts of the Human Body",
        },
        {
            id: 'E',
            text: "E: Mammals",
        },
        {
            id: 'F',
            text: "F: Parts of Mammals",
        },
        {
            id: 'G',
            text: "G: Birds",
        },
        {
            id: 'H',
            text: "H: Parts of Birds",
        },
        {
            id: 'I',
            text: "I: Amphibious Animals, Reptiles, etc.",
        },
        {
            id: 'K',
            text: "K: Fish and Parts of Fish",
        },
        {
            id: 'L',
            text: "L: Invertebrates, Insects, etc.",
        },
        {
            id: 'M',
            text: "M: Trees and Plants",
        },
        {
            id: 'N',
            text: "N: Heavens, Earth, Water",
        },
        {
            id: 'O',
            text: "O: Buildings, their Parts, etc.",
        },
        {
            id: 'P',
            text: "P: Ships and Parts Thereof",
        },
        {
            id: 'Q',
            text: "Q: Household and Funerary Furniture",
        },
        {
            id: 'R',
            text: "R: Temple Furniture and Sacred Symbols",
        },
        {
            id: 'S',
            text: "S: Crowns, Garments, Staves",
        },
        {
            id: 'T',
            text: "T: Warfare, Hunting, Butchery",
        },
        {
            id: 'U',
            text: "U: Agriculture, Crafts, Professions",
        },
        {
            id: 'V',
            text: "V: Ropes, Fibres, Basketry, etc.",
        },
        {
            id: 'W',
            text: "W: Vessels of Stone and Pottery",
        },
        {
            id: 'X',
            text: "X: Breads and Pastries",
        },
        {
            id: 'Y',
            text: "Y: Writing, Games, Music",
        },
        {
            id: 'Z',
            text: "Z : Strokes, Geometric Signs and Hieratic Signs",
        },
        {
            id: 'Aa',
            text: "Aa: Unclassified Signs",
        }
    ];
}

function displayEntries() {
    $(".js-example-basic-single").on('select2:select', async function (e) {
        $('.table-hover').show()
        $('.table-hover > tbody').html('');
        var cat = e.params.data.id;
        var keys = Object.keys(ResContext.signInfo);
        if (cat == 'A') {
            // Get keys & filter
            var filtered = keys.filter(key => key[0] == cat && key[1] !== 'a');
        } else {
            // Get keys & filter
            var filtered = keys.filter(key => key.startsWith(cat));
        }
        for (item of filtered) {
            var val = ResContext.signInfo[item];
            idxOfUl = val.indexOf("<ul>");
            var glyphDescription = ''
            if (idxOfUl > -1) {
                glyphDescription = val.slice(idxOfUl);
                var glyphName = val.slice(0, idxOfUl);
            } else {
                var glyphName = val
            }
            $('.table-hover > tbody:last-child').append(
                '<tr><td>' + glyphName + '</td><td>' + glyphDescription + '</td></tr>');
        }
        await new Promise(_ => ResWeb());
    });
}
