module.exports.config = {
  name: "replyBoss",
  eventType: ["message_reply"],
  version: "1.0.0",
  credits: "SAJIB",
  description: "Reply warning"
};

module.exports.run = async function ({ api, event }) {
  const bossUID = "61591438445216"; // এখানে আপনার Facebook UID দিন

  if (
    event.messageReply &&
    event.messageReply.senderID == bossUID &&
    event.senderID != bossUID
  ) {
    return api.sendMessage(
      "🫡 মুকুল বসের পক্ষে থেকে 9‌টাকায় 90জিবি 1বছরের এমবির অফার 🔪..!",
      event.threadID,
      event.messageID
    );
  }
};
