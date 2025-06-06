import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

type CreateOption = {
  label: string;
  icon: React.ReactNode;
  action: () => void;
};

const CreateButton = () => {
  const navigate = useNavigate();

  const createOptions: CreateOption[] = [
    {
      label: 'New Task',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/tasks?new=true'),
    },
    {
      label: 'Report Issue',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/issues?new=true'),
    },
    {
      label: 'Create Workflow',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/workflow?new=true'),
    },
    {
      label: 'Add Event',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/calendar?new=true'),
    },
    {
      label: 'Create Template',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/library?new=true'),
    },
    {
      label: 'Add User',
      icon: <Plus className="h-4 w-4 mr-2" />,
      action: () => navigate('/users?new=true'),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {createOptions.map((option, index) => (
          <DropdownMenuItem 
            key={index} 
            onClick={option.action}
            className="flex items-center cursor-pointer"
          >
            {option.icon}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreateButton;