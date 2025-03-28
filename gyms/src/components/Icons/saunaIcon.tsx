import React from 'react';

function SaunaIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width || 24}
      height={props.height || 24}
      fill={props.color || 'currentColor'}
      {...props}
    >
      <path d="
        M7 4
        c-0.828 0-1.5 0.672-1.5 1.5
        S6.172 7 7 7
        s1.5-0.672 1.5-1.5
        S7.828 4 7 4
        z

        M6 8
        c-0.55 0-1 0.45-1 1
        v4H3v2h4v-3h2v3h4v-2H9v-4
        c0-0.55-0.45-1-1-1H6
        z

        M2 13
        v1.5h6V13H7v1H2
        z

        M15 5
        c1 0 2 0.7 2 1.6
        S16 8.2 15 8.2
        s-2-0.7-2-1.6
        S14 5 15 5
        z

        M18 7
        c1 0 2 0.7 2 1.6
        S19 10.2 18 10.2
        s-2-0.7-2-1.6
        S17 7 18 7
        z

        M15 10
        c1 0 2 0.7 2 1.6
        S16 13.2 15 13.2
        s-2-0.7-2-1.6
        S14 10 15 10
        z
      " />
    </svg>
  );
}

export default SaunaIcon;
