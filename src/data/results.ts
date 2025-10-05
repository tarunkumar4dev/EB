export type Toppers = {
    name: string;
    cls: string;      // "Class 10", "Class 12", etc.
    score: string;    // "96%", "483/500"
    subject?: string; // optional highlight
    year: number;
    photo?: string;
  };
  
  export const TOPPERS: Toppers[] = [
    { name: "Ananya Gupta", cls: "Class 10", score: "96%", year: 2025 },
    { name: "Rohit Sharma", cls: "Class 12 Commerce", score: "95%", subject: "Accounts", year: 2025 },
    { name: "Ishika Verma", cls: "Class 12 Science", score: "94%", subject: "Physics", year: 2025 },
  ];
  