// delayNode.js

import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Delay"
      inputs={[{ id: 'input', color: '#a855f7' }]}
      outputs={[{ id: 'output', color: '#a855f7' }]}
      fields={[
        {
          name: 'duration',
          label: 'Duration (ms)',
          type: 'number',
          defaultValue: '1000'
        },
        {
          name: 'unit',
          label: 'Unit',
          type: 'select',
          defaultValue: 'milliseconds',
          options: [
            { value: 'milliseconds', label: 'Milliseconds' },
            { value: 'seconds', label: 'Seconds' },
            { value: 'minutes', label: 'Minutes' }
          ]
        }
      ]}
      style={{ borderColor: '#a855f7' }}
    />
  );
};