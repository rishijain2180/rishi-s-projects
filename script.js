// List of songs (replace with your own file paths and details)
const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'C:\Users\shras\Desktop\my spotify\S-1\music\choo lo.mp3.mp3',
        cover: 'images/cover1.jpg'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'music/song2.mp3',
        cover: 'images/cover2.jpg'-
    },
    // Add more songs as needed
];

// Function to create song list items
function createSongList() {
    const songList = document.getElementById('song-list');
    songList.innerHTML = '';

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.dataset.index = index;
        li.addEventListener('click', () => playSong(index));
        songList.appendChild(li);
    });
}

// Function to play a song
function playSong(index) {
    const song = songs[index];
    const audioPlayer = document.getElementById('audio-player');
    const albumCover = document.getElementById('album-cover').querySelector('img');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');

    audioPlayer.src = song.src;
    albumCover.src = song.cover;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;

    audioPlayer.play();
}

// Initialize the playlist
createSongList();
