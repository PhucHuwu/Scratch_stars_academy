import { useEffect } from "react";

type Props = {
  chatbotId?: string;
  domain?: string;
};

const ChatBotEmbed = ({ chatbotId = "701s6dCoJK8uMimSHx9Gk", domain = "www.chatbase.co" }: Props) => {
  useEffect(() => {
    // Clean previous storage used by embedded chatbot
    try {
      localStorage.removeItem("chatbase-conversation");
      sessionStorage.removeItem("chatbase-conversation");

      Object.keys(localStorage).forEach((key) => {
        if (key.includes("chatbot") || key.includes("chatbase")) localStorage.removeItem(key);
      });

      Object.keys(sessionStorage).forEach((key) => {
        if (key.includes("chatbot") || key.includes("chatbase")) sessionStorage.removeItem(key);
      });
    } catch (e) {
      // ignore if storage access fails
    }

    const configScript = document.createElement("script");
    configScript.innerHTML = `window.embeddedChatbotConfig = { chatbotId: "${chatbotId}", domain: "${domain}" };`;
    document.body.appendChild(configScript);

    const embedScript = document.createElement("script");
    embedScript.src = `https://${domain}/embed.min.js`;
    embedScript.setAttribute("chatbotId", chatbotId);
    embedScript.setAttribute("domain", domain);
    embedScript.defer = true;
    document.body.appendChild(embedScript);

    return () => {
      try {
        document.body.removeChild(configScript);
        document.body.removeChild(embedScript);
      } catch (e) {
        // ignore
      }
    };
  }, [chatbotId, domain]);

  return null;
};

export default ChatBotEmbed;
