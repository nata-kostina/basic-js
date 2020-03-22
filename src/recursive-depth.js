module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)){
            return 1 + arr.reduce((acc, el) =>
                Math.max(this.calculateDepth(el), acc), 0);
        }
        else
            return 0;
    }
};