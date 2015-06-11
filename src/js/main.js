$.getJSON('/api/github/users/octocat.json')
    .then(function(octocat){
        console.log(octocat);

        $avatar = $('img', '.profile_avatar');
        $avatar.attr('src', octocat.avatar_url);

        $name = $('h1#name');
        $name.text(octocat.name);

        $login = $('h3#login');
        $login.text(octocat.login);

        $company = $('li#company');
        $company.text(octocat.company);

        $location = $('li#location');
        $location.text(octocat.location);

        $email = $('li#email');
        $email.text(octocat.email);
        // unable to replace url itself, but the placeholder was removed?
        //Place holder was showing right next to the url...
        $blog = $('li#blog');
        $blog.text(octocat.blog);

  });
