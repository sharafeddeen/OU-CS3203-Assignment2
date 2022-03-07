$(document).ready(function() 
{
    // 1. Get all tweets
    $('#get-tweets').on('click',function() {
        $.ajax({
            url: '/all-tweets',
            type: 'GET',
            success: (response) => {
                var tbodyEl = $('#tweet-table');

                tbodyEl.html('');

                for (const tweet of response.tweets) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="text">' + tweet.text + '</td>\
                            <td class="date">' + tweet.created_at + '</td>\
                        </tr>\
                    ');
                };
            }
        });
    });

    // 2. Get all user ID's
    $('#get-ids').on('click', function() {
        $.ajax({
            url: '/all-tweets',
            type: 'GET',
            success: (response) => {
                var tbodyEl = $('#id-table');

                tbodyEl.html('');

                for (const tweet of response.tweets) {
                    tbodyEl.append('\
                        <tr>\
                            <td>' + tweet.user.id + '</td>\
                        </tr>\
                    ');
                };
            }
        });
    });

    // 3. Get a tweet from its ID
    $('#submit-tweet-id').on('click', function() {
        $.ajax({
            url: '/all-tweets',
            type: 'GET',
            success: (response) => {
                var id = document.getElementById("enter-tweet-id").value;
                document.getElementById("enter-tweet-id").value = "";
                $('#tweet-from-id-table').html('');
                for (const tweet of response.tweets) {
                    if(id == tweet.id) {
                        $('#tweet-from-id-table').append(`\
                            <tr>\
                                <td>${tweet.text}</td>\
                                <td>${tweet.created_at}</td>\
                            </tr>\
                    `);
                    }
                };
            }
        });
    });

    // 4. Create a tweet from text & ID
    $("#create-button").on('click', function() {

        var numID = parseInt(document.getElementById("create-tweet-id").value);
        var strID = document.getElementById("create-tweet-id").value;
        var txt = document.getElementById("create-tweet-text").value;
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(
                {
                    id: numID,
                    id_str: strID,
                    text: txt
                }
            ),
            success: (response) => {
                console.log('Here: ');
                console.log(response);
            }

            /*
            success: (response) => {
                response.tweets.push(tweet);
                console.log({tweet, response});
            }
            success: (response) => {
                console.log(numID, strID, txt, response);
                //fs.writeFileSync('favs.json', newTweet);
                response.tweets.push(newTweet);
            }
            */
        });
    });
});