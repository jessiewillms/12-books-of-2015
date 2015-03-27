$(document).ready(function($) {
    $(".wrapper").fadeTo('600', 1);
});

function getJsonFromGoogle(json) {
    var hed = '<h1>' + json.feed.entry[0].gsx$copy.$t + '</h1>';
    var dek = '<h2>' + json.feed.entry[1].gsx$copy.$t + '</h2>';
    var bio = '<p>' + json.feed.entry[2].gsx$copy.$t + '</p>';
    var abt = '<li>' + json.feed.entry[3].gsx$copy.$t + '</li>';
    var why = '<li>' + json.feed.entry[4].gsx$copy.$t + '</li>';
    var who = '<li>' + json.feed.entry[5].gsx$copy.$t + '</li>';
    // var photo = '<img src="' + json.feed.entry[3].gsx$copy.$t + '">'

    var theheader = $('header').append(hed + dek + bio);
    var thenav = $('nav').append('<ul>' + abt + why + who + '</ul>');
    // $('.wrap').append(theheader + thenav);

    // var thephoto = json.feed.entry[3].gsx$copy.$t;
    // $('.photo').append('<img src="' + thephoto + '">');

    // var button = $('button').html(json.feed.entry[4].gsx$copy.$t);

    // var byline = $('p.byline').html("Quiz by: " + json.feed.entry[2].gsx$copy.$t);

    for (var i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];

        // book authour inaword monthread   outoffive
        var booktitle = '<h3>' + entry.gsx$book.$t + '</h3>';
        var bookauthor = '<p>' + entry.gsx$authour.$t + '</p>';
        var monthread = '<p>' + entry.gsx$monthread.$t + '</p>';
        var starreview = '<p data-value="' + entry.gsx$outoffive.$t + '">' + entry.gsx$outoffive.$t + '</p>';
        var inaword = '<p>' + entry.gsx$inaword.$t + '</p>';

        var contenthexagon = '<div class="box-style content-shape clearfix">' + bookauthor + monthread + starreview + inaword + '</div>';
        var titlehexagon = '<div class="box-style style-shape clearfix">' + booktitle + '</div>';

        var together = '<div class="book-wrap clearfix">' + titlehexagon + contenthexagon + '</div>';

        $('main').append(together);
       
    }
}

// https://docs.google.com/spreadsheets/d/1iYljc-wiod2Bu0dSniWe7IW59PtheLUFsyIK1JJnuDA/pubhtml
// key: ZGWOL7bd0ZwR5rdsdK1GOQ  
// secret: FZhs3OQfaeCdMQoFz8wQamVGWCaXF5GPxHyzjBpZQTw