function maxProduct(arr, n)
{
    if (n < 2)
    {
        document.write("No pairs exists" + "<br>");
        return;
    }
 
    let a = arr[0], b = arr[1];
 
    for (let i=0; i<n; i++)
    for (let j=i+1; j<n; j++)
        if (arr[i]*arr[j] > a*b)
            a = arr[i], b = arr[j];
 
    document.write("Max product pair is {" + a + ", "
        + b + "}");
}
 
    let arr = [1, 4, 3, 6, 7, 0];
    let n = arr.length;
    maxProduct(arr, n);
 
