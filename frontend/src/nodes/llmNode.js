// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputs={[
        { id: 'system', color: '#8b5cf6' },
        { id: 'prompt', color: '#8b5cf6' }
      ]}
      outputs={[{ id: 'response', color: '#8b5cf6' }]}
      fields={[
        {
          name: 'model',
          label: 'Model',
          type: 'select',
          defaultValue: 'gpt-3.5-turbo',
          options: [
            { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
            { value: 'gpt-4', label: 'GPT-4' },
            { value: 'claude-3', label: 'Claude 3' }
          ]
        }
      ]}
      style={{ borderColor: '#8b5cf6' }}
    />
  );
};
