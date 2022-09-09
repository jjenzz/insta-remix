import * as React from "react";
import * as ReactDOM from "react-dom";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/

type DialogProps = React.PropsWithChildren<{ onClose?(): void }>;

const Dialog = (props: DialogProps) => {
  const [container, setContainer] = React.useState<HTMLElement>();

  useLayoutEffect(() => {
    setContainer(window.document.body);
  }, []);

  return container
    ? ReactDOM.createPortal(
        <div style={styles.overlay} onClick={props.onClose}>
          <div style={styles.root}>{props.children}</div>
        </div>,
        container
      )
    : null;
};

/* ---------------------------------------------------------------------------------------------- */

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "grid",
    placeItems: "center",
  },
  root: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
};

export { Dialog };
