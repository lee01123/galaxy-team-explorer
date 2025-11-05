import { Sparkles } from "lucide-react";

export const GalaxyHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel px-6 py-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div>
                <h1 className="text-2xl font-bold glow-text">Dải Ngân Hà Nhân Viên</h1>
                <p className="text-sm text-muted-foreground">Employee Galaxy - Khám phá đội ngũ của chúng tôi</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Tổng số thành viên</p>
              <p className="text-3xl font-bold text-primary">15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
