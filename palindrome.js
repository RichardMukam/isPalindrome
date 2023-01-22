function isPalindrome (name)
{
    let numberOfChars = name.length;
    const numbersNotAvailable = [0, 1, 2];
    let returnType = false;

    if (numbersNotAvailable.includes(numberOfChars))
    {
        returnType = false;
    }
    
    if (numberOfChars % 2 == 0)
    {
        let firstHalf = name.slice(0, numberOfChars/2);
        let secondHalf = name.slice(numberOfChars/2)
        let secondHalfReversed = '';
        for (let i = secondHalf.length - 1; i >= 0; i--)
        {
            secondHalfReversed += secondHalf[i];
        } 

        if (firstHalf == secondHalfReversed)
        {
            returnType = true;
        }
    }
    else if (numberOfChars % 2 != 0)
    {
        let firstHalf = name.slice(0, (numberOfChars-1)/2);
        let secondHalf = name.slice((name.length+1)/2);
        let secondHalfReversed = '';
        for (let i = secondHalf.length-1; i >= 0; i--)
        {
            secondHalfReversed += secondHalf[i];
        }
        if (firstHalf == secondHalfReversed)
        {
            returnType = true;
        }
    }

    if (returnType === true)
    {
        return `The word \"${name}\" is a palindrome!`
    }

    return `The word \"${name}\" is not a palindrome!`.
}
