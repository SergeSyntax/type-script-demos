"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    else {
        res.status(403).send('Not permitted');
    }
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form action=\"/login\" method=\"post\">\n      <div>\n        <label htmlFor=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" id=\"email\"/>\n      </div>\n      <div>\n        <label htmlFor=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\"/>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else
        res.send('Invalid email or password');
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn)
        res.send("\n  <div>\n    <div>You are logged in</div>\n    <a href=\"/logout\">logout</a>\n  </div>\n  ");
    else
        res.send("\n  <div>\n    <div>You are not logged in</div>\n    <a href=\"/login\">Login</a>\n  </div>\n  ");
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/potected', requireAuth, function (req, res) {
    res.send('Welcome to proteceted route, logged in user!');
});
