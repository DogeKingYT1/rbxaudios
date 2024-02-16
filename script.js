const songIDs = [
    // All Song IDs
    { title: "Elevator Music", id: 9119119619 },
    { title: "Bing Chilling", id: 7280017311 },
    { title: "Nice Phonk", id: 6696294740 },
    { title: "TikTok Song", id: 8786891922 },
    { title: "Mosquito Sound", id: 2630517612 },
    { title: "Minecraft Chest", id: 6770303644 },
    { title: "Mr. Hyde And Dr. Jekyll E", id: 6770303644 },
    { title: "Pegboard Nerds & Tokyo Machine - Moshi", id: 7024340270 },
    { title: "Mario Judah - Miss The Rage (intro loop)", id: 9124780123 },
    { title: "Snoring Meme (Loud)", id: 8905884240 },
    { title: "Rick Roll Intro (Loud)", id: 8484505509 },
    { title: "Coca-Cola Espuma", id: 5693336619 },
    { title: "Android Notification (Loud)", id: 6073491164 },
    { title: "Microwave Bass Boosted (Loud)", id: 4575953237 },
    { title: "Gangstas Paradise Intro Loop", id: 6070263388 },
    { title: "Vine Boom SFX (The Rock Meme)", id: 8987546731 },
    { title: "Snoring Meme (Aughhh)", id: 5754316938 },
    { title: "Petah On my DICK (Loud)", id: 6896306675 },
    { title: "Carl Wheezer - I don't feel so good (NFL Meme)", id: 6001332169 },
    { title: "Windows XP sound (Loud)", id: 1107208252 },
    { title: "1900s Cartoony Music", id: 1837484771 },
    { title: "1900s Song (Frank Sinatra like song)", id: 1837485023 },
    { title: "1800s George Washington Choire", id: 1844290807 },
    { title: "Template-Name", id: 123456789 },
    { title: "Template-Name", id: 123456789 },
    { title: "Template-Name", id: 123456789 },
    { title: "Template-Name", id: 123456789 },
    { title: "Template-Name", id: 123456789 },
    { title: "Template-Name", id: 123456789 },
    
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
      // copyButton.textContent = "Copy";
      copyButton.innerHTML = `<button class="button" onclick="copyToClipboard(song.id)" <i class="fa-regular fa-clipboard"></i></button>`
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
  