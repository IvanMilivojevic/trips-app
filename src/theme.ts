import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#eeeeee", "#000000")(props),
      },
    }),
  },
})
