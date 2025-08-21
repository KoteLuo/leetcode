function generate(numRows: number): number[][] {
    const result: number[][]=[];
    for(let i=0; i<numRows; i++){
        const row = new Array(i + 1).fill(1);//新增全是1的一維陣列
        for(let j=1;j<i;j++){ //j=0是邊界，不用改寫，已經是1了
            row[j]=result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }
    return result;
};