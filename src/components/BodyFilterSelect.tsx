import React, { useState } from "react";
import { SelectInput } from "vcc-ui";

type FilterOptions = {
    key: string;
    label: string;
}
interface Props<T extends Record<string, string | number>> {
    filterKey: keyof T
    data: T[]
    setFilteredCallback: (data: T[]) => void;
    options: FilterOptions[];
}

const BodyFilterSelect = <K extends string, T extends Record<K, string | number>>(props: Props<T>) => {
    const { setFilteredCallback, data, filterKey, options } = props;
    const [value, setValue] = useState<string>("all");

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setValue(val);
        setFilteredCallback(val === "all" ? data : data.filter(elem => elem[filterKey] === val));
    };

    return (
        <SelectInput label='Body type' aria-label='Filter body type' value={value} onChange={onChange}>
            <option value="all">ALL</option>
            {options.map(option => (
                <option value={option.key} key={option.key}>{option.label}</option>
            ))}
        </SelectInput>
    );
};

export default BodyFilterSelect;