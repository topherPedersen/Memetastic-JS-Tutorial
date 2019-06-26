// create an array of memes
var meme = [
    "https://www.rd.com/wp-content/uploads/2019/04/Hilarious-Dog-Memes-FT.jpg",
    "https://i.pinimg.com/originals/2f/b8/61/2fb861b5899ed2baee9f29fafcd5a966.jpg",
    "https://i.pinimg.com/736x/68/5c/f6/685cf66a7238fe545de8ebb82b99f0e5.jpg",
    "http://justsomething.co/wp-content/uploads/2018/01/10-hilarious-animal-memes-that-will-make-your-day-so-much-better-01.jpg",
    "https://imgix.ranker.com/user_node_img/50041/1000806882/original/p-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
];

// create a variable to keep track of which meme to show next
var indexOfCurrentMeme = 0;

// create function to display next meme
function showNextMeme() {

    // get image tag
    var imageTag = document.getElementById('our-img-tag');
    
    // swap meme image
    imageTag.src = meme[indexOfCurrentMeme];

    // increment index
    if (indexOfCurrentMeme < 4) {
        indexOfCurrentMeme = indexOfCurrentMeme + 1;
    } else {
        indexOfCurrentMeme = 0;
    }
}