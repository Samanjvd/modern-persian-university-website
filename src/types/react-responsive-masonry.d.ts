declare module 'react-responsive-masonry' {
  import * as React from 'react';

  interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
    columnsCount?: number;
    gutter?: string | number;
  }

  const Masonry: React.FC<MasonryProps>;
  export default Masonry;
}
