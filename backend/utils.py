# utils.py - Utility functions for pipeline analysis

from typing import List, Dict, Set
from .main import Node, Edge

def analyze_pipeline_complexity(nodes: List[Node], edges: List[Edge]) -> Dict:
    """
    Analyze pipeline complexity and provide insights.
    """
    analysis = {
        "total_nodes": len(nodes),
        "total_edges": len(edges),
        "node_types": {},
        "max_depth": 0,
        "branching_factor": 0,
        "isolated_nodes": []
    }
    
    # Count node types
    for node in nodes:
        node_type = node.type
        analysis["node_types"][node_type] = analysis["node_types"].get(node_type, 0) + 1
    
    # Build graph for analysis
    graph = {node.id: [] for node in nodes}
    in_degree = {node.id: 0 for node in nodes}
    
    for edge in edges:
        if edge.source in graph and edge.target in graph:
            graph[edge.source].append(edge.target)
            in_degree[edge.target] += 1
    
    # Find isolated nodes (no connections)
    for node in nodes:
        if len(graph[node.id]) == 0 and in_degree[node.id] == 0:
            analysis["isolated_nodes"].append(node.id)
    
    # Calculate max branching factor
    if graph:
        analysis["branching_factor"] = max(len(neighbors) for neighbors in graph.values())
    
    return analysis

def get_pipeline_suggestions(nodes: List[Node], edges: List[Edge]) -> List[str]:
    """
    Provide suggestions for improving the pipeline.
    """
    suggestions = []
    
    if len(nodes) == 0:
        suggestions.append("Add some nodes to start building your pipeline")
        return suggestions
    
    # Check for isolated nodes
    connected_nodes = set()
    for edge in edges:
        connected_nodes.add(edge.source)
        connected_nodes.add(edge.target)
    
    isolated = [node.id for node in nodes if node.id not in connected_nodes]
    if isolated:
        suggestions.append(f"Consider connecting isolated nodes: {', '.join(isolated)}")
    
    # Check for input/output balance
    input_nodes = [node for node in nodes if node.type == 'customInput']
    output_nodes = [node for node in nodes if node.type == 'customOutput']
    
    if len(input_nodes) == 0:
        suggestions.append("Add input nodes to provide data to your pipeline")
    
    if len(output_nodes) == 0:
        suggestions.append("Add output nodes to capture results from your pipeline")
    
    if len(edges) == 0 and len(nodes) > 1:
        suggestions.append("Connect your nodes with edges to create data flow")
    
    return suggestions