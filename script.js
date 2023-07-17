function decimalToBinary(num) {
    let ans = 0;
    let i = 1;
    while(x>0)
    {
        let rem = x%2;
        ans = ans + (rem * i);
        i = i*10;
        x = parseInt(x/2);
    }
	return ans;
}

window.decimalToBinary = decimalToBinary;
