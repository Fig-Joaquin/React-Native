import { useState } from "react";

interface Options {
    initialValue: number;
}

export const UseCounter = ({initialValue = 0}: Options) => {

    const [count, setCount] = useState<number>(initialValue)

    const increasedBy = (value: number) => {
        const newValue = value + count;

        if (newValue < 0) return;
        
        setCount(count + value)
    };

    return {

    // Properties
    count,

    // Methods
    increasedBy
    }
}