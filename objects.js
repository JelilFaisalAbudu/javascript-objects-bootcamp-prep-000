var playlist = {
  stoneBoy: 'Putuu',
  sarkordie: 'Ofekgyor'
};


function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
}



console.log(playlist);
updatePlaylist(playlist, 'MzVee', 'Davi');

console.log(playlist);

removeFromPlaylist(playlist, 'sarkordie');
console.log(playlist);