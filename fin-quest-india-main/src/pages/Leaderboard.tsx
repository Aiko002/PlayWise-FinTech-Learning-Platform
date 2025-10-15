import { leaderboardUsers, badges } from "@/data/leaderboard";
import { Trophy, Medal, Award, Flame, MapPin, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const currentUser = {
    rank: 127,
    xp: 3450,
    level: 18,
    streak: 12,
    nextLevelXp: 3550,
    badgesEarned: 8,
    totalBadges: 45,
  };

  const progressToNextLevel = ((currentUser.xp % 1000) / 1000) * 100;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          <Trophy className="w-12 h-12 inline-block mr-3 text-primary" />
          <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Compete with 12,847+ learners across India
        </p>
      </div>

      {/* Your Rank Card */}
      <div className="glass-card p-8 rounded-xl mb-8 border-2 border-primary/30 bg-primary/5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold">Your Rank</h2>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary animate-glow-pulse" />
            <span className="text-xl font-bold text-primary">{currentUser.streak} day streak</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-1">
              #{currentUser.rank}
            </div>
            <div className="text-sm text-muted-foreground">Global Rank</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-1">
              {currentUser.xp}
            </div>
            <div className="text-sm text-muted-foreground">Total XP</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-1">
              {currentUser.level}
            </div>
            <div className="text-sm text-muted-foreground">Current Level</div>
            <Progress value={progressToNextLevel} className="mt-2" />
            <div className="text-xs text-muted-foreground mt-1">
              {currentUser.nextLevelXp - currentUser.xp} XP to Level {currentUser.level + 1}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-1">
              {currentUser.badgesEarned}/{currentUser.totalBadges}
            </div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="weekly" className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="all-time">All Time</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          <LeaderboardTable users={leaderboardUsers} />
        </TabsContent>

        <TabsContent value="monthly">
          <LeaderboardTable users={leaderboardUsers} />
        </TabsContent>

        <TabsContent value="all-time">
          <LeaderboardTable users={leaderboardUsers} />
        </TabsContent>

        <TabsContent value="badges">
          <BadgesGrid badges={badges} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const LeaderboardTable = ({ users }: { users: typeof leaderboardUsers }) => {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div
          key={user.rank}
          className={`glass-card p-6 rounded-xl hover-lift ${
            user.rank <= 3 ? "border-2 border-primary/30 bg-primary/5" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            {/* Rank */}
            <div className="w-16 text-center">
              {user.rank === 1 ? (
                <Trophy className="w-8 h-8 mx-auto text-yellow-400 fill-yellow-400" />
              ) : user.rank === 2 ? (
                <Medal className="w-8 h-8 mx-auto text-gray-400 fill-gray-400" />
              ) : user.rank === 3 ? (
                <Medal className="w-8 h-8 mx-auto text-orange-400 fill-orange-400" />
              ) : (
                <div className="text-2xl font-heading font-bold text-muted-foreground">
                  {user.rank}
                </div>
              )}
            </div>

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-primary-foreground">
                {user.level}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-heading font-bold text-lg">
                  {user.badge} {user.name}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{user.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-primary" />
                  <span>{user.streak} day streak</span>
                </div>
              </div>
            </div>

            {/* XP */}
            <div className="text-right">
              <div className="text-2xl font-heading font-bold gradient-text">
                {user.xp.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">XP</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const BadgesGrid = ({ badges }: { badges: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {badges.map((badge) => (
        <div key={badge.id} className="glass-card p-6 rounded-xl hover-lift">
          <div className="text-center mb-4">
            <div className="text-5xl mb-3">{badge.icon}</div>
            <h3 className="text-xl font-heading font-bold mb-2">{badge.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
              {badge.category}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
            <Award className="w-4 h-4" />
            <span>Earned by {badge.earnedBy}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
