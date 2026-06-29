/**
 * https://www.radix-ui.com/primitives/docs/components/tabs
 */
import type { ElementRef } from "react";
import { forwardRef } from "react";

import { Separator } from "../index";
import { StyledTabsList } from "./Tabs.styles";
import type { TabsListProps } from "./Tabs.types";

const TabsList = forwardRef<ElementRef<typeof StyledTabsList>, TabsListProps>(
  (props, forwardedRef) => (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
      <Separator />
    </>
  ),
);
TabsList.displayName = "TabsList";

export { TabsList };
