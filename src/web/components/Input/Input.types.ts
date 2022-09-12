import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface CustomInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	error?: FieldError | null;
}
