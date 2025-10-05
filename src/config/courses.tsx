export type Course = {
  id: string;
  title: string;
  cls: 11 | 12;
  stream: "Commerce" | "Science" | "Maths";
  short?: string;
};

export const COURSES: Course[] = [
  // —— Class 11
  { id: "11-accounts",   title: "Class 11 Accounts",         cls: 11, stream: "Commerce" },
  { id: "11-business",   title: "Class 11 Business Studies", cls: 11, stream: "Commerce" },
  { id: "11-economics",  title: "Class 11 Economics",        cls: 11, stream: "Commerce" },
  { id: "11-maths",      title: "Class 11 Mathematics",      cls: 11, stream: "Maths"    },
  { id: "11-physics",    title: "Class 11 Physics",          cls: 11, stream: "Science"  },
  { id: "11-chemistry",  title: "Class 11 Chemistry",        cls: 11, stream: "Science"  },
  { id: "11-biology",    title: "Class 11 Biology",          cls: 11, stream: "Science"  },

  // —— Class 12
  { id: "12-accounts",   title: "Class 12 Accounts",         cls: 12, stream: "Commerce" },
  { id: "12-business",   title: "Class 12 Business Studies", cls: 12, stream: "Commerce" },
  { id: "12-economics",  title: "Class 12 Economics",        cls: 12, stream: "Commerce" },
  { id: "12-maths",      title: "Class 12 Mathematics",      cls: 12, stream: "Maths"    },
  { id: "12-physics",    title: "Class 12 Physics",          cls: 12, stream: "Science"  },
  { id: "12-chemistry",  title: "Class 12 Chemistry",        cls: 12, stream: "Science"  },
  { id: "12-biology",    title: "Class 12 Biology",          cls: 12, stream: "Science"  },
];
