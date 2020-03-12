import { Worker , isMainThread, parentPort, workerData} from 'worker_threads';
function get_sum(data){
    let graph = data['graph'];
    let start = data['start'];
    let length = data['length'];
    let path_sum = data['path_sum'];
    path_sum += graph[start];

    if (2*start + 1 > length && 2*start+2 > length){
        console.log(path_sum);
        return;
    }
    if (2*start +1 < length){
        get_sum({'graph':graph,'start':2*start+1,'length':graph.length,'path_sum':path_sum});
    }
    if (2*start +2 < length){
        get_sum({'graph':graph,'start':2*start+2,'length':graph.length,'path_sum':path_sum});
    }
}
function main(){
    if (isMainThread){
        var graph = [2,4,5,1,2,3,4,8];
        let worker1 = new Worker(__filename,{workerData:{'graph':graph,'start':1,'length':graph.length,'path_sum':graph[0]}});
        let worker2 = new Worker(__filename,{workerData:{'graph':graph,'start':2,'length':graph.length,'path_sum':graph[0]}});
    }else{
        get_sum(workerData);
    }
}
main();
