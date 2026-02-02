import React from 'react';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div id="content" style={{ paddingTop: '6.4rem' }}>
        {children}
      </div>
    </div>
  );
}
