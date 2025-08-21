function getRow(rowIndex: number): number[] {
    const row: number[] = [];
    
    for (let i = 0; i <= rowIndex; i++) {   // 這裡的 i 就是 k
        if (i === 0) {
            row.push(1);                    // C(n,0) = 1
        } else {
            // C(n,k) = C(n,k-1) * (n-k+1) / k
            const prev = row[i - 1];        // C(n, k-1)
            const curr = prev * (rowIndex - i + 1) / i; // 得到 C(n, k)
            row.push(curr);
        }
    }
    
    return row;
};
