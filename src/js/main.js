$.getJSON('/api/github/users/octocat.json')
    .then(function(octocat){
        console.log(octocat);

        $avatar = $('img#avatar');
        $avatar.attr('src', octocat.avatar_url);

        $name = $('h1#name');
        $name.text(octocat.name);

        




  });
