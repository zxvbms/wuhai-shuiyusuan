import React from 'react';
import Inspection from './Inspection';

export default function InspectionDetail() {
  // We can just reuse the Inspection component and maybe pass a prop to open the sheet by default,
  // but for this prototype, we'll just render Inspection.
  return <Inspection />;
}
