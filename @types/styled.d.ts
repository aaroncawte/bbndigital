import { type theme } from "../styles/theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  // TODO: fix
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends CustomTheme {}
}
