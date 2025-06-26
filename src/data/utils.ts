import { tools } from './data';
import type { Tool, ToolCategory } from './types';

// Helper functions for data management
export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter((tool: Tool) => tool.category === category);
};

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(
    (tool: Tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.category.toLowerCase().includes(lowercaseQuery)
  );
};
