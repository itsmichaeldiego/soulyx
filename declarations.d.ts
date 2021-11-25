// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: { [key: string]: string },
    font: { [key: string]: string }
  }
}