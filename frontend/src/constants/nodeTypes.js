// nodeTypes.js - Constants for node type definitions

export const NODE_CATEGORIES = {
  IO: 'Input/Output',
  PROCESSING: 'Processing',
  LOGIC: 'Logic & Control',
  DATA: 'Data Operations',
  EXTERNAL: 'External Services'
};

export const NODE_DEFINITIONS = {
  customInput: {
    label: 'Input',
    category: NODE_CATEGORIES.IO,
    description: 'Create input fields for your pipeline',
    color: '#10b981'
  },
  customOutput: {
    label: 'Output', 
    category: NODE_CATEGORIES.IO,
    description: 'Define output destinations',
    color: '#ef4444'
  },
  text: {
    label: 'Text',
    category: NODE_CATEGORIES.PROCESSING,
    description: 'Text processing with variable support',
    color: '#f59e0b'
  },
  llm: {
    label: 'LLM',
    category: NODE_CATEGORIES.PROCESSING,
    description: 'Large Language Model processing node',
    color: '#8b5cf6'
  },
  math: {
    label: 'Math',
    category: NODE_CATEGORIES.PROCESSING,
    description: 'Mathematical operations',
    color: '#3b82f6'
  },
  filter: {
    label: 'Filter',
    category: NODE_CATEGORIES.DATA,
    description: 'Filter data based on conditions',
    color: '#06b6d4'
  },
  condition: {
    label: 'Condition',
    category: NODE_CATEGORIES.LOGIC,
    description: 'Conditional logic branching',
    color: '#84cc16'
  },
  delay: {
    label: 'Delay',
    category: NODE_CATEGORIES.LOGIC,
    description: 'Add delays to your pipeline',
    color: '#a855f7'
  },
  api: {
    label: 'API Call',
    category: NODE_CATEGORIES.EXTERNAL,
    description: 'Make HTTP API calls',
    color: '#f97316'
  },
  database: {
    label: 'Database',
    category: NODE_CATEGORIES.EXTERNAL,
    description: 'Database operations and queries',
    color: '#059669'
  }
};