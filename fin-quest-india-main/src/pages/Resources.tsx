import { Calculator, FileText, BookOpen } from "lucide-react";

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-12">
        <BookOpen className="inline-block w-10 h-10 mr-3 text-primary" />
        <span className="gradient-text">Resources & Tools</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: Calculator, title: "Calculators", items: ["Tax Calculator", "SIP Calculator", "Risk Analyzer"] },
          { icon: FileText, title: "Checklists", items: ["Investment Checklist", "Scam Red Flags", "Security Guide"] },
          { icon: BookOpen, title: "Articles", items: ["Crypto in India", "SEBI Guidelines", "Forex Trading"] },
        ].map((section) => (
          <div key={section.title} className="glass-card p-6 rounded-xl">
            <section.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
