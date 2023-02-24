import styles from "./Button.module.css";

import React, { ReactNode } from "react";

type ReactAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Variant = "primary" | "darkPrimary" | "lightSecondary";
type Size = "default" | "large";

enum ButtonComponentType {
  LINK = "link",
  BUTTON = "button",
}

type IBaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

type AnchorProps = IBaseProps & ReactAnchorProps & {};
type ButtonProps = IBaseProps & ReactButtonProps & {};

type ButtonComponentProps<T extends ButtonComponentType> = {
  as?: T;
  children: ReactNode;
} & (T extends ButtonComponentType.BUTTON ? ButtonProps : AnchorProps);

export function Button<T extends ButtonComponentType>({
  children,
  as,
  variant = "primary",
  size = "default",
  ...restProps
}: ButtonComponentProps<T>) {
  const commonProps = {
    className: `${styles.btn} ${styles[variant]} ${styles[size]}`,
  };

  if (as === ButtonComponentType.LINK)
    return (
      <a {...commonProps} {...(restProps as ReactAnchorProps)}>
        {children}
      </a>
    );

  return (
    <button {...commonProps} {...(restProps as ReactButtonProps)}>
      {children}
    </button>
  );
}
