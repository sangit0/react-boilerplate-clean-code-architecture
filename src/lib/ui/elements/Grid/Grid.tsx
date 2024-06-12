import {
  Grid as ChakraGrid,
  GridProps as ChakraGridProps,
  GridItem as ChakraGridItem,
  GridItemProps as ChakraGridItemProps,
} from '@chakra-ui/react';
import React from 'react';

/**
 * Display grid element
 * @param children Grid content
 * @param rest
 * @returns JSX.Element
 */
export const Grid = ({ children, ...rest }: ChakraGridProps) => {
  return <ChakraGrid {...rest}>{children}</ChakraGrid>;
};

/**
 * Grid items element
 * @param children Grid item content
 * @param rest
 * @returns JSX.Element
 */
export const GridItem = ({ children, ...rest }: ChakraGridItemProps) => {
  return <ChakraGridItem {...rest}>{children}</ChakraGridItem>;
};

/** Grid with item properties */
type GridWithItemProps = {
  children: React.ReactNode | React.ReactNode[];
  gridProps?: ChakraGridProps;
  gridItemProps?: ChakraGridItemProps;
};

/**
 * Display grid with item element
 * @param children Grid with item content and properties *
 * <GridWithItem
 *  gridProps={{ templateColumns: 'repeat(5, 1fr)', gap: 4 }}
 *  gridItemProps={{ colSpan: 2 }}
 * >
 *    <Text>1</Text>
 *    <Text>2</Text>
 * </GridWithItem>
 * @param rest
 * @returns JSX.Element
 */
export const GridWithItem = ({ children, ...rest }: GridWithItemProps) => {
  const { gridProps, gridItemProps } = rest;

  const gridItems = React.Children.map(children, child => {
    return <GridItem {...gridItemProps}>{child}</GridItem>;
  });

  return <Grid {...gridProps}>{gridItems}</Grid>;
};
