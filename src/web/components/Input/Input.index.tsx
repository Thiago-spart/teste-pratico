/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

import type { CustomInputProps } from "./Input.types";

import * as S from "./Input.styled";

const Input = (
	{ name, label, error = null, ...rest }: CustomInputProps,
	ref: any,
) => {
	return (
		<S.Container error={Boolean(error)}>
			<S.CustomLabel htmlFor={name}>{label}</S.CustomLabel>
			<S.InputStyle name={name} id={name} ref={ref} {...rest} />
		</S.Container>
	);
};

export default forwardRef(Input);
