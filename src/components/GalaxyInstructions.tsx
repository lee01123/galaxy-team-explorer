import { MousePointer2, ZoomIn, Hand } from "lucide-react";

export const GalaxyInstructions = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 glass-panel p-4 rounded-xl max-w-xs">
      <h3 className="text-sm font-semibold mb-3 text-primary">Hướng dẫn</h3>
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <MousePointer2 className="h-4 w-4 text-accent" />
          <span>Click vào "sao" để xem thông tin nhân viên</span>
        </div>
        <div className="flex items-center gap-2">
          <Hand className="h-4 w-4 text-accent" />
          <span>Kéo chuột để xoay dải ngân hà</span>
        </div>
        <div className="flex items-center gap-2">
          <ZoomIn className="h-4 w-4 text-accent" />
          <span>Cuộn chuột để phóng to/thu nhỏ</span>
        </div>
      </div>
    </div>
  );
};
