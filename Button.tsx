import React, { useState } from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';

interface btnProps {
  icons: any;
  text: string;
  menuIcon: AnalyserOptions;
}

export default function Button({ icons, text, menuIcon }: btnProps) {
  const [btnIcon, setBtnicon] = useState(<FaChevronRight />);
  return (
    <span
      className="btnContainer"
      onMouseOver={() => setBtnicon(<FaArrowRight />)}
      onMouseLeave={() => setBtnicon(<FaChevronRight />)}
      style={{}}
    >
      <span>
        {menuIcon}
        {text}{' '}
      </span>{' '}
      {btnIcon}
    </span>
  );
}
