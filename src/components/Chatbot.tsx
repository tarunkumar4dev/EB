// src/components/Chatbot.tsx
import { useState, useEffect, useRef } from "react";
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
      text:
        "Hi! I'm your Education Beast assistant 🤖. Ask me anything about admissions, classes, timings, fees, facilities, or policies.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // ---- AUTOSCROLL REFS & HELPER ----
  const listRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    // double RAF to ensure DOM paint is done before scrolling
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (listRef.current) {
          listRef.current.scrollTop = listRef.current.scrollHeight;
        } else {
          endRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  };

  // scroll when messages change or when panel opens
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  /* --------------------- FAQ DATASET --------------------- */
  const faqResponses: Record<string, string> = {
    // Category 1
    vision:
      "Our vision is to be a leading center for excellence in education, fostering innovative and responsible global citizens. Our mission is to provide a holistic and transformative learning experience that empowers every student to achieve their full potential.",
    mission:
      "Our mission is to provide a holistic and transformative learning experience that empowers every student to achieve their full potential. Read more on our About Us page.",
    values:
      "We are built on Integrity, Excellence, Respect, Collaboration, and Lifelong Learning — guiding everything we do, from the classroom to the playground.",
    address:
      "We’re located at [Insert Full Address Here], Palam (New Delhi). You can find a detailed map on our Contact Us page.",
    hours:
      "Our office hours are 8 AM – 5 PM (Mon–Fri). Class timings vary by program; see the timetable or ask for specific batch timings.",

    // Category 2
    admission:
      "Admissions involve filling out a form, submitting required documents, and often a short interaction or assessment. Details are in our Admissions section.",
    documents:
      "Documents required: Birth certificate, previous report card, transfer certificate (if applicable), and passport photos.",
    fees:
      "Fees vary by grade. Class 11 Commerce combo starts ₹2,500 / month. Contact us or download the prospectus for full details.",
    scholarship:
      "Yes! We offer merit-based scholarships and need-based financial aid. Please email our accounts office at [insert email].",
    tour:
      "Absolutely — you can book a campus tour by calling us at [insert phone number] or through the Visit Us form on our website.",
    age:
      "For Nursery admission, the child should be 3 years old by 31 March of the academic year. Age increases accordingly for higher grades.",

    // Category 3
    curriculum:
      "We follow the CBSE curriculum — a balanced and comprehensive framework focused on conceptual learning and overall growth.",
    subjects:
      "Subjects offered: Science (Physics, Chemistry, Biology), Commerce (Accountancy, Business Studies, Economics), and Humanities (History, Political Science, Psychology).",
    support:
      "We offer remedial classes, one-on-one doubt clearing, and counseling support to help every student excel.",
    vocational:
      "Yes, we offer Computer Science, Art, Music, Physical Education, and life-skills workshops for all-round development.",

    // Category 4
    facilities:
      "Facilities include spacious classrooms, science and computer labs, library, sports grounds, art rooms, and a healthy cafeteria.",
    cocurricular:
      "Co-curricular options: Dance, Drama, Debate, Robotics, Gardening, and clubs like Science and Literary Club.",
    sports:
      "We offer Basketball, Football, Cricket, Badminton, Table Tennis, Athletics and more with trained coaches.",
    transport:
      "Yes, we provide safe bus transport covering major city routes. Contact our transport desk for details and fees.",

    // Category 5
    calendar:
      "The academic calendar and exam schedule are available in the Parents Corner or Student Zone section of our website.",
    holiday:
      "You can find the holiday list inside the academic calendar under Parents Corner.",
    onlinepayment:
      "Fees can be paid securely through our online payment portal — accessible via the homepage or Fee Payment section.",
    classteacher:
      "For class teacher info, please call the school reception and our team will connect you to the concerned section.",
    absence:
      "To report absence, call the office on the day or email the class teacher. A note can also be sent when the child returns.",

    // Category 6
    safety:
      "Student safety is our priority — 24/7 CCTV, controlled entry, background checked staff, and regular safety drills.",
    bullying:
      "We have zero tolerance for bullying — students can report confidentially and our counseling team handles it sensitively.",
    mobilepolicy:
      "Students are not allowed to use mobile phones during school hours. If brought for after-school use, it must be deposited with the class teacher.",

    // Category 7
    phone: "Our main reception number is [Insert Main Phone Number].",
    email:
      "For general queries email info@educationbeast.in (or see Contact Us page for department addresses).",
    principal:
      "To meet the principal, please contact the principal’s office at [insert phone number/email].",
    other:
      "I’d be happy to help! Please call us at [Insert Phone Number] or email [Insert Email Address] — our team will respond soon.",
  };

  /* ------------------------- MATCHER ------------------------- */
  const getBotResponse = (userMsg: string): string => {
    const msg = userMsg.toLowerCase();

    if (msg.includes("vision") || msg.includes("mission")) return faqResponses.vision;
    if (msg.includes("value")) return faqResponses.values;
    if (msg.includes("address") || msg.includes("where") || msg.includes("location"))
      return faqResponses.address;
    if (msg.includes("hour") || msg.includes("timing") || msg.includes("open"))
      return faqResponses.hours;

    if (msg.includes("admission") || msg.includes("enroll")) return faqResponses.admission;
    if (msg.includes("document")) return faqResponses.documents;
    if (msg.includes("fee") || msg.includes("price") || msg.includes("cost"))
      return faqResponses.fees;
    if (msg.includes("scholar") || msg.includes("aid")) return faqResponses.scholarship;
    if (msg.includes("tour") || msg.includes("visit")) return faqResponses.tour;
    if (msg.includes("age")) return faqResponses.age;

    if (msg.includes("curriculum") || msg.includes("board")) return faqResponses.curriculum;
    if (msg.includes("subject")) return faqResponses.subjects;
    if (msg.includes("help") || msg.includes("support")) return faqResponses.support;
    if (msg.includes("vocational") || msg.includes("co-scholastic"))
      return faqResponses.vocational;

    if (msg.includes("facility") || msg.includes("infrastructure"))
      return faqResponses.facilities;
    if (msg.includes("activity") || msg.includes("co-curricular"))
      return faqResponses.cocurricular;
    if (msg.includes("sport")) return faqResponses.sports;
    if (msg.includes("transport")) return faqResponses.transport;

    if (msg.includes("calendar")) return faqResponses.calendar;
    if (msg.includes("holiday")) return faqResponses.holiday;
    if (msg.includes("pay") || msg.includes("portal")) return faqResponses.onlinepayment;
    if (msg.includes("teacher")) return faqResponses.classteacher;
    if (msg.includes("absent")) return faqResponses.absence;

    if (msg.includes("safe") || msg.includes("security")) return faqResponses.safety;
    if (msg.includes("bully")) return faqResponses.bullying;
    if (msg.includes("mobile") || msg.includes("phone policy"))
      return faqResponses.mobilepolicy;

    if (msg.includes("phone") || msg.includes("call")) return faqResponses.phone;
    if (msg.includes("email") || msg.includes("mail")) return faqResponses.email;
    if (msg.includes("principal")) return faqResponses.principal;

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
      return "Hello 👋 Welcome to Education Beast! How can I assist you today?";
    if (msg.includes("other") || msg.includes("different") || msg.includes("human"))
      return faqResponses.other;

    return "I can help with questions about admissions, classes, fees, facilities, and policies. What would you like to ask?";
  };

  /* ----------------------- HANDLERS ----------------------- */
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

    // just in case: immediate scroll after enqueue
    setTimeout(scrollToBottom, 0);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  /* ------------------------- RENDER ------------------------- */
  return (
    <>
      {/* Floating toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg hover:scale-105 transition-transform"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-xl border border-gray-100 bg-white/95 backdrop-blur-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-teal-700">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                  EB
                </div>
                <span>Education Beast Assistant</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Messages */}
              <div
                ref={listRef}
                className="h-64 overflow-y-auto space-y-3 pr-2 pb-10 scroll-smooth"
              >
                {messages.map(m => (
                  <div key={m.id} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm ${
                        m.isBot
                          ? "bg-teal-100 text-teal-800 rounded-bl-none"
                          : "bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-br-none"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 border-gray-200 focus:border-teal-500"
                />
                <Button onClick={handleSend} size="sm" className="bg-teal-600 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick buttons */}
              <div className="flex flex-wrap gap-2">
                {["Admissions", "Fees", "Facilities", "Safety", "Contact"].map(topic => (
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
