function get_sum(graph, root, length, path_sum) {
    path_sum += graph[root];
    if (2 * root + 1 > length && 2 * root + 2 > length) {
        console.log(path_sum);
    }
    else {
        if (2 * root + 1 < length) {
            get_sum(graph, 2 * root + 1, length, path_sum);
        }
        if (2 * root + 2 < length) {
            get_sum(graph, 2 * root + 2, length, path_sum);
        }
    }
}
var graph = [2, 4, 5, 1, 2, 3, 4, 8];
get_sum(graph, 0, graph.length, 0);
