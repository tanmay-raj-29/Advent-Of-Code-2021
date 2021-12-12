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

const dfs = function (u) {
    if (u === 'end') {
        paths++;
        return;
    }
    if (vis[u]) return;
    if (checkIfSmallCave(u)) vis[u] = true;
    for (let v in g[u]) {
        dfs(g[u][v]);
    }
    if (checkIfSmallCave(u)) vis[u] = false;
};

const g = {...constructGraph()};
dfs('start');
console.log(paths);