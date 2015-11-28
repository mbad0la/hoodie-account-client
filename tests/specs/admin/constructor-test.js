var test = require('tape')

var AccountAdmin = require('../../../admin/index')

test('new AccountAdmin(options)', function (t) {
  var accountAdmin = new AccountAdmin({
    url: 'http://localhost:3000/session/account'
  })

  t.is(typeof accountAdmin, 'object', 'AccountAdmin is a constructor')

  t.is(typeof accountAdmin.signUp, 'undefined', 'accountAdmin.signIn is undefined')
  t.is(typeof accountAdmin.signIn, 'function', 'accountAdmin.signIn is a function')
  t.is(typeof accountAdmin.signOut, 'function', 'accountAdmin.signOut is a function')

  t.is(typeof accountAdmin.accounts.add, 'function', 'accountAdmin.accounts.add is a function')
  t.is(typeof accountAdmin.accounts.find, 'function', 'accountAdmin.accounts.find is a function')
  t.is(typeof accountAdmin.accounts.findAll, 'function', 'accountAdmin.accounts.findAll is a function')
  t.is(typeof accountAdmin.accounts.update, 'function', 'accountAdmin.accounts.update is a function')
  t.is(typeof accountAdmin.accounts.remove, 'function', 'accountAdmin.accounts.remove is a function')

  t.end()
})

test('AccountAdmin(options) w/o new', function (t) {
  var accountAdmin = AccountAdmin({
    url: 'http://localhost:3000/session/account'
  })

  t.is(typeof accountAdmin, 'object', 'AccountAdmin is a constructor')

  t.end()
})

test('new AccountAdmin() w/o options', function (t) {
  t.throws(AccountAdmin, 'throws error')

  t.end()
})

test('new AccountAdmin() w/o options.url', function (t) {
  t.throws(AccountAdmin.bind(null, { validate: function () {} }), 'throws error')

  t.end()
})