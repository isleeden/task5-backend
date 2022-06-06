const Message = require("../models/Message");

module.exports = class MessageService {
  static async getMessage(id) {
    const message = await Message.findOne({ where: { id } });
    const replyTo = await Message.findOne({ where: { id: message.replyId } });
    return { message, replyTo };
  }

  static async getInboxMessages(recipient) {
    return await Message.findAll({
      where: { recipient },
      order: [["id", "DESC"]],
    });
  }

  static async getSentMessages(author) {
    return await Message.findAll({
      where: { author },
      order: [["id", "DESC"]],
    });
  }

  static async sendMessage({ title, author, recipients, replyId, message }) {
    console.log(recipients);
    for (const recipient of recipients) {
      await Message.create({
        title,
        author,
        recipient,
        replyId,
        message,
      });
    }
  }
};
