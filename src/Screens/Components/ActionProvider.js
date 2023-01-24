class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBotOptionsList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for:",
      {
        widget: "BotOptionsList",
      }
    );
  
    this.updateChatbotState(message);
  };
  ShowCardsList = () => {
    const message = this.createChatBotMessage(
      "Select Your Card:",
      {
        widget: "CardsList",
      }
    );
  
    this.updateChatbotState(message);
  };
  ShowStolenCardOptions = () => {
    const message = this.createChatBotMessage(
      "Select action:",
      {
        widget: "StolenCardOptionsList",
      }
    );
  
    this.updateChatbotState(message);
  };
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  askAccountNumber() {
    const askAccountNoMessage = this.createChatBotMessage("Could you please help me with your account number?")
    this.updateChatbotState(askAccountNoMessage)
  }
  askPin() {
    const askPin = this.createChatBotMessage("Could you please help me with your account pin?")
    this.updateChatbotState(askPin)
  }
  showBalance() {
    const showBalance = this.createChatBotMessage("Your accunt balance is 20,0000,000 Rs.")
    this.updateChatbotState(showBalance)
    this.thankYou()
  }
  thankYou() {
    const thankYou = this.createChatBotMessage("Thank you")
    this.updateChatbotState(thankYou)
  }
  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;