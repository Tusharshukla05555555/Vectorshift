// apiNode.js

import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="API Call"
      inputs={[{ id: 'params', color: '#f97316' }]}
      outputs={[
        { id: 'response', color: '#f97316' },
        { id: 'error', color: '#ef4444' }
      ]}
      fields={[
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          defaultValue: 'https://api.example.com'
        },
        {
          name: 'method',
          label: 'Method',
          type: 'select',
          defaultValue: 'GET',
          options: [
            { value: 'GET', label: 'GET' },
            { value: 'POST', label: 'POST' },
            { value: 'PUT', label: 'PUT' },
            { value: 'DELETE', label: 'DELETE' }
          ]
        },
        {
          name: 'headers',
          label: 'Headers',
          type: 'textarea',
          defaultValue: '{"Content-Type": "application/json"}'
        }
      ]}
      style={{ borderColor: '#f97316' }}
    />
  );
};