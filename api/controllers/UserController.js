/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	
  /**
   * `UserController.register()`
   */
  register: function (req, res, next) {
        
    User.register({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) {
        return next(err);
      }

      req.session.me = user.id;

      if (req.wantsJSON) {
        return res.ok('Register successful!');
      }
      
      return res.redirect('/login');
    });
  },


  /**
   * `UserController.login()`
   */
  login: function (req, res, next) {
    return User.login({
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) {
        return next(err);
      }
      
      if (req.wantsJSON) {
        return res.ok('Login successful!');
      }
      
      return res.redirect('/welcome');
      
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    req.session.me = null;

    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    return res.redirect('/');
  }
  
  
};

