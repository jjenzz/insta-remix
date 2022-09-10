import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * PhotoSummary
 * -----------------------------------------------------------------------------------------------*/

type PhotoSummaryProps = { src: string };

const PhotoSummary = (props: PhotoSummaryProps) => (
  <div style={styles.summary}>
    <img alt={''} src={props.src} width={500} height={500} />
    <div style={styles.comments}>
      <h2>Comments</h2>
    </div>
  </div>
);

/* ---------------------------------------------------------------------------------------------- */

const styles: Record<string, React.CSSProperties> = {
  summary: {
    background: '#eee',
    display: 'grid',
    gridTemplateColumns: '500px minmax(400px, 1fr)',
  },
  comments: {
    padding: 20,
  },
};

export { PhotoSummary };
