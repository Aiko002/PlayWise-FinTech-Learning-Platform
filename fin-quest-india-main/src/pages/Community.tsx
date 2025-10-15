import { MessageSquare, TrendingUp } from "lucide-react";

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-12">
        <MessageSquare className="inline-block w-10 h-10 mr-3 text-primary" />
        <span className="gradient-text">Community Forum</span>
      </h1>
      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          { title: "Just lost ₹50k to fake exchange. Learn from my mistake.", replies: 234, upvotes: 567 },
          { title: "Is 30% crypto tax too high? Let's discuss.", replies: 189, upvotes: 445 },
          { title: "My Forex broker won't let me withdraw. What to do?", replies: 156, upvotes: 789 },
        ].map((post) => (
          <div key={post.title} className="glass-card p-6 rounded-xl hover-lift">
            <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>💬 {post.replies} replies</span>
              <span>▲ {post.upvotes} upvotes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
