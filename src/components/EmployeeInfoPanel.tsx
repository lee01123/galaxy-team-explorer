import { Employee } from "@/data/employees";
import { X, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface EmployeeInfoPanelProps {
  employee: Employee;
  onClose: () => void;
}

export const EmployeeInfoPanel = ({ employee, onClose }: EmployeeInfoPanelProps) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 glass-panel rounded-xl shadow-2xl animate-scale-in">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold glow-text">{employee.name}</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-primary/20 transition-smooth"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg">
            <img
              src={employee.avatarUrl}
              alt={employee.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">{employee.title}</p>
            <p className="text-sm text-muted-foreground">{employee.department}</p>
            <p className="text-xs text-accent mt-1">EXP: {employee.expPoints} điểm</p>
          </div>
        </div>

        <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
          <p className="text-sm leading-relaxed">{employee.description}</p>
        </div>

        {employee.socialLinks && (
          <div className="flex gap-3">
            {employee.socialLinks.linkedin && (
              <a
                href={employee.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            )}
            {employee.socialLinks.github && (
              <a
                href={employee.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
            )}
            {employee.socialLinks.email && (
              <a
                href={`mailto:${employee.socialLinks.email}`}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-primary/20">
        <p className="text-xs text-muted-foreground text-center">
          Click vào bất kỳ đâu trong dải ngân hà để khám phá thành viên khác
        </p>
      </div>
    </div>
  );
};
