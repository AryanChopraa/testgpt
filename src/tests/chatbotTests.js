```javascript
const assert = require('assert');
const { interactChatbot } = require('../controllers/chatbotController');

describe('Chatbot Controller', function() {
  describe('#interactChatbot()', function() {
    it('should return a response when a query is sent', function(done) {
      interactChatbot('What is AI?', function(err, response) {
        assert.equal(err, null);
        assert.notEqual(response, null);
        done();
      });
    });

    it('should handle invalid queries', function(done) {
      interactChatbot('', function(err, response) {
        assert.notEqual(err, null);
        assert.equal(response, null);
        done();
      });
    });
  });
});
```