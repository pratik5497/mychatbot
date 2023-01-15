class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("chomya")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("check my account balance")) {
        this.actionProvider.askAccountNumber()
      }
      if (lowerCaseMessage.includes("112233445566")) {
        this.actionProvider.askPin()
      }
      if (lowerCaseMessage.includes("1234")) {
        this.actionProvider.showBalance()
      }
      
      
    }
  }
  
  export default MessageParser