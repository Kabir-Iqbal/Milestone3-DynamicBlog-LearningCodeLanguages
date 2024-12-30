import * as React from "react";
import { cn } from "@/lib/utlis";
import { Input } from "postcss";
import Input_ from "postcss/lib/input";

const Input1 = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({className, type , ...props },ref) =>{
        return (
            <input type={type}
            className={cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-variable:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props} />

        );
    }
);

 Input1.displayName = 'Input'
 export   {Input1}

 