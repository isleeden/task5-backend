const MessageService = require("../services/MessageService");

module.exports = class Controller {
  static async getMessage(req, res) {
    const { id } = req.params;
    const response = await MessageService.getMessage(id);
    res.json({ ...response });
  }

  static async getInboxMessages(req, res) {
    const { recipient } = req.params;
    const messages = await MessageService.getInboxMessages(recipient);
    res.json({ messages });
  }

  static async getSentMessages(req, res) {
    const { author } = req.params;
    const messages = await MessageService.getSentMessages(author);
    res.json({ messages });
  }

  static async sendMessage(req, res) {
    try {
      const { title, author, recipients, replyId, message } = req.body;
      await MessageService.sendMessage({
        title,
        author,
        recipients,
        replyId,
        message,
      });
      res.json({response: "OK"});
    } catch (e) {
      console.log(e);
    }
  }
};
