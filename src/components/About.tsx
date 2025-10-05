import { CheckCircle, Target, Award, Users } from "lucide-react";

const About = () => {
  const usps = [
    "Small batches",
    "Concept-first teaching",
    "Weekly tests",
    "CBSE-aligned notes",
    "Daily doubt clinic",
    "Performance reports"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              About Education Beast
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Education Beast is a premier coaching institute in Palam, New Delhi for Classes 9–12. 
              We're known for Commerce with dedicated faculty for Accounts, Economics, and Business Studies, 
              and we deliver strong results in Maths & Science for 9–10 and Science/Humanities for 11–12.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-foreground/80">{usp}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Mission</h3>
                <p className="text-sm text-muted-foreground">Excellence in education</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Method</h3>
                <p className="text-sm text-muted-foreground">Concept-first approach</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Promise</h3>
                <p className="text-sm text-muted-foreground">Individual attention</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative">
              {/* Background gradient card */}
              <div className="absolute inset-0 gradient-card rounded-2xl transform rotate-3 shadow-card"></div>
              
              {/* Main content card */}
              <div className="relative bg-card p-8 rounded-2xl shadow-card border border-border/50">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-button">
                    <span className="text-primary-foreground font-bold text-2xl">EB</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">Education Beast</h3>
                  <p className="text-muted-foreground mb-6">Palam, New Delhi</p>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Students</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;