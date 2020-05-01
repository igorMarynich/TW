// @ts-nocheck
import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import $ from 'jquery';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: null,
    };
  }

  getToken = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        messages: [...this.state.messages, { body: `Connecting...` }],
      });

      $.getJSON('/token', token => {
        this.setState({ username: token.identity });
        resolve(token);
      }).fail(() => {
        reject(Error('Failed to connect.'));
      });
    });
  };

  componentDidMount = () => {
    this.getToken().catch(error => {
      this.setState({
        messages: [...this.state.messages, { body: `Error: ${error.message}` }],
      });
    });
  };

  configureChannelEvents = channel => {
    channel.on('messageAdded', ({ author, body }) => {
      this.addMessage({ author, body });
    });

    channel.on('memberJoined', member => {
      this.addMessage({ body: `${member.identity} has joined the channel.` });
    });

    channel.on('memberLeft', member => {
      this.addMessage({ body: `${member.identity} has left the channel.` });
    });
  };

  addMessage = message => {
    const messageData = { ...message, me: message.author === this.state.username };
    this.setState({
      messages: [...this.state.messages, messageData],
    });
  };

  createChatClient = token => {
    return new Promise((resolve, reject) => {
      resolve('twilio'.jwt.AccessToken);
    });
  };

  joinGeneralChannel = chatClient => {
    return new Promise((resolve, reject) => {
      chatClient
        .getSubscribedChannels()
        .then(() => {
          chatClient
            .getChannelByUniqueName('general')
            .then(channel => {
              this.addMessage({ body: 'Joining general channel...' });
              this.setState({ channel });

              channel
                .join()
                .then(() => {
                  this.addMessage({ body: `Joined general channel as ${this.state.username}` });
                  window.addEventListener('beforeunload', () => channel.leave());
                })
                .catch(() => reject(Error('Could not join general channel.')));

              resolve(channel);
            })
            .catch(() => reject(Error('Could not find general channel.')));
        })
        .catch(() => reject(Error('Could not get channel list.')));
    });
  };

  createGeneralChannel = chatClient => {
    return new Promise((resolve, reject) => {
      this.addMessage({ body: 'Creating general channel...' });
      chatClient
        .createChannel({ uniqueName: 'general', friendlyName: 'General Chat' })
        .then(() => this.joinGeneralChannel(chatClient))
        .catch(() => reject(Error('Could not create general channel.')));
    });
  };

  handleNewMessage = text => {
    if (this.state.channel) {
      this.state.channel.sendMessage(text);
    }
  };

  render() {
    return (
      <div className="App" style={{ width: '300px' }}>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}
