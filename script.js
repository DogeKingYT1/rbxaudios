const songIDs = [
    // All Song IDs
    { title: "Elevator Music", id: 9119119619 },
    { title: "Bing Chilling", id: 7280017311 },
    { title: "Nice Phonk", id: 6696294740 },
    { title: "TikTok Song", id: 8786891922 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
    { title: "Name", id: 123456789 },
  ];
  
  function displaySongList(songs) {
    const songListDiv = document.getElementById("songList");
    songListDiv.innerHTML = '';
  
    if (songs.length === 0) {
      songListDiv.innerHTML = '<p>No songs found</p>';
      return;
    }
  
    songs.forEach(song => {
      const songDiv = document.createElement("div");
      const copyButton = document.createElement("button");
  
      songDiv.innerHTML = `<strong>${song.title}</strong>: ${song.id}`;
      copyButton.textContent = "Copy";
      copyButton.addEventListener("click", () => copyToClipboard(song.id));
  
      songDiv.appendChild(copyButton);
      songListDiv.appendChild(songDiv);
    });
  }
  
  function copyToClipboard(text) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert(`Copied: ${text}`);
  }
  
  function searchSong() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredSongs = songIDs.filter(song => song.title.toLowerCase().includes(searchTerm));
    displaySongList(filteredSongs);
  }
  
  // Initial display of all songs
  displaySongList(songIDs);
  