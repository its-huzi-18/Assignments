// Exercise-40 (Album)

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album("Ed Sheeran", "Divide");
let album2 = make_album("Adele", "25", 12); // Includes the number of tracks
let album3 = make_album("Imagine Dragons", "Evolve");

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
