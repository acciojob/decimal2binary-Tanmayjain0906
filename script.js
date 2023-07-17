function decimalToBinary(num) {
    let ans = 0;
    let i = 1;
    while(num>0)
    {
        let rem = x%2;
        ans = ans + (rem * i);
        i = i*10;
        num = parseInt(x/2);
    }
	return ans;
}

window.decimalToBinary = decimalToBinary;
