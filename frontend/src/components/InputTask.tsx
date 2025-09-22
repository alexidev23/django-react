import { Input } from "./ui/input";
import { useState } from "react";

interface InputTaskProps {
  onAddTask: (title: string) => void;
}

export default function InputTask({ onAddTask }: InputTaskProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onAddTask(value.trim());
      setValue("");
    }
  };

  return (
    <div className="w-full px-8 py-4 flex justify-center">
      <Input
        type="text"
        placeholder="Add a new task"
        className="rounded-md p-2 w-full"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
