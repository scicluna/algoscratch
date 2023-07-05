//a series of nodes with some connections
/*
Terminology--
Cycle: If i can visit a series of nodes and get back to the original node is a cycle
Acyclic: a graph that contains no cycles
connected: when every node can reach any other node
directed: when you have directions between nodes (asymetric connections --- A->B B->C C->B (B cannot go back to A))
undirected: links have no specific directions (both ways)
weighted: each connection has a weight
dag: directed asyclic graph [A->D D->A D->C C->B B->A]
Vertex: cannonical term of node in a graph

Big O - V for vertex, E for edges
so O(V * E) means we will check every vertex and on every vertex we check every edge
*/

//Two major ways to do graphs
//1. Adjacency List - most usual
//2. Adjacency Matrix - rare(o(V^2))

// O{to: 1, w:10}, 1{to: 3, w: 10},etc...

//BFS and DFS still exist on a graph

//BFS ON ADJACENCY MATRIX (head = where we are starting from and return the path we took or null if we have no path to it)
export function graphBfs(graph: number[][], head: number, needle: number): number[] | null {
    const queue = [head]
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[head] = true;

    while (queue.length) {
        const curr = queue.shift() as number
        if (curr === needle) {
            break;
        }

        const adjacencies = graph[curr]
        for (let i = 0; i < adjacencies.length; i++) {
            if (adjacencies[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    }

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        return [head].concat(out.reverse());
    }

    return []
}

////DFS my bad attempt
export function graphDfs(graph: number[][], head: number, needle: number): number[] {
    const seen: boolean[] = Array(graph.length).fill(false);
    const path: number[] = []
    if (head === needle) {
        path.push(head)
        return path
    }

    if (seen[head]) {
        return []
    }

    seen[head] = true;

    //pre
    path.push(head);
    //recurse
    const list = graph[head];
    for (let i = 0; i < list.length; i++) {
        path.push(...graphDfs(graph, i, needle))
    }
    //post
    path.pop();

    return path
}

//real
export function graphDfs2(graph: number[][], head: number, needle: number): number[] {
    const seen: boolean[] = Array(graph.length).fill(false);
    return dfs(graph, head, needle, seen, []);
}

function dfs(graph: number[][], node: number, needle: number, seen: boolean[], path: number[]): number[] {
    if (seen[node]) {
        return [];
    }

    seen[node] = true;
    path.push(node);

    if (node === needle) {
        return path;
    }

    const neighbours = graph[node];
    for (let i = 0; i < neighbours.length; i++) {
        if (neighbours[i] && !seen[i]) {
            const result = dfs(graph, i, needle, seen, path);
            if (result.includes(needle)) {
                return result;
            }
        }
    }

    path.pop();
    return [];
}

//runtime is o(V+E)

