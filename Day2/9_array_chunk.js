function arrayChunk(arr, size) {
    const chunks = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            chunk.push(arr[j]);
        }
        chunks.push(chunk);
    }

    return chunks;
}

console.log(arrayChunk([1, 2, 3, 4, 5], 2));
console.log(arrayChunk([10, 20, 30, 40], 3));
