
const genres = {
  Rock: [
    { band: "Haken - Taurus", url: "https://www.youtube.com/results?search_query=Haken+Taurus" },
    { band: "Haken - RedGiant", url: "https://www.youtube.com/results?search_query=Haken+RedGiant" },
    { band: "Haken - EndlessKnot", url: "https://www.youtube.com/results?search_query=Haken+EndlessKnot" },
    { band: "Pink Floyd - Marooned", url: "https://www.youtube.com/results?search_query=Pink+Floyd+Marooned" },
    { band: "Tool - Pot", url: "https://www.youtube.com/results?search_query=Tool+Pot" },
    { band: "Dream Theater - Pull Me Under", url: "https://www.youtube.com/results?search_query=Dream+Theater+Pull+Me+Under" },
    { band: "The Mars Volta - Inertiatic ESP", url: "https://www.youtube.com/results?search_query=The+Mars+Volta+Inertiatic+ESP" },
    { band: "Mastodon - Blood and Thunder", url: "https://www.youtube.com/results?search_query=Mastodon+Blood+and+Thunder" },
    { band: "Muse - Hysteria", url: "https://www.youtube.com/results?search_query=Muse+Hysteria" },
    { band: "Radiohead - Paranoid Android", url: "https://www.youtube.com/results?search_query=Radiohead+Paranoid+Android" },
    { band: "The Black Keys - Lonely Boy", url: "https://www.youtube.com/results?search_query=The+Black+Keys+Lonely+Boy" },
    { band: "Led Zeppelin - Black Dog", url: "https://www.youtube.com/results?search_query=Led+Zeppelin+Black+Dog" },
  ],
  HipHop: [
    { band: "Eminem - Godzilla", url: "https://www.youtube.com/results?search_query=Eminem+Godzilla" },
    { band: "2Pac - Hit Em Up", url: "https://www.youtube.com/results?search_query=2Pac+Hit+Em+Up" },
    { band: "Cypress Hill - Lowrider", url: "https://www.youtube.com/results?search_query=Cypress+Hill+Lowrider" },
    { band: "Kendrick Lamar - DNA.", url: "https://www.youtube.com/results?search_query=Kendrick+Lamar+DNA" },
    { band: "MF DOOM - One Beer", url: "https://www.youtube.com/results?search_query=MF+DOOM+One+Beer" },
    { band: "A Tribe Called Quest - Electric Relaxation", url: "https://www.youtube.com/results?search_query=A+Tribe+Called+Quest+Electric+Relaxation" },
    { band: "Nas - One Mic", url: "https://www.youtube.com/results?search_query=Nas+One+Mic" },
    { band: "Outkast - Ms. Jackson", url: "https://www.youtube.com/results?search_query=Outkast+Ms.+Jackson" },
    { band: "The Notorious B.I.G. - Juicy", url: "https://www.youtube.com/results?search_query=The+Notorious+B.I.G.+Juicy" },
    { band: "Dr. Dre - Still D.R.E.", url: "https://www.youtube.com/results?search_query=Dr.+Dre+Still+D.R.E." },
    { band: "Jay-Z - Empire State of Mind", url: "https://www.youtube.com/results?search_query=Jay-Z+Empire+State+of+Mind" },
    { band: "Wu-Tang Clan - C.R.E.A.M.", url: "https://www.youtube.com/results?search_query=Wu-Tang+Clan+C.R.E.A.M." },
  ],
  Jazz: [
    { band: "Yussef Kamaal - Remembrance", url: "https://www.youtube.com/results?search_query=Yussef+Kamaal+Remembrance" },
    { band: "Mammal Hands - Spiral Stair", url: "https://www.youtube.com/results?search_query=Mammal+Hands+Spiral+Stair" },
    { band: "Miles Davis - So What", url: "https://www.youtube.com/results?search_query=Miles+Davis+So+What" },
    { band: "John Coltrane - A Love Supreme", url: "https://www.youtube.com/results?search_query=John+Coltrane+A+Love+Supreme" },
    { band: "Herbie Hancock - Maiden Voyage", url: "https://www.youtube.com/results?search_query=Herbie+Hancock+Maiden+Voyage" },
    { band: "Kenny Dorham - Blue Bossa", url: "https://www.youtube.com/results?search_query=Kenny+Dorham+Blue+Bossa" },
    { band: "Stan Getz - The Girl from Ipanema", url: "https://www.youtube.com/results?search_query=Stan+Getz+The+Girl+from+Ipanema" },
    { band: "Art Blakey - Moanin'", url: "https://www.youtube.com/results?search_query=Art+Blakey+Moanin" },
    { band: "Dave Brubeck - Take Five", url: "https://www.youtube.com/results?search_query=Dave+Brubeck+Take+Five" },
    { band: "Oscar Peterson - Night Train", url: "https://www.youtube.com/results?search_query=Oscar+Peterson+Night+Train" },
    { band: "Chet Baker - My Funny Valentine", url: "https://www.youtube.com/results?search_query=Chet+Baker+My+Funny+Valentine" },
    { band: "Nubiyan Twist - Lullaby", url: "https://www.youtube.com/results?search_query=Nubiyan+Twist+Lullaby" },
  ],
  Classic: [
    { band: "Xenakis - Metastasis", url: "https://www.youtube.com/results?search_query=Xenakis+Metastasis" },
    { band: "Beethoven - Symphony No. 5", url: "https://www.youtube.com/results?search_query=Beethoven+Symphony+No.+5" },
    { band: "Debussy - Clair de Lune", url: "https://www.youtube.com/results?search_query=Debussy+Clair+de+Lune" },
    { band: "Mozart - Requiem", url: "https://www.youtube.com/results?search_query=Mozart+Requiem" },
    { band: "Bach - Toccata and Fugue in D Minor", url: "https://www.youtube.com/results?search_query=Bach+Toccata+and+Fugue+in+D+Minor" },
    { band: "Vivaldi - Four Seasons", url: "https://www.youtube.com/results?search_query=Vivaldi+Four+Seasons" },
    { band: "Ravel - Bolero", url: "https://www.youtube.com/results?search_query=Ravel+Bolero" },
    { band: "Chopin - Nocturne in E-flat Major", url: "https://www.youtube.com/results?search_query=Chopin+Nocturne+in+E-flat+Major" },
    { band: "Tchaikovsky - Swan Lake", url: "https://www.youtube.com/results?search_query=Tchaikovsky+Swan+Lake" },
    { band: "Handel - Messiah", url: "https://www.youtube.com/results?search_query=Handel+Messiah" },
    { band: "Mahler - Symphony No. 1", url: "https://www.youtube.com/results?search_query=Mahler+Symphony+No.+1" },
    { band: "Satie - Gymnopédie No. 1", url: "https://www.youtube.com/results?search_query=Satie+Gymnopedie+No.+1" },
  ],
};

