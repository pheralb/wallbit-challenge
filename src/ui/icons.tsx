/* eslint-disable react-refresh/only-export-components */

/**
 * 📦 Icons from Phosphor Icons (https://phosphoricons.com).
 * 🤔 Why don't use the official package? The following problem occurs at Vercel and other hosting providers:
 * ⚠️ Error: EMFILE: too many open files
 */

import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const mainSize = 32;

const Ticket = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8 24 24 0 0 1 0 48 8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8 24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4"
      ></path>
    </svg>
  );
};

const Trash = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
      ></path>
    </svg>
  );
};

const Plus = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"
      ></path>
    </svg>
  );
};

const Minus = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
      ></path>
    </svg>
  );
};

const Tag = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M243.31 136 144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
      ></path>
    </svg>
  );
};

const X = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      ></path>
    </svg>
  );
};

const ShoppingBagOpen = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2m-42-90a46 46 0 0 1-92 0 6 6 0 0 1 12 0 34 34 0 0 0 68 0 6 6 0 0 1 12 0"
      ></path>
    </svg>
  );
};

const Question = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18-1.5-3.63-1.58-9-1.67-14.68-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55-3.63 1.5-9 1.58-14.68 1.67-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18 1.5 3.63 1.58 9 1.67 14.68.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67 3.91 1.62 8.11 5.65 12.18 9.55 6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55 3.63-1.5 9-1.58 14.68-1.67 9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68 1.62-3.91 5.65-8.11 9.55-12.18 6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9-2.38 5.74-2.48 12.52-2.58 19.08-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58-6 2.48-11 7.31-15.91 12-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12-5.74-2.38-12.52-2.48-19.08-2.58-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9 2.38-5.74 2.48-12.52 2.58-19.08.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58 6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12 5.74 2.38 12.52 2.48 19.08 2.58 7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08 2.48 6 7.31 11 12 15.91 5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48M138 180a10 10 0 1 1-10-10 10 10 0 0 1 10 10m28-72c0 16.92-13.89 31-32 33.58V144a6 6 0 0 1-12 0v-8a6 6 0 0 1 6-6c14.34 0 26-9.87 26-22s-11.66-22-26-22-26 9.87-26 22v4a6 6 0 0 1-12 0v-4c0-18.75 17-34 38-34s38 15.25 38 34"></path>
    </svg>
  );
};

const Caret = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || mainSize}
      height={props.size || mainSize}
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
    </svg>
  );
};

export { Ticket, Trash, Plus, Minus, Tag, X, ShoppingBagOpen, Question, Caret };
