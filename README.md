# Outgoing Webhook for Slack

Vanilla code to quickly deploy an outgoing webhook to be used with Slack.
Outgoing webhooks are for sending data out of Slack. You add the webhook to a specific
channel or to specific keywords and it will fire off on anything on any of the specified triggers.
[Official Documentation](https://api.slack.com/outgoing-webhooks)
## Usage

1. **Fork this repository**

1. **Create a new [Outgoing Webhook](https://onenote.slack.com/apps/new/A0F7VRG6Q-outgoing-webhooks)** on Slack

1. **Deploy it to Heroku** [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
 
1. **Create a new channel** to test the webhook

1. **Copy the Heroku URL** into **URL(s)**

1. **Set the channel** of the webhook the specific webhook

1. **Save your webhook**

1. **Type something** into the created channel, should see "Message Received"

# What's next?

* Ensure the service reads the correct token on the request
* Snazzy up the outgoing webhook with slack integration options
* Dress up the response with [Message Formatting](https://api.slack.com/docs/message-formatting)

# License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).