/* Pop Dossier — vary the embedded Spotify release (and its cover art) on each visit.
   Each pool starts with the artist embed (photo + top tracks) as a safe default,
   followed by verified album IDs. The iframe's hardcoded src is the no-JS fallback. */
(function(){
  "use strict";
  var POOLS = {
    "ayesha-erotica":["artist/7M5pDtJpCdnftEQZtczYco","album/7pR7bJiZMgP9T0fAStMik3","album/7fGPEebaGe089Cru10K8R2","album/1mj574jL5jCP5QFJmBK0gW","album/3JvcGHbsQSVtKA68FuYCwy"],
    "slayyyter":["artist/4QM5QCHicznALtX885CnZC","album/0e35TENSTAVVkaHlVEsTtz","album/6GkSSx11ND5SzYoHizUrvk","album/6tVEJYmmerl7fVMac8vHmu"],
    "charli-xcx":["artist/25uiPmTg16RbhZWAqwLBy5","album/2lIZef4lzdvZkiiCzvPKj7","album/1QqipMXWzJhr6yfcNKTp8B","album/3a9qH2VEsSiOZvMrjaS0Nu","album/386IqvSuljaZsMjwDGGdLj","album/7Mu8tuC4yPZAcU5EL9d15k","album/37rI2gAtakAmSFtbIE9THq"],
    "dorian-electra":["artist/202HZzqKvPsMHcbwnDZx7u","album/4svcCm5yRZtKE0tXn4n1cn","album/2QFXjy3u6Bl6ctdK9FS9eF","album/6HjuqzWf3UlJoaU7iqDRIv"],
    "addison-rae":["artist/4gvjmrtzydbMpyJaXUtwvP","album/2ffVa2UhHUDwMHnr685zJ4","album/4HFL8GJomswlqQwqJGwKDt"],
    "lady-gaga":["artist/1HY2Jd0NmPuamShAr6KMms","album/2MHUaRi9OCyTN02SoyRRBJ","album/05c49JgPmL4Uz2ZeqRx5SP","album/2KkMVsxymoNR7hRmBcMttd","album/2bsK9FeKzU0jNKA6XYFP7E"],
    "ariana-grande":["artist/66CXWjxzNUsdJxJ2JdwvnR","album/5EYKrEDnKhhcNxGedaRQeK","album/3euz4vS7ezKGnNSwgyvKcd","album/2fYhqwDWXjbpjaIJPEfKFw","album/3tx8gQqWbGwqIGZHqDNrGe"],
    "tate-mcrae":["artist/45dkTj5sMRSjrmBSBeiHym","album/3w32SV56JvtJXsrYtThwzP","album/0OUOx6rJXtL66AzTnP9KUE","album/5fhTetHew6Eph6HfQ9O5gJ"],
    "doja-cat":["artist/5cj0lLjcoR7YOSnhnX0Po5","album/6DmPNcfpkXBVRJsEIJY9tl","album/1nAQbHeOWTfQzbOoFrvndW","album/1MmVkhiwTH0BkNOU3nw5d3","album/7dHwC2E4J9ude0GoPhp4SI"],
    "zara-larsson":["artist/1Xylc3o4UrD53lo9CvFvVg","album/0qqZ6HD72So93exL9rH7zi","album/79y7DSLFQH3907u4ysOMGr","album/3ciEcHv8axaPC5YHTJ72Bg","album/1Rlo7Ga1Dmrx5cV4KOe4Fs"]
  };
  var slug = document.body.getAttribute('data-slug');
  var frame = document.getElementById('spembed');
  if(!frame || !slug || !POOLS[slug]) return;
  var pool = POOLS[slug];
  var pick = pool[Math.floor(Math.random()*pool.length)];
  frame.src = 'https://open.spotify.com/embed/' + pick + '?utm_source=generator';
})();
