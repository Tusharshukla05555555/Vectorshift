// databaseNode.js

import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Database"
      inputs={[{ id: 'query', color: '#059669' }]}
      outputs={[
        { id: 'result', color: '#059669' },
        { id: 'error', color: '#dc2626' }
      ]}
      fields={[
        {
          name: 'connectionString',
          label: 'Connection',
          type: 'text',
          defaultValue: 'postgresql://user:pass@localhost/db'
        },
        {
          name: 'queryType',
          label: 'Query Type',
          type: 'select',
          defaultValue: 'SELECT',
          options: [
            { value: 'SELECT', label: 'SELECT' },
            { value: 'INSERT', label: 'INSERT' },
            { value: 'UPDATE', label: 'UPDATE' },
            { value: 'DELETE', label: 'DELETE' }
          ]
        },
        {
          name: 'timeout',
          label: 'Timeout (s)',
          type: 'number',
          defaultValue: '30'
        }
      ]}
      style={{ borderColor: '#059669', minHeight: 140 }}
    />
  );
};