const propositions = {
  Rock: [
    { band: "Porcupine Tree - Lazarus", url: "https://www.youtube.com/results?search_query=Porcupine+Tree+Lazarus" },
    { band: "Rush - YYZ", url: "https://www.youtube.com/results?search_query=Rush+YYZ" },
    { band: "Queens of the Stone Age - Go with the Flow", url: "https://www.youtube.com/results?search_query=Queens+of+the+Stone+Age+Go+with+the+Flow" },
    { band: "The Smashing Pumpkins - Tonight, Tonight", url: "https://www.youtube.com/results?search_query=The+Smashing+Pumpkins+Tonight+Tonight" },
    { band: "Nine Inch Nails - Closer", url: "https://www.youtube.com/results?search_query=Nine+Inch+Nails+Closer" },
    { band: "Arctic Monkeys - Do I Wanna Know?", url: "https://www.youtube.com/results?search_query=Arctic+Monkeys+Do+I+Wanna+Know" },
    { band: "The White Stripes - Seven Nation Army", url: "https://www.youtube.com/results?search_query=The+White+Stripes+Seven+Nation+Army" },
    { band: "R.E.M. - Losing My Religion", url: "https://www.youtube.com/results?search_query=R.E.M.+Losing+My+Religion" },
    { band: "Deftones - My Own Summer", url: "https://www.youtube.com/results?search_query=Deftones+My+Own+Summer" },
    { band: "Soundgarden - Black Hole Sun", url: "https://www.youtube.com/results?search_query=Soundgarden+Black+Hole+Sun" },
    { band: "Red Hot Chili Peppers - Under the Bridge", url: "https://www.youtube.com/results?search_query=Red+Hot+Chili+Peppers+Under+the+Bridge" },
    { band: "Foo Fighters - Everlong", url: "https://www.youtube.com/results?search_query=Foo+Fighters+Everlong" },
    { band: "The Cure - Just Like Heaven", url: "https://www.youtube.com/results?search_query=The+Cure+Just+Like+Heaven" },
  ],
  HipHop: [
    { band: "Outkast - Ms. Jackson", url: "https://www.youtube.com/results?search_query=Outkast+Ms.+Jackson" },
    { band: "The Notorious B.I.G. - Juicy", url: "https://www.youtube.com/results?search_query=The+Notorious+B.I.G.+Juicy" },
    { band: "Snoop Dogg - Drop It Like It's Hot", url: "https://www.youtube.com/results?search_query=Snoop+Dogg+Drop+It+Like+Its+Hot" },
    { band: "Run-D.M.C. - It's Tricky", url: "https://www.youtube.com/results?search_query=Run-D.M.C.+It%27s+Tricky" },
    { band: "Public Enemy - Fight the Power", url: "https://www.youtube.com/results?search_query=Public+Enemy+Fight+the+Power" },
    { band: "A$AP Rocky - Praise the Lord", url: "https://www.youtube.com/results?search_query=A$AP+Rocky+Praise+the+Lord" },
    { band: "Kanye West - Stronger", url: "https://www.youtube.com/results?search_query=Kanye+West+Stronger" },
    { band: "Mobb Deep - Shook Ones Pt. II", url: "https://www.youtube.com/results?search_query=Mobb+Deep+Shook+Ones+Pt.+II" },
    { band: "Mos Def - Umi Says", url: "https://www.youtube.com/results?search_query=Mos+Def+Umi+Says" },
    { band: "Black Star - Definition", url: "https://www.youtube.com/results?search_query=Black+Star+Definition" },
    { band: "Rakim - Paid in Full", url: "https://www.youtube.com/results?search_query=Rakim+Paid+in+Full" },
    { band: "N.W.A. - Straight Outta Compton", url: "https://www.youtube.com/results?search_query=N.W.A.+Straight+Outta+Compton" },
    { band: "Method Man - Bring the Pain", url: "https://www.youtube.com/results?search_query=Method+Man+Bring+the+Pain" },
  ],
  Jazz: [
    { band: "Stan Getz - The Girl from Ipanema", url: "https://www.youtube.com/results?search_query=Stan+Getz+The+Girl+from+Ipanema" },
    { band: "Art Blakey - Moanin'", url: "https://www.youtube.com/results?search_query=Art+Blakey+Moanin" },
    { band: "Duke Ellington - Caravan", url: "https://www.youtube.com/results?search_query=Duke+Ellington+Caravan" },
    { band: "Charlie Parker - Ornithology", url: "https://www.youtube.com/results?search_query=Charlie+Parker+Ornithology" },
    { band: "Thelonious Monk - Round Midnight", url: "https://www.youtube.com/results?search_query=Thelonious+Monk+Round+Midnight" },
    { band: "Bill Evans - Waltz for Debby", url: "https://www.youtube.com/results?search_query=Bill+Evans+Waltz+for+Debby" },
    { band: "Pat Metheny - Question of Time", url: "https://www.youtube.com/results?search_query=Pat+Metheny+Question+of+Time" },
    { band: "Ahmad Jamal - Poinciana", url: "https://www.youtube.com/results?search_query=Ahmad+Jamal+Poinciana" },
    { band: "Horace Silver - Song for My Father", url: "https://www.youtube.com/results?search_query=Horace+Silver+Song+for+My+Father" },
    { band: "Wes Montgomery - Four on Six", url: "https://www.youtube.com/results?search_query=Wes+Montgomery+Four+on+Six" },
    { band: "Bobby Timmons - This Here", url: "https://www.youtube.com/results?search_query=Bobby+Timmons+This+Here" },
    { band: "Joe Henderson - Mode for Joe", url: "https://www.youtube.com/results?search_query=Joe+Henderson+Mode+for+Joe" },
  ],
  Classic: [
    { band: "Vivaldi - Four Seasons", url: "https://www.youtube.com/results?search_query=Vivaldi+Four+Seasons" },
    { band: "Ravel - Bolero", url: "https://www.youtube.com/results?search_query=Ravel+Bolero" },
    { band: "Chopin - Nocturne in E-flat Major", url: "https://www.youtube.com/results?search_query=Chopin+Nocturne+in+E-flat+Major" },
    { band: "Tchaikovsky - Swan Lake", url: "https://www.youtube.com/results?search_query=Tchaikovsky+Swan+Lake" },
    { band: "Handel - Messiah", url: "https://www.youtube.com/results?search_query=Handel+Messiah" },
    { band: "Mahler - Symphony No. 1", url: "https://www.youtube.com/results?search_query=Mahler+Symphony+No.+1" },
    { band: "Satie - Gymnopédie No. 1", url: "https://www.youtube.com/results?search_query=Satie+Gymnopedie+No.+1" },
    { band: "Grieg - In the Hall of the Mountain King", url: "https://www.youtube.com/results?search_query=Grieg+In+the+Hall+of+the+Mountain+King" },
    { band: "Liszt - Liebestraum No. 3", url: "https://www.youtube.com/results?search_query=Liszt+Liebestraum+No.+3" },
    { band: "Saint-Saëns - Danse Macabre", url: "https://www.youtube.com/results?search_query=Saint-Saens+Danse+Macabre" },
    { band: "Brahms - Hungarian Dance No. 5", url: "https://www.youtube.com/results?search_query=Brahms+Hungarian+Dance+No.+5" },
    { band: "Mendelssohn - Violin Concerto in E Minor", url: "https://www.youtube.com/results?search_query=Mendelssohn+Violin+Concerto+in+E+Minor" },
  ],
};

const genreList = document.getElementById("genre-list");

function createTrackList(items) {
  const list = document.createElement("ul");
  list.className = "track-list";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.band;
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  return list;
}

function createGenreList(genreName, videoData) {
  const section = document.createElement("section");
  section.className = "genre-block";

  const heading = document.createElement("h2");
  heading.textContent = genreName;
  section.appendChild(heading);

  const mainLabel = document.createElement("p");
  mainLabel.className = "subheading";
  mainLabel.textContent = "Selected tracks";
  section.appendChild(mainLabel);

  section.appendChild(createTrackList(videoData));

  if (propositions[genreName] && propositions[genreName].length) {
    const suggestionLabel = document.createElement("p");
    suggestionLabel.className = "subheading suggestions-title";
    suggestionLabel.textContent = "Similar songs & proposals";
    section.appendChild(suggestionLabel);
    section.appendChild(createTrackList(propositions[genreName]));
  }

  genreList.appendChild(section);
}

Object.entries(genres).forEach(([genreName, videoData]) => {
  createGenreList(genreName, videoData);
});