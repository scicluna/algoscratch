//a function that calls itself until it hits a base case

//simplest form like 5!
function foo(n: number): number {
    if (n === 1) {
        return 1
    }

    return n + foo(n - 1)
}

//three steps:
//1. pre recurse (n +)
//2. recurse (foo(n-1))
//3. post operation

//pathfinding example:
//["#####E#"]
//["#     #"]
//["#S#####"]

//step 1 - find end

//can go any top right bottom left from S
//can go off the graph... or spot we've seen before...

//base cases... 
//1. its a wall...
//2. its out of bounds...
//3. its the end...
//4. if we have seen it...

type Point = {
    x: number
    y: number
}

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]


function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    //off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false
    }

    //on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    //at the end?
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true
    }

    if (seen[curr.y][curr.x]) {
        return false
    }

    //pre recur
    seen[curr.y][curr.x] = true
    path.push(curr);

    //recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true;
        }
    }

    //post
    path.pop();
    return false;
}

function mazeSolver(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path);
    return path
}

console.log(mazeSolver(["#####E#",
    "#     #",
    "#S#####"], "#", { x: 1, y: 2 }, { x: 5, y: 0 }))


//use it when there's no defined end
