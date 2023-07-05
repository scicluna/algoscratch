//shortest path to one node from any node in the graph
/*
prev = [-1, ...]
seen = [f, ...]
dists = [Infinity, ..., 0]

we get the lowest unvisited node (so just our source since others are infinity)

while hasUnvisited():
    lo = getLowest()
    seen[lo] = true

    for edge in lo:
        if seen[edge] continue
        dist = dists[lo]+edge.weight
        if dist < dists[edge
            prev[edge] = lo
            dists[edge] = dist
*/

type Edge = {
    to: number;
    weight: number;
}
type WeightedAdjacencyList = Edge[][]

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((saw, i) => !saw && dists[i] < Infinity)
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }
    return idx;
}

export function dijkstraList(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen = new Array(arr.length).fill(false)
    const prev = new Array(arr.length).fill(-1)
    const dists = new Array(arr.length).fill(Infinity)

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i]
            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse())
}
