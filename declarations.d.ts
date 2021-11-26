// import original module declarations
import 'styled-components';
import { ISpacingFn } from "spacing-helper";

enum EHierarchies {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: { [key in EHierarchies]?: string },
    cta: { [key in EHierarchies]?: string }
    font: { [key in EHierarchies]?: string }
    spacing: ISpacingFn;
  }
}