<%-- 
    Document   : Login
    Created on : Nov 5, 2018, 2:37:01 AM
    Author     : MTC
--%>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title data-i18n="LOGIN_PAGE_TITLE">Login in</title>
        <meta name="google" content="notranslate">
        <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./Sign in_files/lol.css">
        <link rel="stylesheet" href="./Sign in_files/lol-desktop.css" media="screen and (min-width:640px)">
        <script> function check() {
                var x = document.getElementById("custom-checkbox").className;
                if (x === "custom-checkbox") {
                    document.getElementById("custom-checkbox").className = "custom-checkbox checked";
                } else {
                    document.getElementById("custom-checkbox").className = "custom-checkbox";
                }
            }</script>
    </head>

    <body class="fonts-loaded">
        <div id="login-wrap">
            <header id="login-header">
                <div class="logo"></div>
            </header>
            <div class="panel-frame">
                <div class="panel-content" style="min-height: 521px;">
                    <img id="loc-spinner" src="./Sign in_files/spinner.gif" alt="" style="display: none;">
                    <div class="loc-hide" style="display: block;">
                        <div class="panel-view" style="display:none" id="loading">Loading...</div>
                        <div class="panel-view" style="" id="auth">
                            <form id="login-form" role="form" autocomplete="off" action="Login" method="post">
                                <header>
                                    <h1 data-i18n="Sign_In">Sign In</h1>
                                </header>
                                <p id="login-form-message" style="display: none;"></p>
                                <div class="form-group">
                                    <label for="login-form-username" id="login-form-label-username" data-i18n="Username">Username</label>
                                    <input type="text" class="form-control" id="login-form-username" name="username" autofocus="">
                                </div>
                                <div class="form-group">
                                    <label for="login-form-password" id="login-form-label-password" data-i18n="Password">Password</label>
                                    <input type="password" class="form-control" id="login-form-password" name="password">
                                </div>
                                <div class="form-group">
                                    <label class="custom-checkbox" id ="custom-checkbox" >
                                        <input type="checkbox" id="login-form-remember" name="remember">
                                        <span class="checkbox-image" onclick="check()"></span>
                                        <span class="label" id="login-form-label-remember" data-i18n="Remember_me">Remember me</span>
                                    </label>
                                </div>
                                <div class="form-group" id="recaptcha" data-publickey="6LcGEv8SAAAAAPUTwLPaiMfnJNfedmGj4oww8ITT" style="display:none"></div>
                                <p class="submit">
                                    <button type="submit" class="btn btn-primary btn-block" id="login-button" data-i18n="Sign_In">Sign In</button>
                                    <img id="login-button-spinner" src="./Sign in_files/spinner.gif" alt="" style="display: none;">
                                </p>
                                <div class="help">
                                    <div class="signup">
                                        <p>
                                            <a href="#" data-link="signup" data-i18n="Create_an_Account">Create an account?</a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="panel-view" style="display:none" id="consent">Consent...</div>
                        <div class="panel-view" style="display:none" id="error">
                            <h1 data-i18n="OAuth2_Error" id="error-page">An error occurred! Please try again later.</h1>
                            <p class="description-line" data-i18n="[html]login_server_down">Sorry, the login servers are temporarily unavailable. Please try again later. Check the
                                <a href="http://status.leagueoflegends.com/" target="_blank">service status</a> page for more information.</p>
                        </div>
                    </div>
                </div>
                <div class="panel-frame-sub-border"></div>
            </div>
            <footer id="login-footer" class="loc-hide" style="display: block;">
                <img class="logo" src="./Sign in_files/riot-logo.png" alt="Riot Games">
                <p class="links">
                    <a href="https://support.riotgames.com/hc/en-us" data-i18n="[href]support_site;Support">Support</a> |
                    <a href="http://na.leagueoflegends.com/en/legal/privacy" data-link="privacy" data-i18n="[html]Privacy">Privacy</a> |
                    <a href="http://na.leagueoflegends.com/en/legal/termsofuse" data-link="terms" data-i18n="Legal">Legal</a>
                </p>
                <p class="legal" data-i18n="copyright_notice">© 2013 Riot Games. League of Legends</p>
            </footer>
        </div>
        <iframe id="ibody" src="./Sign in_files/logo.html" style="border: 0px; height: 0px; width: 0px; position: absolute;"></iframe>
    </body>

</html>