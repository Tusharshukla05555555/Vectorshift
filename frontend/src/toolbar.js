// toolbar.js

import { DraggableNode } from './draggableNode';

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
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='api' label='API Call' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='delay' label='Delay' />
            </div>
        </div>
    );
};
