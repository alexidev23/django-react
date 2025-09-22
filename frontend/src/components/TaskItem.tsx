import { X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

interface TaskItemProps {
  id: string;
  completed: boolean;
  title: string;
  onDelete: () => void;
  onToggleComplete: (id: string) => void;
}

export default function TaskItem({ id, completed, title, onDelete, onToggleComplete }: TaskItemProps) {
  return (
    <div className="w-full px-4 py-4 flex justify-between items-center border-b border-gray-300" id={id}>
      <Checkbox checked={completed} onCheckedChange={() => onToggleComplete(id)} />
      <p className={`text-lg font-semibold ${completed ? 'line-through text-gray-400' : ''}`}>{title}</p>
      <div className="flex items-center gap-4">
        <button className="text-red-500 cursor-pointer" onClick={onDelete}>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
