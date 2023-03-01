PunctuationMarks=[",",".",":",";"]

module.exports.LowerCase = function (str)
{
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return(str);
};

module.exports.DeleteSpace = function (str)
{
    str = str.replace(/ +/g," ");
    for (let l=0; l<PunctuationMarks.length;l++)
    {
    let result_str='', k =0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]==PunctuationMarks[l])
        {
            if (str[i+1]!=" ")
            {
                result_str += str.slice(k,i+1) + " " ;
                k=i+1;
            }
        
        }
    }
    result_str +=str.slice(k);
    str = "";
    k=0;
    for (let i = 0; i < result_str.length; i++) 
    {
        if(result_str[i]==PunctuationMarks[l])
        {
            if (result_str[i-1]==" ")
            {
                str += result_str.slice(k,i-1);
                k=i;
            }
        
        }
    }
    str +=result_str.slice(k);
    }
    return(str);
};

module.exports.AmountOfWords = function (str)
{
    str = this.DeleteSpace(str);
    return str.split(' ').length;
};

module.exports.AmountOfUniqueWords = function (str)
{
    str = str.toLowerCase();
    str = this.DeleteSpace(str);
    let Arraystr=[] , ArrayStrCount=[];
    str = str.replace(/[^a-zа-яё\s]/gi, '');
    let temp=0, g=0;
    for (let i=0; i<str.split(" ").length; i++)
    {
        for (let k=0;k<Arraystr.length;k++)
        {
            if(Arraystr[k]==str.split(" ")[i])
                temp++;
        }
        if (temp==0)
        {
            Arraystr[g]=str.split(" ")[i];
            ArrayStrCount[g]=1;
            for (let j=i+1; j < str.split(" ").length; j++)
            {
                if(Arraystr[g]==str.split(" ")[j])
                    ArrayStrCount[g]++;
            }
            g++;
        }
        temp=0;
    }
    for (let i=0; i<Arraystr.length; i++)
    {
        console.log("Колличество слов '" + Arraystr[i] + "' в предложении равняется " + ArrayStrCount[i]);
    }
    return(Arraystr);
};