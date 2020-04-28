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
}

function deleteTweet(e) {
    e.preventDefault();
    if (e.target.className === 'delete-tweets') {
        console.log(e.target.parentElement.remove())
    }
}
