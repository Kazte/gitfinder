import * as React from 'react';
import { SVGProps } from 'react';

const CompanyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    viewBox='0 0 384 512'
    style={{
      fill: '#fff'
    }}
    {...props}
  >
    <path d='M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h80v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16z' />
  </svg>
);

export default CompanyIcon;