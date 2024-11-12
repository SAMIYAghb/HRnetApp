import React from "react";

interface PaginationInfoProps {
  startIndex: number;
  endIndex: number;
  totalEntries: number;
}

const PaginationInfo: React.FC<PaginationInfoProps> = ({ startIndex, endIndex, totalEntries }) => (
  <p>Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries</p>
);

export default PaginationInfo;
