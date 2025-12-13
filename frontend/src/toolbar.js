// toolbar.js

import { DraggableNode } from './draggableNode';
import { NodeTooltip } from './components/NodeTooltip';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '15px', 
            backgroundColor: '#f8fafc', 
            borderBottom: '1px solid #e2e8f0' 
        }}>
            <h3 style={{ 
                margin: '0 0 15px 0', 
                color: '#1e293b', 
                fontSize: '16px' 
            }}>
                Node Library
            </h3>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px' 
            }}>
                <NodeTooltip content="Create input fields for your pipeline">
                    <DraggableNode type='customInput' label='Input' />
                </NodeTooltip>
                <NodeTooltip content="Large Language Model processing node">
                    <DraggableNode type='llm' label='LLM' />
                </NodeTooltip>
                <NodeTooltip content="Define output destinations">
                    <DraggableNode type='customOutput' label='Output' />
                </NodeTooltip>
                <NodeTooltip content="Text processing with variable support">
                    <DraggableNode type='text' label='Text' />
                </NodeTooltip>
                <NodeTooltip content="Mathematical operations">
                    <DraggableNode type='math' label='Math' />
                </NodeTooltip>
                <NodeTooltip content="Filter data based on conditions">
                    <DraggableNode type='filter' label='Filter' />
                </NodeTooltip>
                <NodeTooltip content="Make HTTP API calls">
                    <DraggableNode type='api' label='API Call' />
                </NodeTooltip>
                <NodeTooltip content="Conditional logic branching">
                    <DraggableNode type='condition' label='Condition' />
                </NodeTooltip>
                <NodeTooltip content="Add delays to your pipeline">
                    <DraggableNode type='delay' label='Delay' />
                </NodeTooltip>
            </div>
        </div>
    );
};
