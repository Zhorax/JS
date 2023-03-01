

class Product
{
    #name;
    #description;
    #quantity;
    #price;

    constructor(name, price, quantity, description)
    {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
        this.#description = description;
    }

    get getter()
    {
        let massive = [this.#name, this.#price, this.#quantity, this.#description];
        console.log(massive);
        return massive;
    }

    set name(name)
    {
        this.#name=name;
    }
    
    set price(price)
    {
        this.#price = price;
    }
    
    set quantity(quantity)
    {
        this.#quantity=quantity;
    }
    
    set description(description)
    {
        this.#description=description;
    }

    Search(string)
    {
        let namebool = true, pricebool = true , quantitybool = true, descriptionbool = true; 
        string = string.split('&');
        let string1 = [];
        for (let i=0; i<string.length; i++)
        {
         string1[i] = string[i].split('-');
        }
        for (let i=0; i<string.length; i++)
    {
    if(string1[i][0]== "name")
    {
        if ( string1[i][1] == "contains")
        {
            if(this.#name.includes(string1[i][2]) == false)
                namebool = false;

        }
        if ( string1[i][1] == "starts")
        {
            if(this.#name.startsWith(string1[i][2]) == false)
                namebool = false;

        }
        if ( string1[i][1] == "ends")
        {
            if(this.#name.endsWith(string1[i][2]) == false)
                namebool = false;
        }   
    }
    
    if(string1[i][0]== "price")
    {
        let chars = string1[i][1].slice(0, string1[i][1].search(/\d/));
        let numbs = string1[i][1].replace(chars, '');
        numbs = Number(numbs);
        if ( chars == ">=")
        {
            if (this.#price < numbs)
                pricebool = false;
        }
        if ( chars == "<=")
        {
            if (this.#price > numbs)
                pricebool = false;
        }
        if ( chars == "<")
        {
            if (this.#price >= numbs)
                pricebool = false;
        }
        if ( chars == ">")
        {
            if (this.#price <= numbs)
                pricebool = false;
        }
        if ( chars == "=")
        {
            if (this.#price != numbs)
                pricebool = false;
        }
    }
    
    if(string1[i][0]== "quantity")
    {
        let chars = string1[i][1].slice(0, string1[i][1].search(/\d/));
        let numbs = string1[i][1].replace(chars, '');
        numbs = Number(numbs);
        if ( chars == ">=")
        {
            if (this.#quantity < numbs)
                quantitybool = false;
        }
        if ( chars == "<=")
        {
            if (this.#quantity > numbs)
                quantitybool = false;
        }
        if ( chars == "<")
        {
            if (this.#quantity >= numbs)
                quantitybool = false;
        }
        if ( chars == ">")
        {
            if (this.#quantity <= numbs)
                quantitybool = false;
        }
        if ( chars == "=")
        {
            if (this.#quantity != numbs)
                quantitybool = false;
        }
    }
    
    if(string1[i][0]== "description")
    {
        if ( string1[i][1] == "contains")
        {
            if(this.#description.includes(string1[i][2]) == false)
                descriptionbool = false;

        }
        if ( string1[i][1] == "starts")
        {
            if(this.#description.startsWith(string1[i][2]) == false)
                descriptionbool = false;

        }
        if ( string1[i][1] == "ends")
        {
            if(this.#description.endsWith(string1[i][2]) == false)
                descriptionbool = false;
        }    
    }
}
    if (namebool*descriptionbool*pricebool*quantitybool == 1)
    {
        this.getter;
    }
    }
}

module.exports = Product;