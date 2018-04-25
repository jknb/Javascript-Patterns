const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Object instance!'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceB === instanceA); // true