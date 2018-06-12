module.exports = {
  'Sign up page has content Sign Up' : function (client) {
    client
      .url("http://localhost:8080")
      .waitForElementVisible('a.sign-up', 2000)
      .click('a.sign-up')
      .waitForElementVisible('h2.title', 2000)
      .assert.containsText('h2.title', 'Sign Up')
  },

  'Can create user' : function (client) {
    client
      .url("http://localhost:8080")
      .waitForElementVisible('a.sign-up', 2000)
      .click('a.sign-up')
      .waitForElementVisible('div.span3', 2000)
      .setValue('input.first-name', "Luke")
      .setValue('input.last-name', "Sky Walker")
      .setValue('input.email', "luke@jedi.com")
      .setValue('input.password', "yoda11")
      .click('input.submit')
      .url("http://localhost:8080/api/users")
      .
  }
}
