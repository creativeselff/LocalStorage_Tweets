//Var
const tweetList = document.querySelector('#tweets-list');




//Events

eventListeners();
function eventListeners() {
    //Form send
    document.querySelector('#form').addEventListener('submit',
        addTweet);

    // Delete tweets
    tweetList.addEventListener('click', deleteTweet);

    document.addEventListener('DOMContentLoaded', readyLocalStorage);
}

//Functions

// Add tweet to form
function addTweet(e) {
    e.preventDefault();

    // Read textarea value
    const tweet = document.querySelector('#tweet').value;

    // Button delete
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-tweets'
    deleteButton.innerText = 'X';

    //Create element and add el to list
    const li = document.createElement('li');
    li.innerText = tweet;
    // Add button delete
    li.appendChild(deleteButton);
    // Add tweet to li
    tweetList.appendChild(li);

    //Add to local storage
    addTweetLocalStorage(tweet);
}

//Delete tweet
function deleteTweet(e) {
    e.preventDefault();
    if (e.target.className === 'delete-tweets') {
        e.target.parentElement.remove();
        deleteTweetLocalStorage(e.target.parentElement.innerText)
    }
}

// Show local storage data
function readyLocalStorage() {
    let tweets;

    tweets = obtainTweetsLocalStorage();

    tweets.forEach((tweet) => {
        // Button delete
        const deleteButton = document.createElement('a');
        deleteButton.classList = 'delete-tweets'
        deleteButton.innerText = 'X';

        //Create element and add el to list
        const li = document.createElement('li');
        li.innerText = tweet;
        // Add button delete
        li.appendChild(deleteButton);
        // Add tweet to li
        tweetList.appendChild(li);
    });
}

// Add tweet to local storage F

function addTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtainTweetsLocalStorage();
    // Add new tweets
    tweets.push(tweet);

    // Convers string to array local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Verify if localstorage has elements, return array
function obtainTweetsLocalStorage() {
    let tweets;

    //Search local storage values
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}


//Delete tweet from Local Storage
function deleteTweetLocalStorage(tweet) {
    let tweets, deleteTweet;

    //Delete the "X"
    deleteTweet = tweet.substring(0, tweet.length - 1);

    tweets = obtainTweetsLocalStorage();
    // index returns the actual position on array
    tweets.forEach((tweet, index) => {
        if (deleteTweet === tweet) {
            tweets.splice(index, 1);
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets))
}









