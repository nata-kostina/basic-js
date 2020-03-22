module.exports = function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error();
    else {
        let result = [];
        let i = 0;
        while (i < arr.length) {
            let el = arr[i];
            switch (el) {
                case "--discard-next":
                    if (i != arr.length - 1)
                        i += 2;
                    else
                        i++;
                    break;
                case "--discard-prev":
                    if (i != 0)
                        result.pop();
                    i++;
                    break;
                case "--double-next":
                    if (i != arr.length - 1){
                        result.push(arr[i + 1]);
                        result.push(arr[i + 1]);
                    }
                    i += 2;
                    break;
                case "--double-prev":
                    if (i != 0)
                        result.push(arr[i - 1]);
                    i++;
                    break;
                default:
                    {
                        result.push(arr[i]);
                        i++;
                    }
            }
        }
        return result;
    }   
};
