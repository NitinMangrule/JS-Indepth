
/// Create Observeble using pure JS.

class DataSource{
    constructor(){
        let i = 0;
        this._id = setInterval(()=> this.emit(i++),1000);
    }

    emit(n){
        const limit = 10;
        if(this.onData){
            this.onData(n);
        }
        if(limit === n){
            if(this.onComplete){
                this.onComplete();
            }
           this.destroy();
        }
    }

    destroy(){
        clearInterval(this._id);
    }
}

function myObservable(observer) {
    let source = new DataSource();
    source.onData = (e) => observer.next(e);
    source.onError = (err) => observer.error(err);
    source.onComplete = ()=> observer.complete();
    return ()=> {
        source.destroy();
    }
     
}


let subs = myObservable({
    next(e){
    console.log(e);
    },
    error(err){
console.log(err);
    },
    complete(){
     console.log('complete');   
    }
});
