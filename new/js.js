function getJsonFromGoogle(json) {
    var totalNumBooks = 0;
    
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

        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        var booktitle = '<h3>' + entry.gsx$book.$t.capitalize() + '</h3>';
        var bookauthor = '<p><span class="sm">By: </span>' + entry.gsx$authour.$t.capitalize() + '</p>';
        var bookimg = '<img src="' + entry.gsx$bookimg.$t.capitalize() + '">';

        var monthread = '<p><span class="sm">Month read: </span>' + entry.gsx$datamonth.$t.capitalize() + '</p>';
        var starreview = '<p data-value="' + entry.gsx$datareview.$t.capitalize() + '"><span class="sm">Review: </span>' + entry.gsx$datareview.$t.capitalize() + '</p>';
        var inaword = '<p>' + entry.gsx$inaword.$t.capitalize() + '</p>';
        var summary = '<p class="summary"><span class="sm">Summary: </span>' + entry.gsx$summary.$t + '</p>';
        var summary2 = '<button class="show-more-bttn">Show more</button>' + '<p class="summary more">' + entry.gsx$summary2.$t + '</p>';

        var datagenre = entry.gsx$datagenre.$t;
        var datagen = entry.gsx$datagender.$t;
        var datamon = entry.gsx$datamonth.$t;
        var datarev = entry.gsx$datareview.$t;

        var wrapper = '<div class="book-wrap clearfix" data-genre="' + datagenre + '"' + 'data-gender="' + datagen + '" data-month="' + datamon + '"' + 'data-review="' + datarev + '">' + '<div class="img-wrap">' + bookimg + '</div>' + '<div class="book-words">' + booktitle + bookauthor + monthread + starreview + summary + summary2 + inaword + '</div>' +  '</div>';

        $('.content-wrap').append(wrapper);
        
        // update book count
        totalNumBooks +=1;
        $('.total').html("<p>" + "so far in 2015," + " i've read " + "<span class='books'>" + totalNumBooks + "</span>" + " books!" + "</p>");

        $('.book-wrap').hide();
    }
}


$(document).ready(function() {
    // $('.content-wrap h2').hide();

    $(".wrapper").fadeTo('100', 1);
    $('.book-wrap').hide();

    $('.more:empty').remove();
    $('p:empty').prev().hide();
    $('p:empty').remove();
    // :empty
    // $('.show-more-btton').next('p.summary.more:empty').hide();
   

    $('form').change(function(e) {
        // $('.content-wrap h2').show();
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
        // genre, review, month selected + gender  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGenre != allvar && storedvalReview != allvar && storedvalMonth != allvar && storedvalGender === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').hide();

           $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').show();

        }

        // review, genre selected + gender/month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGenre != allvar && storedvalReview != allvar && storedvalGender === allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']').not('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']').hide();

           $('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']').filter('.book-wrap' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-review' + '=' + storedvalReview + ']').show();

        }

        // review, month selected + gender/genre  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalReview != allvar && storedvalMonth != allvar && storedvalGender === allvar && storedvalGenre === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').hide();

           $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-month' + '=' + storedvalMonth + ']').show();

        }

        // gender, genre selected + review/month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalReview != allvar && storedvalGenre === allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').hide();

           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']').show();

        }

        // gender, genre selected + review/month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalGenre != allvar && storedvalReview === allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').hide();

           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']').show();

        }
        // gender, review, genre selected + month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalReview != allvar && storedvalGenre != allvar && storedvalMonth === allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').hide();

           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']').show();

        }


        // gender, review, genre selected + month  === all
        // ------------------------------------------------------------------------------------------
        else if (storedvalGender != allvar && storedvalReview != allvar && storedvalGenre != allvar && storedvalMonth !== allvar){
            // finds items NOT matching gender selection value
           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').hide();

           $('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-gender' + '=' + storedvalGender + ']' + '[data-review' + '=' + storedvalReview + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').show();

        }

        // ------------------------------------------------------------------------------------------
        // else if (storedvalReview != allvar && storedvalGender != allvar && storedvalGenre != allvar && storedvalMonth != allvar){
        //     // finds items NOT matching gender selection value

        //     $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').not('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']');
        //     console.log('hello');

        //     // finds items matching user's selection and shows them
        //     $('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']').filter('.book-wrap' + '[data-review' + '=' + storedvalReview + ']' + '[data-gender' + '=' + storedvalGender + ']' + '[data-genre' + '=' + storedvalGenre + ']' + '[data-month' + '=' + storedvalMonth + ']');
        //     console.log('goodbye');
        // }
    });
    
    $('.show-more-btton').next('p.summary.more:empty').remove();
    $('.show-more-btton').next('p.summary.more:empty').hide();

    $('.show-more-bttn').click(function(){
        $(this).hide();
        $(this).next('p.summary.more').fadeIn();

    });
});