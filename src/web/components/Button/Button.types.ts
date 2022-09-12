import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	schema: "outlined" | "primary" | "unstyled";
	isFullWidth?: boolean;
	children: ReactNode;
}
