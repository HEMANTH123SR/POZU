import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    accept?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    name,
    type,
    placeholder,
    accept,
    value,
    onChange,
    required,
}) => (
    <div className="flex w-8/12 flex-col space-y-1">
        <Label htmlFor={id} className="pl-1.5 text-base">
            {label}
        </Label>
        <Input
            type={type}
            id={id}
            name={name}
            className="border p-2"
            placeholder={placeholder}
            accept={accept}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);