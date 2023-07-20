import { SVGProps } from "react";

export function CrossIcon(props: SVGProps<SVGSVGElement & { fill: string }>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <mask id="ipSCloseOne0">
        <g fill="none" strokeLinejoin="round" strokeWidth="4">
          <path
            fill="#fff"
            stroke="#fff"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
          ></path>
          <path
            stroke="#000"
            strokeLinecap="round"
            d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"
          ></path>
        </g>
      </mask>
      <path
        fill={props.fill}
        d="M0 0h48v48H0z"
        mask="url(#ipSCloseOne0)"
      ></path>
    </svg>
  );
}

export function DashboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#888888"
        d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
      ></path>
    </svg>
  );
}

// export function DarkMode(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       // width="1em"
//       // height="1em"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       <path
//         fill="#888888"
//         d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762Zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455Zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455Z"
//       ></path>
//     </svg>
//   );
// }

export function DarkMode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="#888888"
        d="M244 96a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12V72a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12ZM144 60h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24Zm75.81 90.38A12 12 0 0 1 222 162.3A100 100 0 1 1 93.7 34a12 12 0 0 1 15.89 13.6A85.12 85.12 0 0 0 108 64a84.09 84.09 0 0 0 84 84a85.22 85.22 0 0 0 16.37-1.59a12 12 0 0 1 11.44 3.97ZM190 172A108.13 108.13 0 0 1 84 66a76 76 0 1 0 106 106Z"
      ></path>
    </svg>
  );
}

export function LightMode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#888888"
        d="M12 4q-.425 0-.713-.288T11 3V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4Zm0 19q-.425 0-.713-.288T11 22v-1q0-.425.288-.713T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23Zm9-10q-.425 0-.713-.288T20 12q0-.425.288-.713T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-1ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13H2Zm16-7q-.275-.275-.275-.688T18 4.6l.35-.375q.275-.3.7-.3t.725.3q.3.3.3.725t-.3.725l-.375.35q-.3.275-.7.275T18 6ZM4.225 19.775q-.3-.3-.3-.725t.3-.725l.375-.35q.3-.275.7-.275t.7.3q.275.275.288.7T6 19.4l-.35.375q-.275.3-.7.3t-.725-.3Zm14.1 0l-.35-.375q-.275-.3-.275-.7t.3-.7q.275-.275.7-.287t.7.287l.375.35q.3.275.3.7t-.3.725q-.3.3-.725.3t-.725-.3ZM4.6 6l-.375-.35q-.3-.275-.3-.7t.3-.725q.3-.3.725-.3t.725.3l.35.375q.275.3.275.7T6 6q-.275.275-.687.275T4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
      ></path>
    </svg>
  );
}
