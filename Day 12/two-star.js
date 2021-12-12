const { input } = require('./input');

const vis = {};
let paths = 0;

const constructGraph = function () {
    const g = {};
    input.forEach(([u, v]) => {
        for (let i in [0, 1]) {
            if (g[u]) g[u].push(v);
            else g[u] = [v];
            
            [u, v] = [v, u];
        }
    });
    return g;
};

const checkIfSmallCave = function (name) {
    return name === name.toLowerCase();
};

const dfs = function (u, twice) {
    if (u === 'end') {
        paths++;
        return;
    }
    if ((u === 'start' && vis[u] === 1) || (vis[u] === 1 && twice) || vis[u] === 2) return;
    if (checkIfSmallCave(u)) {
        if (vis[u]) twice = true, vis[u] = 2;
        else vis[u] = 1;
    }
    for (let v in g[u]) {
        dfs(g[u][v], twice);
    }
    twice = false;
    if (checkIfSmallCave(u)) {
        vis[u]--;
    }
};

const g = {...constructGraph()};
dfs('start', false);
console.log(paths);