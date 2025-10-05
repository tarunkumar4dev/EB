import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help with your questions about Education Beast. You can ask me about classes, timings, fees, location, contact details, or book a demo.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const faqResponses = {
    classes: "We teach Class 9–10 (Maths, Science) and Class 11–12 (Arts, Commerce, Science). We specialize in Commerce with dedicated faculty for Accounts, Economics, and Business Studies.",
    timings: "Our class timings are: Weekday 5–8 PM; Weekend Sat–Sun 10 AM–2 PM; Doubt clinic 8–9 PM daily.",
    fees: "Class 11 Commerce combo starts ₹2,500/month. For detailed fee structure and other classes, please contact us for a personalized plan.",
    location: "We're located in Palam, New Delhi, near Palam Metro Station. Very convenient location with easy metro connectivity.",
    contact: "You can reach us at Call/WhatsApp +91-98XXXXXXX or email hello@educationbeast.in. We're always happy to help!",
    demo: "Free demo classes are available daily with limited seats. Book your slot by calling us or filling the contact form on our website.",
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("class") || message.includes("course") || message.includes("subject")) {
      return faqResponses.classes;
    } else if (message.includes("time") || message.includes("schedule") || message.includes("timing")) {
      return faqResponses.timings;
    } else if (message.includes("fee") || message.includes("price") || message.includes("cost") || message.includes("money")) {
      return faqResponses.fees;
    } else if (message.includes("location") || message.includes("address") || message.includes("where") || message.includes("palam")) {
      return faqResponses.location;
    } else if (message.includes("contact") || message.includes("phone") || message.includes("call") || message.includes("whatsapp")) {
      return faqResponses.contact;
    } else if (message.includes("demo") || message.includes("trial") || message.includes("free")) {
      return faqResponses.demo;
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Welcome to Education Beast. How can I help you today? You can ask me about our classes, timings, fees, location, or book a demo.";
    } else {
      return "I can help you with information about our classes, timings, fees, location, contact details, or demo bookings. What would you like to know?";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputValue),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full gradient-button text-primary-foreground shadow-button hover:shadow-lg transition-smooth"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-card border-border/50 bg-card/95 backdrop-blur-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">EB</span>
                </div>
                <span>Education Beast Assistant</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Messages */}
              <div className="h-64 overflow-y-auto space-y-3 pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? "bg-teal-100 text-teal-800 rounded-bl-none"
                          : "gradient-button text-primary-foreground rounded-br-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-background border-border focus:border-primary"
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="gradient-button text-primary-foreground shadow-button px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                {["Classes", "Timings", "Fees", "Demo"].map((topic) => (
                  <Button
                    key={topic}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue(topic.toLowerCase())}
                    className="text-xs border-teal-200 text-teal-700 hover:bg-teal-50"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;