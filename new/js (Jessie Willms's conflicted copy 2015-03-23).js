function getJsonFromGoogle(json) {
    var hed = '<h1 class="hvr">' + json.feed.entry[0].gsx$copy.$t + '</h1>';
    var dek = '<h2>' + json.feed.entry[1].gsx$copy.$t + '</h2>';
    var bio = '<p>' + json.feed.entry[2].gsx$copy.$t + '</p>';
    var abt = '<li class="hvr">' + json.feed.entry[3].gsx$copy.$t + '</li>';
    var why = '<li class="hvr">' + json.feed.entry[4].gsx$copy.$t + '</li>';
    var who = '<li class="hvr">' + json.feed.entry[5].gsx$copy.$t + '</li>';

    var theheader = $('header').append(hed + dek + bio);
    var thenav = $('nav').append('<ul>' + abt + why + who + '</ul>');

    // var thephoto = json.feed.entry[3].gsx$copy.$t;
    // $('.photo').append('<img src="' + thephoto + '">');

    for (var i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];

        var booktitle = '<h3>' + entry.gsx$book.$t + '</h3>';
        var bookauthor = '<p>' + entry.gsx$authour.$t + '</p>';
        var monthread = '<p>' + entry.gsx$datamonth.$t + '</p>';
        var starreview = '<p data-value="' + entry.gsx$datareview.$t + '">' + entry.gsx$datareview.$t + '</p>';
        var inaword = '<p>' + entry.gsx$inaword.$t + '</p>';
        var summary = '<p class="summary">' + entry.gsx$summary.$t + '</p>';
        var summary2 = '<p class="summary more">' + entry.gsx$summary2.$t + '</p>';

        var datagenre = entry.gsx$datagenre.$t;
        var datagen = entry.gsx$datagender.$t;
        var datamon = entry.gsx$datamonth.$t;
        var datarev = entry.gsx$datareview.$t;

        var wrapper = '<div class="book-wrap" data-genre="' + datagenre + '"' + 'data-gender="' + datagen + '" data-month="' + datamon + '"' + 'data-review="' + datarev + '">' + booktitle + bookauthor + monthread + starreview + summary + summary2 + inaword + '</div>';

        $('.content-wrap').append(wrapper);
        $('.book-wrap').hide();
    }
}
$(document).ready(function() {
    $(".wrapper").fadeTo('100', 1);
    $('.book-wrap').hide();
    $('form').change(function(e) {
        $('.book-wrap').hide();
        e.preventDefault();
        
        var storedvalGender = $('select#gender-select').val();
        var storedvalGenre = $('select#genre-select').val();
        var storedvalReview = $('select#review-select').val();
        var storedvalMonth = $('select#month-select').val();
        var allvar = "all";
        console.log(storedvalGender);

        // all = all
        // ------------------------------------------------------------------------------------------
        if (storedvalGender === allvar && storedvalGenre === allvar && storedvalMonth === allvar && storedvalReview === allvar) {
            $('.book-wrap').show();
        } else if (storedvalGender != allvar && storedvalGenre === allvar && storedvalMonth === allvar && storedvalReview === allvar){
            // finds items NOT matching gender selection value
            $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']').hide();

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']').show();
        } 
        // genre selected & all other options === all
        //------------------------------------------------------------------------------------------
        else if (storedvalGenre != allvar && storedvalGender === allvar && storedvalMonth === allvar && storedvalReview === allvar){
            // finds items NOT matching gender selection value
            $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']').hide();

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']').show();
        }
        // value selected & all other options === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalMonth != allvar && storedvalGender === allvar && storedvalGenre === allvar && storedvalReview === allvar){
            // finds items NOT matching gender selection value
            $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']').hide();

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']').show();
        } 
        // review selected & all other options === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalReview != allvar && storedvalGender === allvar && storedvalGenre === allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']').not('.book-wrap' + '[data-review' + '=' + storedvalReview + ']').hide();

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']').filter('.book-wrap' + '[data-review' + '=' + storedvalReview + ']').show();
        }
        // gender, genre, review selected + month === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalGenre != allvar && storedvalReview != allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').hide();

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').show();
        }   

        // gender, genre, month selected + review === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalGenre != allvar && storedvalMonth != allvar && storedvalReview === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').hide();

           // finds items matching user's selection and shows them
           $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').show();
        }

        // gender, review, month selected + genre === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalReview != allvar && storedvalMonth != allvar && storedvalGenre === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').not('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').hide();

           // finds items matching user's selection and shows them
           $('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').filter('.book-wrap' + '[data-month' + '=' + storedvalMonth + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').show()
        }

        // gender, review, genre selected + month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalReview != allvar && storedvalGenre != allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').hide();

           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').show();

        }
        
        // ------------------------------------------------------------------------------------------
       /*
        else if (storedvalReview != allvar && storedvalGender != allvar && storedvalGenre != allvar && storedvalMonth != allvar){
            // finds items NOT matching gender selection value
            
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']');
            console.log('hello');

            // finds items matching user's selection and shows them
            $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']');
            console.log('goodbye');
        }*/
    });
});