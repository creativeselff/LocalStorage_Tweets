//Var
const tweetList = document.querySelector('#tweets-list');




//Events

eventListeners();
function eventListeners() {
    //Form send
    document.querySelector('#form').addEventListener('submit',
        addTweet, deleteTweet);

    // Delete tweets
    tweetList.addEventListener('click', deleteTweet);
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

function deleteTweet(e) {
    e.preventDefault();
    if (e.target.className === 'delete-tweets') {
        console.log(e.target.parentElement.remove())
    }
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



