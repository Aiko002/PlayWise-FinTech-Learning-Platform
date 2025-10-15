import { Shield, AlertTriangle, FileText, Scale } from "lucide-react";

const Regulations = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-12">
        <Shield className="inline-block w-10 h-10 mr-3 text-primary" />
        <span className="gradient-text">Regulations & Safety</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          { icon: Scale, title: "SEBI", desc: "Securities and Exchange Board - Regulates stocks, bonds, mutual funds" },
          { icon: FileText, title: "RBI", desc: "Reserve Bank of India - Forex regulations and crypto advisories" },
          { icon: AlertTriangle, title: "ED", desc: "Enforcement Directorate - FEMA violations and penalties" },
          { icon: Shield, title: "Security Tips", desc: "Wallet security, scam prevention, and safe trading practices" },
        ].map((item) => (
          <div key={item.title} className="glass-card p-8 rounded-xl hover-lift">
            <item.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regulations;
