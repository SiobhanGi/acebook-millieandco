const date = new Date();
const modifiedDate = date.toISOString().substring(0,10);

module.exports = {
  'check title is post': function (client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible('h1.posts-title', 2000)
      .assert.containsText('h1.posts-title', 'Posts')
  },


  'creating a post': function (client) {
    const testText = 'Acebook is amazing';
    client
      .url("http://localhost:8080")
      .waitForElementVisible('input.post-input', 2000)
      .setValue('input.post-input', testText)
      .click('input.post-submit')
      .waitForElementVisible('div.post-content', 2000)
      .assert.containsText('div.post-content', testText)
      .assert.containsText('div.post-content', modifiedDate)
  },

  'posts display in reverse chronological order': function(client) {
    const testText = 'Acebook sucks';
    client
      .url("http://localhost:8080")
      .waitForElementVisible('input.post-input', 2000)
      .setValue('input.post-input', testText)
      .click('input.post-submit')
      .waitForElementVisible('div.post-content:nth-child(2)', 2000)
      .assert.containsText('div.post-content:nth-child(1)', testText)
      .assert.containsText('div.post-content:nth-child(1)', modifiedDate)
  }
}
