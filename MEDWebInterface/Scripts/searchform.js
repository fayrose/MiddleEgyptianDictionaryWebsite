// Gardiner sign data - loaded lazily on demand
var gardinerSignData = null;
var gardinerDataLoading = false;
var gardinerDataCallbacks = [];

function loadGardinerData(callback) {
    if (gardinerSignData !== null) {
        callback(gardinerSignData);
        return;
    }
    
    gardinerDataCallbacks.push(callback);
    
    if (gardinerDataLoading) {
        return; // Already loading
    }
    
    gardinerDataLoading = true;
    
    fetch('/Scripts/gardiner-signs.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            gardinerSignData = data;
            gardinerDataLoading = false;
            // Execute all waiting callbacks
            gardinerDataCallbacks.forEach(function(cb) {
                cb(data);
            });
            gardinerDataCallbacks = [];
        })
        .catch(function(error) {
            console.error('Failed to load Gardiner sign data:', error);
            gardinerDataLoading = false;
            // Return empty array on error
            gardinerDataCallbacks.forEach(function(cb) {
                cb([]);
            });
            gardinerDataCallbacks = [];
        });
}

$(document).ready(function () {
    $('.select2').hide();
    $('.select2').children().hide();
    
    // Initialize select2 with empty data, will load on demand
    $('.js-example-basic-multiple').select2({
        data: [],
        placeholder: "Id, [translit.], [narrow], [broad], [tall]",
        width: "60%",
        multiple: true,
        escapeMarkup: function (markup) {
            return markup;
        },
        templateResult: function (data) {
            return data.html;
        },
        templateSelection: function (data) {
            return data.display;
        },
        allowDuplicates: true,
        sortSelectedBySelectionTime: true
    });
    
    $('.select2').hide();
    $('.select2').children().hide();
});

// Load data when switching to Gardiner tab
function loadGardinerSelect2() {
    loadGardinerData(function(data) {
        var $select = $('.js-example-basic-multiple');
        
        // Only add if not already populated
        if ($select.find('option').length === 0) {
            data.forEach(function(item) {
                var option = new Option(item.text, item.id, false, false);
                option.html = item.html;
                option.display = item.display;
                $select.append(option);
            });
            
            // Reinitialize select2 with loaded data
            $select.select2({
                data: data,
                placeholder: "Id, [translit.], [narrow], [broad], [tall]",
                width: "60%",
                multiple: true,
                escapeMarkup: function (markup) {
                    return markup;
                },
                templateResult: function (data) {
                    return data.html;
                },
                templateSelection: function (data) {
                    return data.display;
                },
                allowDuplicates: true,
                sortSelectedBySelectionTime: true
            });
        }
    });
}

function SelectClick1() {
    $('.js-example-basic-multiple').on('change', function (e) {
        var data = e;
        // console.log(e); // Debug log removed
    });
}

function SelectClick() {
    $(".js-example-basic-multiple").on('select2:select select2:unselect', function (e) {
        var data = $('.js-example-basic-multiple').select2('data');
        data = data.sort((a, b) => a.timeStamp - b.timeStamp);
        var signQuery = [];
        data.forEach(function (item) {
            signQuery.push(item.display);
        });
        var text = signQuery.join(' ');
        $("#SignQuery").val(text);
    });
}

function ChangeTextbox(x) {
    switch (x) {
        // Switch to the Gardiner Ids tab, swap out textbox for tagged one
        case 1:
            $("#regular-input").hide();
            $('.select2').show();
            $('.select2').children().show();
            // Lazy load Gardiner data when tab is selected
            loadGardinerSelect2();
            break;
        // Switch to another tab, use regular input box.
        case 0:
            $('.select2').hide();
            $('.select2').children().hide();
            $("#regular-input").show();
            break;
    }
}

function UpdateValues() {
    if ($("#exactmatchcheck").is(':checked')) {
        $("#exactmatch").prop("checked", true);
        $("#exactmatch").val(true);
        $("#exactmatch").prop("active", true)
    } else {
        $("#exactmatch").prop("checked", false);
        $("#exactmatch").val(false);
        $("#exactmatch").prop("active", false)
    }

    if ($("#formattingcheck").is(':checked')) {
        $("#formatting").prop("checked", true);
        $("#formatting").prop("active", true);
        $("#formatting").val(true);
    } else {
        $("#formatting").prop("checked", false);
        $("#formatting").prop("active", false);
        $("#formatting").val(false);
    }
}
