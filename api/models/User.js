/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  table: 'users',

  attributes: {
    name: {
      type: 'string'
    },
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  
  register: function (inputs, cb) {
    User.create({
      name: inputs.name,
      email: inputs.email,
      // TODO: But encrypt the password first
      password: inputs.password
    })
    .exec(cb);
  },

  login: function (inputs, cb) {
    User.findOne({
      email: inputs.email,
      // TODO: But encrypt the password first
      password: inputs.password
    })
    .exec(cb);
  }
  
};

