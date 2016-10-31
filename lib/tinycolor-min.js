



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7a356da712cd13c4e4cfbdc04cf886bb391f84a7e92f9f7b3abf2b1034fea6e9.css" integrity="sha256-ejVtpxLNE8Tkz73ATPiGuzkfhKfpL597Or8rEDT+puk=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-85c605289f6f5d0832a168f8ad71a38dff98eed69103be797a45c54c0cca6cac.css" integrity="sha256-hcYFKJ9vXQgyoWj4rXGjjf+Y7taRA755ekXFTAzKbKw=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>TinyColor/tinycolor-min.js at master · bgrins/TinyColor</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/95570?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="bgrins/TinyColor" name="twitter:title" /><meta content="TinyColor - Fast, small color manipulation and conversion for JavaScript" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/95570?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="bgrins/TinyColor" property="og:title" /><meta content="https://github.com/bgrins/TinyColor" property="og:url" /><meta content="TinyColor - Fast, small color manipulation and conversion for JavaScript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTU1MjYyNzoyYjg5ZGYxZjE2ODAzN2QwZGViNTVlMzgwOGRjZjU5YTo2YzY5MjRkOGEyMDZjZjU2MzRhMzAyNDg1M2M2NDUyYzNjNDIzMjkzNjkwMjAzZWE4Y2FmMGNiNjllODIwN2Q3--f307d77c3b7dacb83880c4da6fd6ac3d77248399">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="82EFE068:4783:2A86F1D:5816FBB5" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="82EFE068:4783:2A86F1D:5816FBB5" name="octolytics-dimension-request_id" /><meta content="9552627" name="octolytics-actor-id" /><meta content="oskarOlausson" name="octolytics-actor-login" /><meta content="d9698d97369493e2c6697f8589d4280ce2f9b02325116fe7bea413dfd4821c14" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="oskarOlausson">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZTdmNTQ2N2EwYWFjYjRlMjdiMWU4NWMwNDQxYTYyNzFkODRmYzk0MTQ1YjIyZjRiOTQ2MTViYmExNDRiZWRiZHx7InJlbW90ZV9hZGRyZXNzIjoiMTMwLjIzOS4yMjQuMTA0IiwicmVxdWVzdF9pZCI6IjgyRUZFMDY4OjQ3ODM6MkE4NkYxRDo1ODE2RkJCNSIsInRpbWVzdGFtcCI6MTQ3NzkwMTI0NiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="b920ec61795590f398d3439056fb143313e3455e">
    <meta content="84a6b0e3b5526145d2b96782dac1cc01c8736e97" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="4b864a2aef9c041070b982344e9bcc84">
    

      
  <meta name="description" content="TinyColor - Fast, small color manipulation and conversion for JavaScript">
  <meta name="go-import" content="github.com/bgrins/TinyColor git https://github.com/bgrins/TinyColor.git">

  <meta content="95570" name="octolytics-dimension-user_id" /><meta content="bgrins" name="octolytics-dimension-user_login" /><meta content="1973790" name="octolytics-dimension-repository_id" /><meta content="bgrins/TinyColor" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1973790" name="octolytics-dimension-repository_network_root_id" /><meta content="bgrins/TinyColor" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/bgrins/TinyColor/commits/master.atom" rel="alternate" title="Recent Commits to TinyColor:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/bgrins/TinyColor/blob/master/dist/tinycolor-min.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/search" class="js-site-search-form" data-scoped-search-url="/bgrins/TinyColor/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:9552627" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="bgrins/TinyColor">This repository</span>
  </div>
    <a class="dropdown-item" href="/bgrins/TinyColor/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/oskarOlausson"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@oskarOlausson" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/9552627?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">oskarOlausson</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/oskarOlausson" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/oskarOlausson?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dBwx5j0rhSsOKoaT6ujOpSHTLgSqf0U2ZcdWSN59J7CmX3zP7qhyoe5Fg9ooxPZe7IB8sWYPHuahdxkO9iESpw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XUWPBoXqv56pm9BGPIpBA2R4j6iTflebVswC+nbkkJ/ZEnd7WyW1dqeUZQFahhix1nJ/KnvDK+ZerzTcS+kLqA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="1973790" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/bgrins/TinyColor/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/bgrins/TinyColor/watchers"
            aria-label="48 users are watching this repository">
            48
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/unstar" class="starred" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jw4VRWdvEPmzFdbOdXLjCTbbw9bE+0B8y1E2YxvRMcxo0FOOJJD/r4MeSeNA1Oj9dI0dX8EKdQ7LtgQfXb1QpA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar bgrins/TinyColor"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/bgrins/TinyColor/stargazers"
           aria-label="1332 users starred this repository">
          1,332
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/star" class="unstarred" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Vz/okd7WnVXSuiOidoNkfdclQiSjhMQkUKzA/lQol85Beymxb5KmeP/8z1/ZVXvCbJA45lkBguHbcrB8Pe34OA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star bgrins/TinyColor"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/bgrins/TinyColor/stargazers"
           aria-label="1332 users starred this repository">
          1,332
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/fork" class="btn-with-count" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="O8vRmB/Z3UoSIrxIJd3m9EU9CNmB22bCVFqDR/qSyhB9G8SbzlJ24CPJqxiFTno86CLG0dpQcvnSHw3YhfB0LQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of bgrins/TinyColor to your account"
                aria-label="Fork your own copy of bgrins/TinyColor to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/bgrins/TinyColor/network" class="social-count"
       aria-label="188 users are forked this repository">
      188
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/bgrins" class="url fn" rel="author">bgrins</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/bgrins/TinyColor" data-pjax="#js-repo-pjax-container">TinyColor</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/bgrins/TinyColor" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /bgrins/TinyColor" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/bgrins/TinyColor/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /bgrins/TinyColor/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">28</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/bgrins/TinyColor/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /bgrins/TinyColor/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">12</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/bgrins/TinyColor/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /bgrins/TinyColor/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/bgrins/TinyColor/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /bgrins/TinyColor/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/bgrins/TinyColor/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /bgrins/TinyColor/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/bgrins/TinyColor/blob/80f7225029c428c0de0757f7d98ac15f497bee57/dist/tinycolor-min.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ac00ffb6e4b14b7141d2c39587e5461f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/fromRatio/dist/tinycolor-min.js"
               data-name="fromRatio"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fromRatio
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/gh-pages/dist/tinycolor-min.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/invalidObject/dist/tinycolor-min.js"
               data-name="invalidObject"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                invalidObject
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/issue22/dist/tinycolor-min.js"
               data-name="issue22"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                issue22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/bgrins/TinyColor/blob/master/dist/tinycolor-min.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/npm/dist/tinycolor-min.js"
               data-name="npm"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                npm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/prgb/dist/tinycolor-min.js"
               data-name="prgb"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                prgb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/readable/dist/tinycolor-min.js"
               data-name="readable"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                readable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/use-strict/dist/tinycolor-min.js"
               data-name="use-strict"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                use-strict
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bgrins/TinyColor/blob/v1api/dist/tinycolor-min.js"
               data-name="v1api"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1api
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/v0.9.14/dist/tinycolor-min.js"
              data-name="v0.9.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.14">
                v0.9.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.4.1/dist/tinycolor-min.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.4.0/dist/tinycolor-min.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.3.0/dist/tinycolor-min.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.2.1/dist/tinycolor-min.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.2.0/dist/tinycolor-min.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.1.2/dist/tinycolor-min.js"
              data-name="1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.2">
                1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.1.1/dist/tinycolor-min.js"
              data-name="1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.1">
                1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.1.0/dist/tinycolor-min.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/1.0.0/dist/tinycolor-min.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.11.2/dist/tinycolor-min.js"
              data-name="0.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.2">
                0.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.11.1/dist/tinycolor-min.js"
              data-name="0.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.1">
                0.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.11.0/dist/tinycolor-min.js"
              data-name="0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.0">
                0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.10.0/dist/tinycolor-min.js"
              data-name="0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.10.0">
                0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.9.18/dist/tinycolor-min.js"
              data-name="0.9.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.18">
                0.9.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.9.17/dist/tinycolor-min.js"
              data-name="0.9.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.17">
                0.9.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.9.16/dist/tinycolor-min.js"
              data-name="0.9.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.16">
                0.9.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bgrins/TinyColor/tree/0.9.15/dist/tinycolor-min.js"
              data-name="0.9.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.15">
                0.9.15
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/bgrins/TinyColor/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/bgrins/TinyColor"><span>TinyColor</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/bgrins/TinyColor/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">tinycolor-min.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/bgrins/TinyColor/commit/80f7225029c428c0de0757f7d98ac15f497bee57" data-pjax>
          80f7225
        </a>
        <relative-time datetime="2016-07-08T01:44:51Z">Jul 8, 2016</relative-time>
      </span>
      <div>
        <img alt="@bgrins" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/95570?v=3&amp;s=40" width="20" />
        <a href="/bgrins" class="user-mention" rel="author">bgrins</a>
          <a href="/bgrins/TinyColor/commit/80f7225029c428c0de0757f7d98ac15f497bee57" class="message" data-pjax="true" title="prep for 1.4.1">prep for 1.4.1</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@bgrins" height="24" src="https://avatars0.githubusercontent.com/u/95570?v=3&amp;s=48" width="24" />
            <a href="/bgrins">bgrins</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/bgrins/TinyColor/raw/master/dist/tinycolor-min.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/bgrins/TinyColor/blame/master/dist/tinycolor-min.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/bgrins/TinyColor/commits/master/dist/tinycolor-min.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/bgrins/TinyColor?branch=master&amp;filepath=dist%2Ftinycolor-min.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/edit/master/dist/tinycolor-min.js" class="inline-form js-update-url-with-hash" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eHDOWYNf9Hw/oz2bqB+YeuzbnoTEzsU6MtzxHtbGO83FuRZFUwcOc28eDz+CnnaskKLYjRQvIWqIdw0uqyObow==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bgrins/TinyColor/delete/master/dist/tinycolor-min.js" class="inline-form" data-form-nonce="84a6b0e3b5526145d2b96782dac1cc01c8736e97" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="306w+4EUlGJfca8fsO5pXWILZFI7lpgR8YisAA4dCOLu1Cjxwth4nfKOFcn/ceLgDag3qaulU404NZ8V4ZKcZA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      4 lines (4 sloc)
      <span class="file-info-divider"></span>
    14.4 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// TinyColor v1.4.1</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// https://github.com/bgrins/TinyColor</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// 2016-07-07, Brian Grinstead, MIT License</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">!function(a){function b(a,d){if(a=a?a:&quot;&quot;,d=d||{},a instanceof b)return a;if(!(this instanceof b))return new b(a,d);var e=c(a);this._originalInput=a,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=P(100*this._a)/100,this._format=d.format||e.format,this._gradientType=d.gradientType,this._r&lt;1&amp;&amp;(this._r=P(this._r)),this._g&lt;1&amp;&amp;(this._g=P(this._g)),this._b&lt;1&amp;&amp;(this._b=P(this._b)),this._ok=e.ok,this._tc_id=O++}function c(a){var b={r:0,g:0,b:0},c=1,e=null,g=null,i=null,j=!1,k=!1;return&quot;string&quot;==typeof a&amp;&amp;(a=K(a)),&quot;object&quot;==typeof a&amp;&amp;(J(a.r)&amp;&amp;J(a.g)&amp;&amp;J(a.b)?(b=d(a.r,a.g,a.b),j=!0,k=&quot;%&quot;===String(a.r).substr(-1)?&quot;prgb&quot;:&quot;rgb&quot;):J(a.h)&amp;&amp;J(a.s)&amp;&amp;J(a.v)?(e=G(a.s),g=G(a.v),b=h(a.h,e,g),j=!0,k=&quot;hsv&quot;):J(a.h)&amp;&amp;J(a.s)&amp;&amp;J(a.l)&amp;&amp;(e=G(a.s),i=G(a.l),b=f(a.h,e,i),j=!0,k=&quot;hsl&quot;),a.hasOwnProperty(&quot;a&quot;)&amp;&amp;(c=a.a)),c=z(c),{ok:j,format:a.format||k,r:Q(255,R(b.r,0)),g:Q(255,R(b.g,0)),b:Q(255,R(b.b,0)),a:c}}function d(a,b,c){return{r:255*A(a,255),g:255*A(b,255),b:255*A(c,255)}}function e(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h&gt;.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c&gt;b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0&gt;c&amp;&amp;(c+=1),c&gt;1&amp;&amp;(c-=1),1/6&gt;c?a+6*(b-a)*c:.5&gt;c?b:2/3&gt;c?a+6*(b-a)*(2/3-c):a}var e,f,g;if(a=A(a,360),b=A(b,100),c=A(c,100),0===b)e=f=g=c;else{var h=.5&gt;c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c&gt;b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(b,c,d){b=6*A(b,360),c=A(c,100),d=A(d,100);var e=a.floor(b),f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6,k=[d,h,g,g,i,d][j],l=[i,d,d,h,g,g][j],m=[g,g,i,d,d,h][j];return{r:255*k,g:255*l,b:255*m}}function i(a,b,c,d){var e=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return d&amp;&amp;e[0].charAt(0)==e[0].charAt(1)&amp;&amp;e[1].charAt(0)==e[1].charAt(1)&amp;&amp;e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join(&quot;&quot;)}function j(a,b,c,d,e){var f=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16)),F(H(d))];return e&amp;&amp;f[0].charAt(0)==f[0].charAt(1)&amp;&amp;f[1].charAt(0)==f[1].charAt(1)&amp;&amp;f[2].charAt(0)==f[2].charAt(1)&amp;&amp;f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join(&quot;&quot;)}function k(a,b,c,d){var e=[F(H(d)),F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return e.join(&quot;&quot;)}function l(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=B(d.s),b(d)}function m(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=B(d.s),b(d)}function n(a){return b(a).desaturate(100)}function o(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=B(d.l),b(d)}function p(a,c){c=0===c?0:c||10;var d=b(a).toRgb();return d.r=R(0,Q(255,d.r-P(255*-(c/100)))),d.g=R(0,Q(255,d.g-P(255*-(c/100)))),d.b=R(0,Q(255,d.b-P(255*-(c/100)))),b(d)}function q(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=B(d.l),b(d)}function r(a,c){var d=b(a).toHsl(),e=(d.h+c)%360;return d.h=0&gt;e?360+e:e,b(d)}function s(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)}function t(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]}function u(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]}function v(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]}function w(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c&gt;&gt;1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g}function x(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h}function y(a){var b={};for(var c in a)a.hasOwnProperty(c)&amp;&amp;(b[a[c]]=c);return b}function z(a){return a=parseFloat(a),(isNaN(a)||0&gt;a||a&gt;1)&amp;&amp;(a=1),a}function A(b,c){D(b)&amp;&amp;(b=&quot;100%&quot;);var d=E(b);return b=Q(c,R(0,parseFloat(b))),d&amp;&amp;(b=parseInt(b*c,10)/100),a.abs(b-c)&lt;1e-6?1:b%c/parseFloat(c)}function B(a){return Q(1,R(0,a))}function C(a){return parseInt(a,16)}function D(a){return&quot;string&quot;==typeof a&amp;&amp;-1!=a.indexOf(&quot;.&quot;)&amp;&amp;1===parseFloat(a)}function E(a){return&quot;string&quot;==typeof a&amp;&amp;-1!=a.indexOf(&quot;%&quot;)}function F(a){return 1==a.length?&quot;0&quot;+a:&quot;&quot;+a}function G(a){return 1&gt;=a&amp;&amp;(a=100*a+&quot;%&quot;),a}function H(b){return a.round(255*parseFloat(b)).toString(16)}function I(a){return C(a)/255}function J(a){return!!V.CSS_UNIT.exec(a)}function K(a){a=a.replace(M,&quot;&quot;).replace(N,&quot;&quot;).toLowerCase();var b=!1;if(T[a])a=T[a],b=!0;else if(&quot;transparent&quot;==a)return{r:0,g:0,b:0,a:0,format:&quot;name&quot;};var c;return(c=V.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=V.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=V.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=V.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=V.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=V.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=V.hex8.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),a:I(c[4]),format:b?&quot;name&quot;:&quot;hex8&quot;}:(c=V.hex6.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),format:b?&quot;name&quot;:&quot;hex&quot;}:(c=V.hex4.exec(a))?{r:C(c[1]+&quot;&quot;+c[1]),g:C(c[2]+&quot;&quot;+c[2]),b:C(c[3]+&quot;&quot;+c[3]),a:I(c[4]+&quot;&quot;+c[4]),format:b?&quot;name&quot;:&quot;hex8&quot;}:(c=V.hex3.exec(a))?{r:C(c[1]+&quot;&quot;+c[1]),g:C(c[2]+&quot;&quot;+c[2]),b:C(c[3]+&quot;&quot;+c[3]),format:b?&quot;name&quot;:&quot;hex&quot;}:!1}function L(a){var b,c;return a=a||{level:&quot;AA&quot;,size:&quot;small&quot;},b=(a.level||&quot;AA&quot;).toUpperCase(),c=(a.size||&quot;small&quot;).toLowerCase(),&quot;AA&quot;!==b&amp;&amp;&quot;AAA&quot;!==b&amp;&amp;(b=&quot;AA&quot;),&quot;small&quot;!==c&amp;&amp;&quot;large&quot;!==c&amp;&amp;(c=&quot;small&quot;),{level:b,size:c}}var M=/^\s+/,N=/\s+$/,O=0,P=a.round,Q=a.min,R=a.max,S=a.random;b.prototype={isDark:function(){return this.getBrightness()&lt;128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var b,c,d,e,f,g,h=this.toRgb();return b=h.r/255,c=h.g/255,d=h.b/255,e=.03928&gt;=b?b/12.92:a.pow((b+.055)/1.055,2.4),f=.03928&gt;=c?c/12.92:a.pow((c+.055)/1.055,2.4),g=.03928&gt;=d?d/12.92:a.pow((d+.055)/1.055,2.4),.2126*e+.7152*f+.0722*g},setAlpha:function(a){return this._a=z(a),this._roundA=P(100*this._a)/100,this},toHsv:function(){var a=g(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=g(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.v);return 1==this._a?&quot;hsv(&quot;+b+&quot;, &quot;+c+&quot;%, &quot;+d+&quot;%)&quot;:&quot;hsva(&quot;+b+&quot;, &quot;+c+&quot;%, &quot;+d+&quot;%, &quot;+this._roundA+&quot;)&quot;},toHsl:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=e(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.l);return 1==this._a?&quot;hsl(&quot;+b+&quot;, &quot;+c+&quot;%, &quot;+d+&quot;%)&quot;:&quot;hsla(&quot;+b+&quot;, &quot;+c+&quot;%, &quot;+d+&quot;%, &quot;+this._roundA+&quot;)&quot;},toHex:function(a){return i(this._r,this._g,this._b,a)},toHexString:function(a){return&quot;#&quot;+this.toHex(a)},toHex8:function(a){return j(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return&quot;#&quot;+this.toHex8(a)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?&quot;rgb(&quot;+P(this._r)+&quot;, &quot;+P(this._g)+&quot;, &quot;+P(this._b)+&quot;)&quot;:&quot;rgba(&quot;+P(this._r)+&quot;, &quot;+P(this._g)+&quot;, &quot;+P(this._b)+&quot;, &quot;+this._roundA+&quot;)&quot;},toPercentageRgb:function(){return{r:P(100*A(this._r,255))+&quot;%&quot;,g:P(100*A(this._g,255))+&quot;%&quot;,b:P(100*A(this._b,255))+&quot;%&quot;,a:this._a}},toPercentageRgbString:function(){return 1==this._a?&quot;rgb(&quot;+P(100*A(this._r,255))+&quot;%, &quot;+P(100*A(this._g,255))+&quot;%, &quot;+P(100*A(this._b,255))+&quot;%)&quot;:&quot;rgba(&quot;+P(100*A(this._r,255))+&quot;%, &quot;+P(100*A(this._g,255))+&quot;%, &quot;+P(100*A(this._b,255))+&quot;%, &quot;+this._roundA+&quot;)&quot;},toName:function(){return 0===this._a?&quot;transparent&quot;:this._a&lt;1?!1:U[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var c=&quot;#&quot;+k(this._r,this._g,this._b,this._a),d=c,e=this._gradientType?&quot;GradientType = 1, &quot;:&quot;&quot;;if(a){var f=b(a);d=&quot;#&quot;+k(f._r,f._g,f._b,f._a)}return&quot;progid:DXImageTransform.Microsoft.gradient(&quot;+e+&quot;startColorstr=&quot;+c+&quot;,endColorstr=&quot;+d+&quot;)&quot;},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a&lt;1&amp;&amp;this._a&gt;=0,e=!b&amp;&amp;d&amp;&amp;(&quot;hex&quot;===a||&quot;hex6&quot;===a||&quot;hex3&quot;===a||&quot;hex4&quot;===a||&quot;hex8&quot;===a||&quot;name&quot;===a);return e?&quot;name&quot;===a&amp;&amp;0===this._a?this.toName():this.toRgbString():(&quot;rgb&quot;===a&amp;&amp;(c=this.toRgbString()),&quot;prgb&quot;===a&amp;&amp;(c=this.toPercentageRgbString()),(&quot;hex&quot;===a||&quot;hex6&quot;===a)&amp;&amp;(c=this.toHexString()),&quot;hex3&quot;===a&amp;&amp;(c=this.toHexString(!0)),&quot;hex4&quot;===a&amp;&amp;(c=this.toHex8String(!0)),&quot;hex8&quot;===a&amp;&amp;(c=this.toHex8String()),&quot;name&quot;===a&amp;&amp;(c=this.toName()),&quot;hsl&quot;===a&amp;&amp;(c=this.toHslString()),&quot;hsv&quot;===a&amp;&amp;(c=this.toHsvString()),c||this.toHexString())},clone:function(){return b(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(q,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(n,arguments)},spin:function(){return this._applyModification(r,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(s,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(t,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}},b.fromRatio=function(a,c){if(&quot;object&quot;==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&amp;&amp;(d[e]=&quot;a&quot;===e?a[e]:G(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&amp;&amp;c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:S(),g:S(),b:S()})},b.mix=function(a,c,d){d=0===d?0:d||50;var e=b(a).toRgb(),f=b(c).toRgb(),g=d/100,h={r:(f.r-e.r)*g+e.r,g:(f.g-e.g)*g+e.g,b:(f.b-e.b)*g+e.b,a:(f.a-e.a)*g+e.a};return b(h)},b.readability=function(c,d){var e=b(c),f=b(d);return(a.max(e.getLuminance(),f.getLuminance())+.05)/(a.min(e.getLuminance(),f.getLuminance())+.05)},b.isReadable=function(a,c,d){var e,f,g=b.readability(a,c);switch(f=!1,e=L(d),e.level+e.size){case&quot;AAsmall&quot;:case&quot;AAAlarge&quot;:f=g&gt;=4.5;break;case&quot;AAlarge&quot;:f=g&gt;=3;break;case&quot;AAAsmall&quot;:f=g&gt;=7}return f},b.mostReadable=function(a,c,d){var e,f,g,h,i=null,j=0;d=d||{},f=d.includeFallbackColors,g=d.level,h=d.size;for(var k=0;k&lt;c.length;k++)e=b.readability(a,c[k]),e&gt;j&amp;&amp;(j=e,i=b(c[k]));return b.isReadable(a,i,{level:g,size:h})||!f?i:(d.includeFallbackColors=!1,b.mostReadable(a,[&quot;#fff&quot;,&quot;#000&quot;],d))};var T=b.names={aliceblue:&quot;f0f8ff&quot;,antiquewhite:&quot;faebd7&quot;,aqua:&quot;0ff&quot;,aquamarine:&quot;7fffd4&quot;,azure:&quot;f0ffff&quot;,beige:&quot;f5f5dc&quot;,bisque:&quot;ffe4c4&quot;,black:&quot;000&quot;,blanchedalmond:&quot;ffebcd&quot;,blue:&quot;00f&quot;,blueviolet:&quot;8a2be2&quot;,brown:&quot;a52a2a&quot;,burlywood:&quot;deb887&quot;,burntsienna:&quot;ea7e5d&quot;,cadetblue:&quot;5f9ea0&quot;,chartreuse:&quot;7fff00&quot;,chocolate:&quot;d2691e&quot;,coral:&quot;ff7f50&quot;,cornflowerblue:&quot;6495ed&quot;,cornsilk:&quot;fff8dc&quot;,crimson:&quot;dc143c&quot;,cyan:&quot;0ff&quot;,darkblue:&quot;00008b&quot;,darkcyan:&quot;008b8b&quot;,darkgoldenrod:&quot;b8860b&quot;,darkgray:&quot;a9a9a9&quot;,darkgreen:&quot;006400&quot;,darkgrey:&quot;a9a9a9&quot;,darkkhaki:&quot;bdb76b&quot;,darkmagenta:&quot;8b008b&quot;,darkolivegreen:&quot;556b2f&quot;,darkorange:&quot;ff8c00&quot;,darkorchid:&quot;9932cc&quot;,darkred:&quot;8b0000&quot;,darksalmon:&quot;e9967a&quot;,darkseagreen:&quot;8fbc8f&quot;,darkslateblue:&quot;483d8b&quot;,darkslategray:&quot;2f4f4f&quot;,darkslategrey:&quot;2f4f4f&quot;,darkturquoise:&quot;00ced1&quot;,darkviolet:&quot;9400d3&quot;,deeppink:&quot;ff1493&quot;,deepskyblue:&quot;00bfff&quot;,dimgray:&quot;696969&quot;,dimgrey:&quot;696969&quot;,dodgerblue:&quot;1e90ff&quot;,firebrick:&quot;b22222&quot;,floralwhite:&quot;fffaf0&quot;,forestgreen:&quot;228b22&quot;,fuchsia:&quot;f0f&quot;,gainsboro:&quot;dcdcdc&quot;,ghostwhite:&quot;f8f8ff&quot;,gold:&quot;ffd700&quot;,goldenrod:&quot;daa520&quot;,gray:&quot;808080&quot;,green:&quot;008000&quot;,greenyellow:&quot;adff2f&quot;,grey:&quot;808080&quot;,honeydew:&quot;f0fff0&quot;,hotpink:&quot;ff69b4&quot;,indianred:&quot;cd5c5c&quot;,indigo:&quot;4b0082&quot;,ivory:&quot;fffff0&quot;,khaki:&quot;f0e68c&quot;,lavender:&quot;e6e6fa&quot;,lavenderblush:&quot;fff0f5&quot;,lawngreen:&quot;7cfc00&quot;,lemonchiffon:&quot;fffacd&quot;,lightblue:&quot;add8e6&quot;,lightcoral:&quot;f08080&quot;,lightcyan:&quot;e0ffff&quot;,lightgoldenrodyellow:&quot;fafad2&quot;,lightgray:&quot;d3d3d3&quot;,lightgreen:&quot;90ee90&quot;,lightgrey:&quot;d3d3d3&quot;,lightpink:&quot;ffb6c1&quot;,lightsalmon:&quot;ffa07a&quot;,lightseagreen:&quot;20b2aa&quot;,lightskyblue:&quot;87cefa&quot;,lightslategray:&quot;789&quot;,lightslategrey:&quot;789&quot;,lightsteelblue:&quot;b0c4de&quot;,lightyellow:&quot;ffffe0&quot;,lime:&quot;0f0&quot;,limegreen:&quot;32cd32&quot;,linen:&quot;faf0e6&quot;,magenta:&quot;f0f&quot;,maroon:&quot;800000&quot;,mediumaquamarine:&quot;66cdaa&quot;,mediumblue:&quot;0000cd&quot;,mediumorchid:&quot;ba55d3&quot;,mediumpurple:&quot;9370db&quot;,mediumseagreen:&quot;3cb371&quot;,mediumslateblue:&quot;7b68ee&quot;,mediumspringgreen:&quot;00fa9a&quot;,mediumturquoise:&quot;48d1cc&quot;,mediumvioletred:&quot;c71585&quot;,midnightblue:&quot;191970&quot;,mintcream:&quot;f5fffa&quot;,mistyrose:&quot;ffe4e1&quot;,moccasin:&quot;ffe4b5&quot;,navajowhite:&quot;ffdead&quot;,navy:&quot;000080&quot;,oldlace:&quot;fdf5e6&quot;,olive:&quot;808000&quot;,olivedrab:&quot;6b8e23&quot;,orange:&quot;ffa500&quot;,orangered:&quot;ff4500&quot;,orchid:&quot;da70d6&quot;,palegoldenrod:&quot;eee8aa&quot;,palegreen:&quot;98fb98&quot;,paleturquoise:&quot;afeeee&quot;,palevioletred:&quot;db7093&quot;,papayawhip:&quot;ffefd5&quot;,peachpuff:&quot;ffdab9&quot;,peru:&quot;cd853f&quot;,pink:&quot;ffc0cb&quot;,plum:&quot;dda0dd&quot;,powderblue:&quot;b0e0e6&quot;,purple:&quot;800080&quot;,rebeccapurple:&quot;663399&quot;,red:&quot;f00&quot;,rosybrown:&quot;bc8f8f&quot;,royalblue:&quot;4169e1&quot;,saddlebrown:&quot;8b4513&quot;,salmon:&quot;fa8072&quot;,sandybrown:&quot;f4a460&quot;,seagreen:&quot;2e8b57&quot;,seashell:&quot;fff5ee&quot;,sienna:&quot;a0522d&quot;,silver:&quot;c0c0c0&quot;,skyblue:&quot;87ceeb&quot;,slateblue:&quot;6a5acd&quot;,slategray:&quot;708090&quot;,slategrey:&quot;708090&quot;,snow:&quot;fffafa&quot;,springgreen:&quot;00ff7f&quot;,steelblue:&quot;4682b4&quot;,tan:&quot;d2b48c&quot;,teal:&quot;008080&quot;,thistle:&quot;d8bfd8&quot;,tomato:&quot;ff6347&quot;,turquoise:&quot;40e0d0&quot;,violet:&quot;ee82ee&quot;,wheat:&quot;f5deb3&quot;,white:&quot;fff&quot;,whitesmoke:&quot;f5f5f5&quot;,yellow:&quot;ff0&quot;,yellowgreen:&quot;9acd32&quot;},U=b.hexNames=y(T),V=function(){var a=&quot;[-\\+]?\\d+%?&quot;,b=&quot;[-\\+]?\\d*\\.\\d+%?&quot;,c=&quot;(?:&quot;+b+&quot;)|(?:&quot;+a+&quot;)&quot;,d=&quot;[\\s|\\(]+(&quot;+c+&quot;)[,|\\s]+(&quot;+c+&quot;)[,|\\s]+(&quot;+c+&quot;)\\s*\\)?&quot;,e=&quot;[\\s|\\(]+(&quot;+c+&quot;)[,|\\s]+(&quot;+c+&quot;)[,|\\s]+(&quot;+c+&quot;)[,|\\s]+(&quot;+c+&quot;)\\s*\\)?&quot;;return{CSS_UNIT:new RegExp(c),rgb:new RegExp(&quot;rgb&quot;+d),rgba:new RegExp(&quot;rgba&quot;+e),hsl:new RegExp(&quot;hsl&quot;+d),hsla:new RegExp(&quot;hsla&quot;+e),hsv:new RegExp(&quot;hsv&quot;+d),hsva:new RegExp(&quot;hsva&quot;+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();&quot;undefined&quot;!=typeof module&amp;&amp;module.exports?module.exports=b:&quot;function&quot;==typeof define&amp;&amp;define.amd?define(function(){return b}):window.tinycolor=b}(Math);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.08054s from github-fe-83bc574.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-NbnFQdNBMJuTCxx5D6GyejDHxEzhDH+CQokOPYPIrb0=" src="https://assets-cdn.github.com/assets/frameworks-35b9c541d341309b930b1c790fa1b27a30c7c44ce10c7f8242890e3d83c8adbd.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ee7ezL8InaTNQ+i1KZ5Kwz0PoDyqQuk2ZJwj4bIYOrg=" src="https://assets-cdn.github.com/assets/github-79eedeccbf089da4cd43e8b5299e4ac33d0fa03caa42e936649c23e1b2183ab8.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

