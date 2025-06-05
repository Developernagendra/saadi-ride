
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";

interface ChecklistItem {
  id: number;
  task: string;
  category: string;
  timeline: string;
  completed: boolean;
}

const WeddingChecklist = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    // 12+ Months Before
    { id: 1, task: "Set the date and create guest list", category: "Planning", timeline: "12+ months", completed: false },
    { id: 2, task: "Set budget and start venue research", category: "Budget", timeline: "12+ months", completed: false },
    { id: 3, task: "Book wedding venue", category: "Venue", timeline: "12+ months", completed: false },
    
    // 9-11 Months Before
    { id: 4, task: "Choose wedding theme and color palette", category: "Design", timeline: "9-11 months", completed: false },
    { id: 5, task: "Book photographer and videographer", category: "Photography", timeline: "9-11 months", completed: false },
    { id: 6, task: "Start shopping for wedding outfits", category: "Attire", timeline: "9-11 months", completed: false },
    
    // 6-8 Months Before
    { id: 7, task: "Book catering services", category: "Catering", timeline: "6-8 months", completed: false },
    { id: 8, task: "Book music/DJ and entertainment", category: "Entertainment", timeline: "6-8 months", completed: false },
    { id: 9, task: "Order wedding invitations", category: "Invitations", timeline: "6-8 months", completed: false },
    
    // 3-5 Months Before
    { id: 10, task: "Book makeup artist and hairstylist", category: "Beauty", timeline: "3-5 months", completed: false },
    { id: 11, task: "Plan honeymoon and book travel", category: "Travel", timeline: "3-5 months", completed: false },
    { id: 12, task: "Finalize menu and cake design", category: "Catering", timeline: "3-5 months", completed: false },
    
    // 1-2 Months Before
    { id: 13, task: "Send wedding invitations", category: "Invitations", timeline: "1-2 months", completed: false },
    { id: 14, task: "Final venue walkthrough", category: "Venue", timeline: "1-2 months", completed: false },
    { id: 15, task: "Confirm all vendor details", category: "Planning", timeline: "1-2 months", completed: false },
    
    // 1 Week Before
    { id: 16, task: "Pack for honeymoon", category: "Travel", timeline: "1 week", completed: false },
    { id: 17, task: "Rehearsal dinner planning", category: "Planning", timeline: "1 week", completed: false },
    { id: 18, task: "Final headcount to caterer", category: "Catering", timeline: "1 week", completed: false }
  ]);

  const toggleTask = (id: number) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    
    const task = checklist.find(item => item.id === id);
    if (task && !task.completed) {
      toast.success(`"${task.task}" marked as complete! 🎉`);
    }
  };

  const completedTasks = checklist.filter(item => item.completed).length;
  const totalTasks = checklist.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const timelineGroups = checklist.reduce((groups, item) => {
    const timeline = item.timeline;
    if (!groups[timeline]) {
      groups[timeline] = [];
    }
    groups[timeline].push(item);
    return groups;
  }, {} as Record<string, ChecklistItem[]>);

  const resetChecklist = () => {
    setChecklist(prev => prev.map(item => ({ ...item, completed: false })));
    toast.success("Checklist reset successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-heading">
            <CheckCircle className="mr-2 h-6 w-6 text-wedding-pink" />
            Wedding Planning Checklist
          </CardTitle>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {completedTasks} of {totalTasks} tasks completed
              </span>
              <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(timelineGroups).map(([timeline, tasks]) => (
            <div key={timeline} className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-wedding-pink mr-2" />
                <h4 className="font-semibold text-lg capitalize">{timeline} Before Wedding</h4>
              </div>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`flex items-start space-x-3 p-3 rounded-md transition-all ${
                      task.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label 
                        htmlFor={`task-${task.id}`}
                        className={`text-sm cursor-pointer ${
                          task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                        }`}
                      >
                        {task.task}
                      </label>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-wedding-pink/10 text-wedding-pink rounded-full">
                          {task.category}
                        </span>
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{task.timeline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="flex justify-center pt-4 border-t">
            <Button 
              onClick={resetChecklist}
              variant="outline"
              className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
            >
              Reset Checklist
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingChecklist;
