Browser("Browser_2").Navigate "http://m4012926:8080/tc/webclient"
Browser("Browser_2").Page("Teamcenter Login").WebEdit("j_username").Set "amandrav" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser_2").Page("Teamcenter Login").WebEdit("j_password").SetSecure "5b71c3dc4be5a6e817da81e398e944b5fee3460fc77d" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser_2").Page("Teamcenter Login").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
